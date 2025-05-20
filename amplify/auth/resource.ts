/**
 * Authentication Configuration
 *
 * This file defines the authentication settings for the application,
 * including login methods, user attributes, and authentication triggers.
 */

import { defineAuth } from '@aws-amplify/backend';

// Import the pre-signup trigger Lambda function.
import { preSignUp } from './pre-signUp/resource';

/**
 * Define and configure our auth resource.
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  // Configure authentication methods.
  loginWith: {
    email: true, // Enable email-based authentication.
  },

  userAttributes: {
    // Additional attributes to be stored for each user in User Pool.
    nickname: {
      mutable: true, // Allow users to change their nickname after registration.
      required: true, // Make the nickname a mandatory field during user registration.
    },
  },

  // Configure authentication workflow triggers.
  triggers: {
    // Connect the pre-signup Lambda function to validate email domains.
    preSignUp: preSignUp,
  },
});
