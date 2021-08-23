import {CustomerDTO} from '../../customers/models/CustomerDTO';
import {FeatureToggleDTO} from '../../feature/models/FeatureToggleDTO';

export interface CustomerToggle {
  id?: number;
  customer?: CustomerDTO;
  featureToggle?: FeatureToggleDTO;
  expiresOn?: number;
}
