import { Component, Input, OnInit } from '@angular/core';
import { CmsArea } from '../../models/cms-area.interface';
import { CmsPageDefinition } from '../../models/cms-page.interface';
import { CmsTemplateContainer } from '../../models/cms-template-container.model';

@Component({
  selector: 'shared-cms-area',
  templateUrl: './cms-area.component.html',
  styleUrls: ['./cms-area.component.scss'],
})
export class CmsAreaComponent<T extends CmsPageDefinition, K extends keyof T>
  implements OnInit
{
  @Input() area!: K;

  parentTemplateId!: string;
  content!: CmsArea<T[K]>;

  constructor(private readonly parent: CmsTemplateContainer<T>) {}

  ngOnInit(): void {
    this.loadArea();
  }

  private loadArea(): void {
    this.parentTemplateId = this.parent.page['mgnl:template'];
    this.content = this.parent.page[this.area] as any;
  }
}
