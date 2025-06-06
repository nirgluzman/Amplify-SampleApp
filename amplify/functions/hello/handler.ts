/**
 * Lambda Function Handler for the sayHello GraphQL Query.
 *
 * This handler processes requests from the GraphQL API's sayHello query, extracting the name parameter
 * and returning a personalized greeting.
 */

import type { Schema } from '../../data/resource';

// import environment variables which are specific to sayHello Lambda function.
// $amplify path is a special path alias to reference generated resources.
import { env } from '$amplify/env/sayHello';

// define the handler type based on the GraphQL schema definition.
type handlerType = Schema['sayHello']['functionHandler'];

/**
 * Handler function that generates a greeting message
 *
 * @param event - The event object containing query arguments
 * @returns A string greeting with the provided name
 */
export const handler: handlerType = async (event) => {
  const region = env.REGION;
  const tableName = env.TABLE_NAME;

  // extract the name parameter from the event arguments.
  const { name } = event.arguments;

  // return a personalized greeting.
  return `Hello, ${name}! region: ${region} table name: ${tableName}`;
};
