import { Injectable } from '@angular/core';
import { ResponseData } from "src/app/responseData.model";
import { HttpClient } from "@angular/common/http";
import { url } from "../../apiUrl";

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {

  constructor(private http: HttpClient) { }

  //service to list all service providers
  getServiceProviders() {
    return this.http.post<ResponseData>(
      `${url}service/providers`, {}
    );
  }

  //service to get the service provider details
  getServiceProviderDetails(provider_id) {
    return this.http.get<ResponseData>(
      `${url}service/providers/${provider_id}`
    );
  }
}

