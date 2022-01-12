import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedCmsModule } from 'src/app/shared-cms/shared-cms.module';
import { SharedModule } from '../../shared/shared.module';
import { ApplianceDetailsComponent } from './pages/appliance-details/appliance-details.component';

@NgModule({
  declarations: [ApplianceDetailsComponent],
  imports: [
    SharedModule,
    SharedCmsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ApplianceDetailsComponent,
      },
    ]),
  ],
  providers: [],
})
export class ApplianceDetailsModule {}
