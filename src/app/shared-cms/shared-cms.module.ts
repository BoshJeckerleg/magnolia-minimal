import { CommonModule } from '@angular/common';
import { Inject, ModuleWithProviders, NgModule } from '@angular/core';
import { EditorContextService, MagnoliaModule } from '@magnolia/angular-editor';
import { CmsAreaComponent } from './components/cms-area/cms-area.component';
import { CmsPageComponent } from './components/cms-page/cms-page.component';
import { CmsInEditorDirective } from './directives/in-cms-editor/in-cms-editor.directive';
import { CmsComponentMap } from './models/cms-component-map.interface';
import { CMS_COMPONENT_MAP } from './tokens/cms-component-map.token';

@NgModule({
  imports: [CommonModule, MagnoliaModule],
  declarations: [CmsPageComponent, CmsAreaComponent, CmsInEditorDirective],
  exports: [CmsPageComponent, CmsAreaComponent],
})
export class SharedCmsModule {
  constructor(
    @Inject(CMS_COMPONENT_MAP)
    private readonly cmsComponentMap: CmsComponentMap,
    private readonly editorContextService: EditorContextService
  ) {
    this.editorContextService.setComponentMapping(cmsComponentMap);
  }

  static forRoot(
    cmsComponentMap?: CmsComponentMap
  ): ModuleWithProviders<SharedCmsModule> {
    return {
      ngModule: SharedCmsModule,
      providers: [{ provide: CMS_COMPONENT_MAP, useValue: cmsComponentMap }],
    };
  }
}
