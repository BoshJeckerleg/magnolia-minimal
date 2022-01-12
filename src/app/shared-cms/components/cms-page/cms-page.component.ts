import { Component, forwardRef, Input } from '@angular/core';
import { PersonalizationServiceHelper } from '@magnolia/angular-editor';
import { TemplateAnnotations } from '@magnolia/template-annotations';
import { CmsPageDefinition } from '../../models/cms-page.interface';
import { CmsTemplateContainer } from '../../models/cms-template-container.model';
import { CmsTemplateData } from '../../models/cms-template-data.interface';
import { CmsContextService } from '../../services/cms-context/cms-context.service';

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

    if (this.cmsContextService.inIframe()) {
      this.setComments();
      this.cmsContextService.onFrameReady();
      this.cmsContextService.refresh();
    }
  }

  closeComment!: string;
  openComment!: string;

  constructor(
    protected readonly cmsContextService: CmsContextService,
    private readonly personalizationService: PersonalizationServiceHelper
  ) {
    super(cmsContextService);

    this.cmsContextService.initPageEditorBridge();
    this.cmsContextService.registerOnMessageEvent(
      'updateState',
      (message: any) => {
        if (this.cmsContextService.templateAnnotations) {
          const templateAnnotations = this.personalizationService.wrap(
            this.cmsContextService.templateAnnotations,
            message.selectedComponentVariants
          );
          this.cmsContextService.setTemplateAnnotations(templateAnnotations);
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
