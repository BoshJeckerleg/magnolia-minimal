import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Params, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CmsPageDefinition } from '../../models/cms-page.interface';
import { CmsTemplateData } from '../../models/cms-template-data.interface';
import { CmsService } from '../../services/cms/cms.service';
import { getRouteData, getRouteParams } from '../../utils/router/router.utils';

@Injectable({
  providedIn: 'root',
})
export class CmsTemplateDataResolver<T extends CmsPageDefinition>
  implements Resolve<Observable<CmsTemplateData<T> | undefined>>
{
  constructor(private cmsService: CmsService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<CmsTemplateData<T> | undefined> {
    const { cmsNodePath, cmsNodePathPrefix } = getRouteData(route);
    const params = getRouteParams(route);

    if (!cmsNodePath) {
      return of(undefined);
    }

    const endpoint = this.formatCmsNodeEndpoint(
      params,
      cmsNodePath,
      cmsNodePathPrefix
    );
    return this.cmsService.getCmsTemplateData<T>(endpoint);
  }

  private formatCmsNodeEndpoint(
    params: Params,
    cmsNodePath: string,
    cmsNodePathPrefix?: string
  ): string {
    return `${cmsNodePathPrefix ?? ''}${cmsNodePath}`.replace(
      /:[a-zA-Z]+/g,
      (match: string) => {
        const key = match.replace(/:/, '');
        return params[key] ?? '';
      }
    );
  }
}
