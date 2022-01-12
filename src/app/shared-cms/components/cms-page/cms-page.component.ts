import { Component, forwardRef, Input } from '@angular/core';
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

  constructor(protected readonly cmsContextService: CmsContextService) {
    super(cmsContextService);
  }

  private setComments(): void {
    this.openComment = TemplateAnnotations.getPageCommentString(
      this.page,
      this.templateAnnotations
    );
    this.closeComment = '/cms:page';
  }
}
