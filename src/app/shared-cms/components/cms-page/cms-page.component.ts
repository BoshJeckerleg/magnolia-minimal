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

    if (this.editorContextService.inIframe()) {
      this.setComments();
      this.editorContextService.onFrameReady();
      this.editorContextService.refresh();
    }
  }

  closeComment!: string;
  openComment!: string;

  constructor(
    protected readonly editorContextService: EditorContextService,
    private readonly personalizationService: PersonalizationServiceHelper
  ) {
    super(editorContextService);

    this.editorContextService.initPageEditorBridge();
    this.editorContextService.registerOnMessageEvent(
      'updateState',
      (message: any) => {
        if (this.editorContextService.templateAnnotations) {
          const templateAnnotations = this.personalizationService.wrap(
            this.editorContextService.templateAnnotations,
            message.selectedComponentVariants
          );
          this.editorContextService.setTemplateAnnotations(templateAnnotations);
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
