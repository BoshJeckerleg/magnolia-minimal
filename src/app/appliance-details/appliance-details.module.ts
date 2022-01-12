import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MagnoliaModule } from '@magnolia/angular-editor';
import { SharedModule } from '../shared/shared.module';
import { ApplianceDetailsComponent } from './pages/appliance-details/appliance-details.component';

@NgModule({
  declarations: [ApplianceDetailsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ApplianceDetailsComponent,
      },
    ]),
    MagnoliaModule,
  ],
  providers: [],
})
export class ApplianceDetailsModule {}
