export class BackoffFactory<Response> {
  private retryCount = 0;
  private isSucceeded = false;
  private retriesMax = 3;
  private readonly intervalInMilliseconds = 100;
  constructor(
    private request: Promise<Response>,
    private responseHandlers: ((response: any) => Promise<any>)[],
    private onError?: (error: Error) => Promise<void>,
    private onFinally?: () => Promise<void>,
  ) {
  }

  public async try(numberOfAttempts?: number) {
    this.retriesMax = numberOfAttempts ? numberOfAttempts : this.retriesMax;
    let result: unknown;
    do {
      try {
        this.retryCount += 1;
        result = await this.request;
        for (const handler of this.responseHandlers) {
          result = await handler(result);
        }
        this.isSucceeded = true;
      } catch (error) {
        if (this.retryCount >= this.retriesMax || error.name === 'AbortError') {
          return typeof this.onError !== 'undefined' && this.onError(error);
        }
        await this.delay(this.getWaitTimeExp(this.retryCount));
      } finally {
        if (this.retryCount >= this.retriesMax) {
          typeof this.onFinally !== 'undefined' && this.onFinally();
        }
      }
    }
    while (!this.isSucceeded && this.retryCount < this.retriesMax);
    return this.isSucceeded && result;
  }

  private getWaitTimeExp(retryCount: number) {
    return Math.pow(2, retryCount) * this.intervalInMilliseconds;
  }

  private delay(waitTime: number) {
    return new Promise(resolve => setTimeout(resolve, waitTime));
  }
}
