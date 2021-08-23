import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FeatureToggleDTO} from '../models/FeatureToggleDTO';

@Injectable({
  providedIn: 'root'
})
export class FeatureToggleService {
  private readonly URL = 'api/feature-toggle/';

  constructor(private httpClient: HttpClient) {
  }

  findAllActive(): Observable<any> {
    return this.httpClient.get(this.URL);
  }

  saveOrUpdate(featureToggleDTO: FeatureToggleDTO) {
    if (featureToggleDTO.id) {
      return this.httpClient.post(this.URL, featureToggleDTO);
    } else {
      return this.httpClient.put(this.URL, featureToggleDTO);
    }
  }

  delete(customerToogleId) {
    return this.httpClient.delete(this.URL + customerToogleId);
  }
}
