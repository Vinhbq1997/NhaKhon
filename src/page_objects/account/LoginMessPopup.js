const MSG_TITLE_LOGIN = '//android.view.ViewGroup[@content-desc="messFlash"]/android.view.ViewGroup/android.widget.TextView[2]'
const MSG_TITLE_PWD ='//android.view.ViewGroup[@content-desc="messFlash"]/android.view.ViewGroup/android.widget.TextView[2]'
const DEL_MSG = '//android.view.ViewGroup[@content-desc="messFlash"]/android.view.ViewGroup/android.view.ViewGroup[2]'
class LoginMessPopup {
    wait_till_screen_displayed(){
        $(DEL_MSG).waitForDisplayed()
    }
    click_on_del_msg(){
        $(DEL_MSG).click()
    }
    get msg_title_login(){
        return $(MSG_TITLE_LOGIN)
    }
    get msg_title_pwd(){
        return $(MSG_TITLE_PWD)
    }
}
export default new LoginMessPopup()