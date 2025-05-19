/**
 * GraphQL API Definition for Amplify Sample App
 *
 * This file defines a GraphQL API using AWS Amplify Gen 2 framework.
 * It creates a simple API with a greeting function that takes a name and returns a personalized greeting message.
 */

import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

// import the function resource that contains the implementation
import { sayHello } from '../functions/hello/resource';

// define the GraphQL schema with operations
const schema = a.schema({
  // define a query operation that takes a name and returns a greeting
  sayHello: a
    .query()
    .arguments({ name: a.string() }) // accept a string parameter
    .returns(a.string()) // return a string response
    .handler(a.handler.function(sayHello)) // connect to the Lambda function
    .authorization((allow) => allow.publicApiKey()), // allow public access with API key
});

// export the schema type for client-side type safety
export type Schema = ClientSchema<typeof schema>;

// create and export the Amplify data resource
export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey', // set API key as default auth mode
  },
});
