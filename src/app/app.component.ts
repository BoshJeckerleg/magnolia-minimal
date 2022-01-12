import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EditorContextService } from '@magnolia/angular-editor';
import { forkJoin, Observable } from 'rxjs';
import { ApplianceDetailsComponent } from './appliance-details/pages/appliance-details/appliance-details.component';
import { JumbotronComponent } from './shared/components/jumbotron/jumbotron.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  content: any;

  constructor(
    private readonly editorContext: EditorContextService,
    private readonly http: HttpClient
  ) {}

  ngOnInit(): void {
    this.editorContext.setComponentMapping({
      'dgx-shared:components/jumbotron': JumbotronComponent,
      'dgx-registration:pages/appliance-details': ApplianceDetailsComponent,
    });

    forkJoin({
      content: this.getContent('/appliance-details'),
      templateAnnotations: this.getTemplateAnnotations('/appliance-details'),
    }).subscribe((response: any) => {
      console.log(response);

      this.editorContext.setTemplateAnnotations(response.templateAnnotations);
      this.content = response.content;
      this.editorContext.refresh();
    });
  }

  private getContent(path?: string): Observable<any> {
    return this.http.get(
      `https://delivery-preview.saas.magnolia-cloud.com/environments/registration-pages-app/delivery/pages/v1${path}?subid_token=tpfz6fn8l87ybqlv`
    );
  }

  private getTemplateAnnotations(templatePath: string): Observable<any> {
    return this.http.get(
      `https://delivery-preview.saas.magnolia-cloud.com/environments/registration-pages-app/template-annotations/v1${templatePath}?subid_token=tpfz6fn8l87ybqlv`
    );
  }
}
