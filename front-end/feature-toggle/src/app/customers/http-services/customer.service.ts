import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerDTO} from '../models/CustomerDTO';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private readonly URL = 'api/customer/';

  constructor(private httpClient: HttpClient) {
  }

  findAllActive(): Observable<any> {
    return this.httpClient.get(this.URL);
  }

  saveOrUpdate(customerDTO: CustomerDTO) {
    if (customerDTO.id) {
      return this.httpClient.post(this.URL, customerDTO);
    } else {
      return this.httpClient.put(this.URL, customerDTO);
    }
  }

  delete(customerId) {
    return this.httpClient.delete(this.URL + customerId);
  }
}
