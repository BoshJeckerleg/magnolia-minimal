import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CmsTemplateDataResolver } from '../shared-cms/resolvers/cms-template-data/cms-template-data-resolver';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'appliance-details',
        loadChildren: () =>
          import('./appliance-details/appliance-details.module').then(
            (module) => module.ApplianceDetailsModule
          ),
        data: {
          cmsNodePath: '/appliance-details',
        },
        resolve: {
          cmsTemplateData: CmsTemplateDataResolver,
        },
      },
      {
        path: '**',
        pathMatch: 'exact',
        redirectTo: 'appliance-details',
      },
    ]),
  ],
})
export class ApplianceRegistrationModule {}
