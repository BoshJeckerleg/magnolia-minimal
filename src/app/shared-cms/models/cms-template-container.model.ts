import { EditorContextService } from '@magnolia/angular-editor';
import { BehaviorSubject, Observable } from 'rxjs';
import { CmsPage, CmsPageDefinition } from './cms-page.interface';
import { CmsTemplateAnnotations } from './cms-template-annotations.interface';
import { CmsTemplateData } from './cms-template-data.interface';

export abstract class CmsTemplateContainer<T extends CmsPageDefinition> {
  private _templateData$ = new BehaviorSubject<CmsTemplateData<T>>(
    {} as CmsTemplateData<T>
  );
  templateData$: Observable<CmsTemplateData<T>> = this._templateData$;

  constructor(
    protected readonly EditorContextService: EditorContextService,
    protected readonly initialTemplateData?: CmsTemplateData<T>
  ) {
    if (initialTemplateData) {
      this.setCmsTemplateData(initialTemplateData);
    }
  }

  setCmsTemplateData(templateData: CmsTemplateData<T>): void {
    this._templateData$.next(templateData);
    this.EditorContextService.setTemplateAnnotations(
      templateData.templateAnnotations
    );
  }

  get page(): CmsPage<T> {
    return this._templateData$.value.page;
  }

  get templateData(): CmsTemplateData<T> {
    return this._templateData$.value;
  }

  get templateAnnotations(): CmsTemplateAnnotations {
    return this._templateData$.value.templateAnnotations;
  }
}
