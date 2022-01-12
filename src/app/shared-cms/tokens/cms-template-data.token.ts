import { InjectionToken } from '@angular/core';
import { CmsTemplateData } from '../models/cms-template-data.interface';

export const CMS_TEMPLATE_DATA = new InjectionToken<CmsTemplateData<any>>(
  'CMS_TEMPLATE_DATA'
);
