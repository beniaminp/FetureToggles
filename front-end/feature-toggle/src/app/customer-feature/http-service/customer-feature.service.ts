import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerFeatureToggleDTO} from '../models/CustomerFeatureToggleDTO';

@Injectable({
  providedIn: 'root'
})
export class CustomerFeatureService {
  private readonly URL = 'api/customer-feature/';

  constructor(private httpClient: HttpClient) {
  }

  findAllActive(): Observable<any> {
    return this.httpClient.get(this.URL);
  }

  saveOrUpdate(customerFeatureToggleDTO: CustomerFeatureToggleDTO) {
    if (customerFeatureToggleDTO.customerFeatureToggleId) {
      return this.httpClient.put(this.URL, customerFeatureToggleDTO);
    } else {
      return this.httpClient.post(this.URL, customerFeatureToggleDTO);
    }
  }

  delete(customerFeatureToggleId: number) {
    return this.httpClient.delete(this.URL + customerFeatureToggleId);
  }

  findById(customerToggleId: number): Observable<any> {
    return this.httpClient.get(this.URL + `findById/${customerToggleId}`)
  }
}
