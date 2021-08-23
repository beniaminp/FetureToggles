export interface FeatureToggleDTO{
  id?: number;
  displayName?: string;
  technicalName?: string;
  expiresOn?: number;
  description?: string;
  inverted?: boolean;
  active?: boolean;
}
