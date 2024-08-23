
class LoginPage{

    get signinButton() { return $('//android.view.ViewGroup[@content-desc="Sign in"]'); } 
    get signinPageTitle() { return $('(//android.widget.TextView[@text="Sign in"])[1]'); } 
    get loginEmailTextField() { return $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.EditText'); } 
    get loginPasswordTextField() { return $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.EditText'); } 
    get permissionPopupAllowButton() { return $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]'); } 
    get homeScreenPage() { return $('//android.widget.TextView[@text="Investment Ideas"]'); }
    get launchPage() { return $('//android.widget.TextView[@text="Terms apply"]');}

}

module.exports = new LoginPage();
