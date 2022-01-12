import { Inject, Injectable } from '@angular/core';
import { EditorContextService } from '@magnolia/angular-editor';
import { CmsComponentMap } from '../../models/cms-component-map.interface';
import { CMS_COMPONENT_MAP } from '../../tokens/cms-component-map.token';

@Injectable({
  providedIn: 'root',
})
export class CmsContextService extends EditorContextService {
  constructor(
    @Inject(CMS_COMPONENT_MAP)
    private readonly cmsComponentMap: CmsComponentMap
  ) {
    super();

    this.setServerUrl(
      'https://author-tpfz6fn8l87ybqlv.saas.magnolia-cloud.com/.magnolia/admincentral?code=E21kNnZShLdswjBRV0O0HdTb6MCdxWVugx745CQtums&state=79f54c6105&client_name=OidcClient#app:pages-app:detail;/appliance-details:edit'
    );
    this.componentMapping = this.cmsComponentMap;
  }
}
