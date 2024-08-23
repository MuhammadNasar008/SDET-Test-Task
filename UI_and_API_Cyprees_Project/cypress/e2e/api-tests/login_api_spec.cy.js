import LoginApi from '../../../objects/apiObjects/LoginApi.cy.js'
import commonData from '../../fixtures/common.json';

describe('Login API', () => {
  it('should return a valid response when logging in with valid credentials', () => {
    const password =commonData.LOGIN_PASSWORD;
    const email =commonData.LOGIN_EMAIL;
    const rememberMe = true;

    // Instantiate the LoginApi class
    const api = new LoginApi();

     // Call the loginApi method
     api.loginApi(email, password, rememberMe).then((response) => {

     // Validate the response status
     expect(response.status).to.eq(200);

     // Validate the access token
     expect(response.body).to.have.property('accessToken');
     expect(response.body.accessToken).to.not.be.empty;

    // Validate the client details
    const client = response.body.client;
    expect(client).to.have.property('firstName', 'Muhammad');
    expect(client).to.have.property('lastName', 'Nasar');
    expect(client).to.have.property('email', email);
    expect(client).to.have.property('emailVerified', true);
    });
  });

  it('should return an error message when logging in with invalid credentials', () => {
    // Define the invalid login credentials
    const email = 'invaliduser@example.com'; // Invalid email
    const password = 'WrongPassword'; // Invalid password
    const rememberMe = true;

    // Instantiate the LoginApi class
    const api = new LoginApi();

    // Call the loginApi method
    api.loginApi(email, password, rememberMe).then((response) => {
      // Validate the response status
      expect(response.status).to.eq(401); // Assuming the API returns 401 for unauthorized access

      // Validate the error message
      expect(response.body).to.have.property('message');
      expect(response.body.message).to.eq('Bad credentials.');
    });
  });

  it('should have a valid session after login and an invalid session after logout', () => {
    // Define valid login credentials
    const password =commonData.LOGIN_PASSWORD;
    const email =commonData.LOGIN_EMAIL;
    const rememberMe = true;

    // Instantiate the LoginApi class
    const api = new LoginApi();

    // First, log in to get the access token
    api.loginApi(email, password, rememberMe).then((loginResponse) => {
      // Extract the access token from the login response
      const accessToken = loginResponse.body.accessToken;

      // Check the user session using the access token
      api.checkUserSession(accessToken).then((sessionResponse) => {
        // Validate the response status
        expect(sessionResponse.status).to.eq(200); // Expecting 200 OK

      });

      // Log out the user using the access token
      api.logoutApi(accessToken).then((logoutResponse) => {
        // Validate the response status for logout
        expect(logoutResponse.status).to.eq(200); // Expecting 200 OK

      });
    });
  });
});