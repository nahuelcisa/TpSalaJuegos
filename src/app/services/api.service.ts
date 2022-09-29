import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl : any;
  constructor(public http : HttpClient) {}
  
  setearUrl(url : string)
  {
    this.apiUrl = url;
  }

  apiLlamada()
  {
    return this.http.get(this.apiUrl);
  }
}
