import { defineFunction } from '@aws-amplify/backend';

const environmentVariables = {
  REGION: 'us-east-1',
  TABLE_NAME: 'myTable',
};

export const sayHello = defineFunction({
  name: 'sayHello',
  entry: './handler.ts',
  bundling: {
    minify: false,
  },
  environment: environmentVariables,
});
