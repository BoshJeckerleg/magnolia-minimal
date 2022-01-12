import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routeCmsTemplateDataFactory } from 'src/app/shared-cms/factories/route-cms-template-data/route-cms-template-data.factory';
import { CmsTemplateData } from 'src/app/shared-cms/models/cms-template-data.interface';
import { CMS_TEMPLATE_DATA } from 'src/app/shared-cms/tokens/cms-template-data.token';

@Component({
  templateUrl: './appliance-details.component.html',
  providers: [
    {
      provide: CMS_TEMPLATE_DATA,
      useFactory: routeCmsTemplateDataFactory,
      deps: [ActivatedRoute],
    },
  ],
})
export class ApplianceDetailsComponent {
  templateData = this.cmsTemplateData;

  constructor(
    @Inject(CMS_TEMPLATE_DATA)
    private readonly cmsTemplateData: CmsTemplateData<any>
  ) {}
}
