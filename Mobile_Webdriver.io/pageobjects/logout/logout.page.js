
class LogoutPage{

    get profileIcon() { return $('(//com.horcrux.svg.SvgView/parent::android.view.ViewGroup)[2]'); } 
    get logoutButton() { return $('//android.view.ViewGroup[@content-desc="Logout"]'); } 
    get createAccountButton() { return $('//android.widget.TextView[@text="Create account"]'); } 
}

module.exports = new LogoutPage();
