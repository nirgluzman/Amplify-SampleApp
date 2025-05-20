/**
 * Pre-Signup Lambda Function Resource Definition.
 *
 * This file defines the Lambda function that will be triggered before user signup.
 * It connects the handler implementation to the Amplify authentication flow.
 */

import { defineFunction } from '@aws-amplify/backend';

/**
 * Define the pre-signup Lambda function configuration.
 * This function will be automatically triggered by Cognito during user registration.
 */
export const preSignUp = defineFunction({
  // Name of the Lambda function as it will appear in AWS.
  name: 'pre-signUp',

  // Path to the handler implementation file.
  entry: './handler.ts',

  // Configuration for the function bundling process.
  bundling: {
    // Disable code minification for better debugging.
    minify: false,
  },
});
