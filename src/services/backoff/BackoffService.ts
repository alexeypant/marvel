export class BackoffService {
  public static async try(
    request: Promise<any>,
    onResponseOne: (response: any) => Promise<any>,
    onResponseTwo: (response: any) => Promise<any>,
    onError: (error: any) => Promise<any>,
    onFinally: () => Promise<any>,
  ) {

    BackoffService.retryCount = 1;
    BackoffService.isSucceeded = false;
    let result;
    do {
      try {
        console.log(`try# ${BackoffService.retryCount}`);
        const response = await request;
        const json = await onResponseOne(response);
        result =  await onResponseTwo(json);
        BackoffService.isSucceeded = true;
      } catch (e) {
        BackoffService.retryCount += 1;
        if (BackoffService.retryCount >= BackoffService.retriesMax) {
          console.log('returning onError');
          return await onError(e);
        }
        await BackoffService.delay(BackoffService.getWaitTimeExp(BackoffService.retryCount));
        console.log(`catching error, retry#: ${BackoffService.retryCount}`);
        console.log(`waited for ${BackoffService.getWaitTimeExp(BackoffService.retryCount)} miliseconds`);
      } finally {
        if (BackoffService.retryCount >= BackoffService.retriesMax) {
          console.log('returning onFinally');
          await onFinally();
        }
      }
    }
    while (!BackoffService.isSucceeded && BackoffService.retryCount < BackoffService.retriesMax);
    console.log('returning result');
    return result;
  }

  private static retryCount: number;
  private static retriesMax = 5;
  private static isSucceeded: boolean;
  private static intervalInMilliseconds = 100;

  private static getWaitTimeExp(retryCount: number) {
    return Math.pow(2, retryCount) * BackoffService.intervalInMilliseconds;
  }

  private static delay(waitTime: number) {
    return new Promise(resolve => setTimeout(resolve, waitTime));
  }

}
