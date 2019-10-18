export class HTTPService {

  public static get(url: string, abortSignal: AbortSignal): Promise<Response> {
    const init = {
      signal: abortSignal,
    };
    return fetch(url, init);
  }

  public static post(url: string, data: {[key:string]: any}): Promise<Response> {
    return fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }
}
