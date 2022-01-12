import { InjectionToken } from '@angular/core';
import { CmsComponentMap } from '../models/cms-component-map.interface';

export const CMS_COMPONENT_MAP = new InjectionToken<CmsComponentMap>(
  'CMS_COMPONENT_MAP'
);
