import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
