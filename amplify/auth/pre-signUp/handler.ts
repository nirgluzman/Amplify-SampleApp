/**
 * Pre-Signup Lambda Trigger for Cognito User Pool.
 *
 * This function validates that users can only sign up with Gmail email addresses.
 * It runs automatically before a user's signup is completed in the authentication flow.
 */

import type { PreSignUpTriggerHandler } from 'aws-lambda';

export const handler: PreSignUpTriggerHandler = async (event) => {
  // Extract the email address from the user attributes.
  const email = event.request.userAttributes['email'];

  // Validate that the email domain is gmail.com
  if (!email.endsWith('@gmail.com')) {
    throw new Error('Invalid email domain');
  }

  // Return the event to allow the signup process to continue.
  return event;
};
