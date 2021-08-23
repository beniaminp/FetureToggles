export interface CustomerFeaturesTree {
  id?: number;
  name?: string;
  expiresOn?: number;
  featureLeafList?: CustomerFeaturesTree[];
}
