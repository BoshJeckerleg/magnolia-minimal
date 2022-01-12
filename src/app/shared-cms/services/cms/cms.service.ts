import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { CmsPage, CmsPageDefinition } from '../../models/cms-page.interface';
import { CmsTemplateAnnotations } from '../../models/cms-template-annotations.interface';
import { CmsTemplateData } from '../../models/cms-template-data.interface';

@Injectable({
  providedIn: 'root',
})
export class CmsService {
  constructor(private readonly http: HttpClient) {}

  getCmsTemplateData<T extends CmsPageDefinition>(
    path: string
  ): Observable<CmsTemplateData<T>> {
    return forkJoin({
      page: this.getCmsPage<T>(path),
      templateAnnotations: this.getCmsTemplateAnnotations(path),
    });
  }

  getCmsPage<T extends CmsPageDefinition>(
    path: string
  ): Observable<CmsPage<T>> {
    const nodePath = this.formatCmsNodePath(path);
    return this.http.get<CmsPage<T>>(
      `https://delivery-preview.saas.magnolia-cloud.com/environments/registration-pages-app/delivery/pages/v1/${nodePath}?subid_token=tpfz6fn8l87ybqlv`
    );
  }

  getCmsTemplateAnnotations(path: string): Observable<CmsTemplateAnnotations> {
    const nodePath = this.formatCmsNodePath(path);
    return this.http.get<CmsTemplateAnnotations>(
      `https://delivery-preview.saas.magnolia-cloud.com/environments/registration-pages-app/template-annotations/v1/${nodePath}?subid_token=tpfz6fn8l87ybqlv`
    );
  }

  formatCmsNodePath(path: string): string {
    return path.replace(/\/{2,}/, '/').replace(/^\//, '');
  }
}
