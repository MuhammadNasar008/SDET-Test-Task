class LoginApi {

    
    loginApi(email, password, rememberMe) {
        return cy.request({
          method: 'POST',
          url: 'https://client.amega.finance/client-api/login',
          body: {
            email: email,
            password: password,
            rememberMe: rememberMe,
          },
          failOnStatusCode: false, // Prevents Cypress from failing the test automatically on non-2xx responses
        });
      }

     // Method to check user session
  checkUserSession(token) {
    return cy.request({
      method: 'GET',
      url: 'https://client.amega.finance/api/auth/session', // Use the correct session API endpoint
      headers: {
        Authorization: `Bearer ${token}`, // Pass the access token
      },
      failOnStatusCode: false,
    });
  }

  // Method to logout the user
  logoutApi(token) {
    return cy.request({
      method: 'POST',
      url: 'https://my.amega.finance/client-api/logout', // Replace with actual logout API endpoint
      headers: {
        Authorization: `Bearer ${token}`, // Pass the access token
      },
      failOnStatusCode: false,
    });
  }
  }
  
  export default LoginApi;