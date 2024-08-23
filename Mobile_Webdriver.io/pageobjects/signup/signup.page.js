
class LogoutPage{

    get signUpWithEmailLink() { return $('//android.widget.TextView[@text="Sign up with Email"]'); } 
    get signupEmailTextField() { return $('//android.widget.EditText'); } 
    get continueButton() { return $('//android.widget.TextView[@text="Continue"]'); } 
    get signupPasswordTextField() { return $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.EditText'); } 
    get welcomeAboardMsg() { return $('//android.widget.TextView[@text="Welcome aboard, your Demo account is ready!"]'); } 
    get alreadyRegisteredErrorMsg() { return $('//android.widget.TextView[@text="This email is already registered"]'); } 

    
}

module.exports = new LogoutPage();
