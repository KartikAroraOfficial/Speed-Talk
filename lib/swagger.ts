import { createSwaggerSpec } from 'next-swagger-doc';

import "server-only"

export const getApiDocs = async (apiPath: string) => {
  const spec = createSwaggerSpec({
    apiFolder: apiPath,
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Speed Talk API Endpoints',
        version: '1.0',
      },
      // components: {
       
      // },
      security: [],
    }
  });
  return spec;
};