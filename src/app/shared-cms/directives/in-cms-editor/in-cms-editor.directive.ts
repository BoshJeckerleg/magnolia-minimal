import {
  Directive,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { CmsContextService } from '../../services/cms-context/cms-context.service';

@Directive({
  selector: '[sharedCmsInEditor]',
})
export class CmsInEditorDirective implements OnInit {
  constructor(
    private readonly cmsContextService: CmsContextService,
    private readonly templateRef: TemplateRef<unknown>,
    private readonly viewContainer: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.cmsContextService.inEditor()
      ? this.viewContainer.createEmbeddedView(this.templateRef)
      : this.viewContainer.clear();
  }
}
