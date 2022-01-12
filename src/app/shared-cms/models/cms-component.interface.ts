interface CmsComponentBase {
  '@id': string;
  '@name': string;
  '@nodes': string[];
  '@nodeType': string;
  '@path': string;
  'mgnl:created': string;
  'mgnl:lastModified': string;
  'mgnl:template': string;
}

export type CmsComponent<T extends { [key: string]: any }> = {
  [P in keyof T]: T[P];
} & CmsComponentBase;
