import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'register',
    loadChildren: () =>
      import('./appliance-registration/appliance-registration.module').then(
        (m) => m.ApplianceRegistrationModule
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
