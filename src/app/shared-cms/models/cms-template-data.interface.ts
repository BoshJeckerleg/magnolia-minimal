import { CmsPage, CmsPageDefinition } from './cms-page.interface';
import { CmsTemplateAnnotations } from './cms-template-annotations.interface';

export interface CmsTemplateData<T extends CmsPageDefinition> {
  page: CmsPage<T>;
  templateAnnotations: CmsTemplateAnnotations;
}
