export default class Request {

  serverUrl: string = import.meta.env.VITE_SERVER_URL || "";

  public async getRequest(endpoint: string) {
    const fetchResult = await fetch(`${this.serverUrl}${endpoint}`);
    const fetchData = await fetchResult.json();
    console.log(`Request url: ${this.serverUrl}${endpoint}`)
    return fetchData;
  }

  public async postRequest(endpoint: string, body: object, headerContentType: string) {

    const fetchResult = await fetch(`${this.serverUrl}${endpoint}`, { method: 'POST', body: JSON.stringify(body), headers: { 'content-type': headerContentType } })
    const fetchData = await fetchResult.json();
    console.log(`Request url: ${this.serverUrl}${endpoint}`)
    return fetchData;
  }

  public async putRequest(endpoint: string, body: object, headerContentType: string) {

    const fetchResult = await fetch(`${this.serverUrl}${endpoint}`, { method: 'PUT', body: JSON.stringify(body), headers: { 'content-type': headerContentType } })
    const fetchData = await fetchResult.json();
    console.log(`Request url: ${this.serverUrl}${endpoint}`)
    return fetchData;
  }

  public async patchRequest(url: string, body: object, headerContentType: string) {

    const fetchResult = await fetch(url, { method: 'PATCH', body: JSON.stringify(body), headers: { 'content-type': headerContentType } })
    const fetchData = await fetchResult.json();
    return fetchData;
  }
  public async deleteRequest(endpoint: string, body: object) {

    const fetchResult = await fetch(`${this.serverUrl}${endpoint}`, { method: 'DELETE', body: JSON.stringify(body) })
    const fetchData = await fetchResult.json();
    console.log(`Request url: ${this.serverUrl}${endpoint}`)
    return true;
  }

}