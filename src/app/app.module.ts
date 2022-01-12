import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplianceDetailsComponent } from './appliance-registration/appliance-details/pages/appliance-details/appliance-details.component';
import { SharedCmsModule } from './shared-cms/shared-cms.module';
import { JumbotronComponent } from './shared/components/jumbotron/jumbotron.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedCmsModule.forRoot({
      'dgx-shared:components/jumbotron': JumbotronComponent,
      'dgx-registration:pages/appliance-details': ApplianceDetailsComponent,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
