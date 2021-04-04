export const clientId = '7033ce8e-3afd-4651-a4db-2b7e42e0b359';

/**
 * Enter here the user flows and custom policies for your B2C application,
 * To learn more about user flows, visit https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
export const b2cPolicies = {
  names: {
    signUpSignIn: 'b2c_1_susi',
    forgotPassword: 'b2c_1_reset',
    editProfile: 'b2c_1_edit_profile',
  },
  authorities: {
    signUpSignIn: {
      authority:
        'https://bedsteboligoverblik.b2clogin.com/bedsteboligoverblik.onmicrosoft.com/B2C_1_SignUpIn',
    },
    forgotPassword: {
      authority:
        'https://bedsteboligoverblik.b2clogin.com/bedsteboligoverblik.onmicrosoft.com/B2C_1_ProfileEdit',
    },
    editProfile: {
      authority:
        'https://bedsteboligoverblik.b2clogin.com/bedsteboligoverblik.onmicrosoft.com/B2C_1_PasswordReset',
    },
  },
  authorityDomain: 'https://bedsteboligoverblik.b2clogin',
};

/**
 * Enter here the coordinates of your Web API and scopes for access token request
 * The current application coordinates were pre-registered in a B2C tenant.
 */
export const apiConfig: { scopes: string[]; uri: string } = {
  scopes: ['https://fabrikamb2c.onmicrosoft.com/helloapi/demo.read'],
  uri: 'https://fabrikamb2chello.azurewebsites.net/hello',
};
