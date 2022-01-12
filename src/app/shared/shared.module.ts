import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';

@NgModule({
  declarations: [JumbotronComponent],
  imports: [CommonModule],
  exports: [JumbotronComponent],
})
export class SharedModule {}
