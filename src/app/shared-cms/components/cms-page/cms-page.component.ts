import { Component, forwardRef, Input } from '@angular/core';
import {
  EditorContextService,
  PersonalizationServiceHelper,
} from '@magnolia/angular-editor';
import { TemplateAnnotations } from '@magnolia/template-annotations';
import { CmsPageDefinition } from '../../models/cms-page.interface';
import { CmsTemplateContainer } from '../../models/cms-template-container.model';
import { CmsTemplateData } from '../../models/cms-template-data.interface';

@Component({
  selector: 'shared-cms-page',
  templateUrl: './cms-page.component.html',
  styleUrls: ['./cms-page.component.scss'],
  providers: [
    {
      provide: CmsTemplateContainer,
      useExisting: forwardRef(() => CmsPageComponent),
    },
  ],
})
export class CmsPageComponent<
  T extends CmsPageDefinition
> extends CmsTemplateContainer<T> {
  @Input() set templateData(data: CmsTemplateData<T>) {
    this.setCmsTemplateData(data);

    if (this.EditorContextService.inIframe()) {
      this.setComments();
      this.EditorContextService.onFrameReady();
      this.EditorContextService.refresh();
    }
  }

  closeComment!: string;
  openComment!: string;

  constructor(
    protected readonly EditorContextService: EditorContextService,
    private readonly personalizationService: PersonalizationServiceHelper
  ) {
    super(EditorContextService);

    this.EditorContextService.initPageEditorBridge();
    this.EditorContextService.registerOnMessageEvent(
      'updateState',
      (message: any) => {
        if (this.EditorContextService.templateAnnotations) {
          const templateAnnotations = this.personalizationService.wrap(
            this.EditorContextService.templateAnnotations,
            message.selectedComponentVariants
          );
          this.EditorContextService.setTemplateAnnotations(templateAnnotations);
          this.setComments();
        }
      }
    );
  }

  private setComments(): void {
    this.openComment = TemplateAnnotations.getPageCommentString(
      this.page,
      this.templateAnnotations
    );
    this.closeComment = '/cms:page';
  }
}
