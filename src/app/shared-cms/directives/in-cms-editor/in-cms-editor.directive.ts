import {
  Directive,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { EditorContextService } from '@magnolia/angular-editor';

@Directive({
  selector: '[sharedCmsInEditor]',
})
export class CmsInEditorDirective implements OnInit {
  constructor(
    private readonly editorContextService: EditorContextService,
    private readonly templateRef: TemplateRef<unknown>,
    private readonly viewContainer: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.editorContextService.inEditor()
      ? this.viewContainer.createEmbeddedView(this.templateRef)
      : this.viewContainer.clear();
  }
}
