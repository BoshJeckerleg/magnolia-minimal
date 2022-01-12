import { CmsComponent } from './cms-component.interface';

interface CmsAreaBase {
  '@id': string;
  '@name': string;
  '@nodes': string[];
  '@nodeType': string;
  '@path': string;
  'mgnl:created': string;
  'mgnl:lastModified': string;
  title: string;
}

export interface CmsAreaDefinition {
  [key: string]: { [key: string]: any };
}

export type CmsArea<T extends CmsAreaDefinition> = {
  [P in keyof T]: CmsComponent<T[P]>;
} & CmsAreaBase;
