import { CmsAreaDefinition } from './cms-area.interface';

interface CmsPageBase {
  '@id': string;
  '@name': string;
  '@nodes': string[];
  '@nodeType': string;
  '@path': string;
  'mgnl:created': string;
  'mgnl:lastModified': string;
  'mgnl:template': string;
  title: string;
}

export interface CmsPageDefinition {
  [key: string]: CmsAreaDefinition;
}

export type CmsPage<T extends CmsPageDefinition> = {
  [P in keyof T]: T[P];
} & CmsPageBase;
