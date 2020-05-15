import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

/**
 * This service handles connection to the backend API, to send mails, etc.
 */
export class ConnectionService {
  // The url of our API
  url: string = 'http://localhost:3000/send';

  /**
   * ConnectionService constructor
   * @param router Injects the HttpClient service in the component
   */
  constructor(private http: HttpClient) {}

  /**
   * Sends a POST http request to the API, with the messageContent as the request body
   * @param messageContent The given content of the request
   */
  sendMessage(messageContent: any) {
    return this.http.post(this.url, JSON.stringify(messageContent), {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text',
    });
  }
}
