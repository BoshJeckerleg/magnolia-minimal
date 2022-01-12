import { ActivatedRoute } from '@angular/router';
import { CmsTemplateData } from '../../models/cms-template-data.interface';

export const routeCmsTemplateDataFactory = (
  route: ActivatedRoute
): CmsTemplateData<any> => {
  return route.snapshot.data['cmsTemplateData'];
};
