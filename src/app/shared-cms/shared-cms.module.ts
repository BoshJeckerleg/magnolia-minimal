import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { EditorContextService, MagnoliaModule } from '@magnolia/angular-editor';
import { CmsAreaComponent } from './components/cms-area/cms-area.component';
import { CmsPageComponent } from './components/cms-page/cms-page.component';
import { CmsInEditorDirective } from './directives/in-cms-editor/in-cms-editor.directive';
import { CmsComponentMap } from './models/cms-component-map.interface';
import { CmsContextService } from './services/cms-context/cms-context.service';
import { CMS_COMPONENT_MAP } from './tokens/cms-component-map.token';

@NgModule({
  imports: [CommonModule, MagnoliaModule],
  declarations: [CmsPageComponent, CmsAreaComponent, CmsInEditorDirective],
  exports: [CmsPageComponent, CmsAreaComponent],
  providers: [{ provide: EditorContextService, useClass: CmsContextService }],
})
export class SharedCmsModule {
  static forRoot(
    cmsComponentMap: CmsComponentMap
  ): ModuleWithProviders<SharedCmsModule> {
    return {
      ngModule: SharedCmsModule,
      providers: [{ provide: CMS_COMPONENT_MAP, useValue: cmsComponentMap }],
    };
  }
}
