import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'appliance-details',
    loadChildren: () =>
      import('./appliance-details/appliance-details.module').then(
        (m) => m.ApplianceDetailsModule
      ),
  },
  {
    path: '**',
    redirectTo: 'appliance-details',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
