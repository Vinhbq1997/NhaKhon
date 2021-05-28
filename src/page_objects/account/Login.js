import CrendentialForm from "./CredentialForm"
const CONTINUE_BTN = '//*[@text="TIẾP TỤC"]'
const LOGIN_BUTTON = '//*[@text="ĐĂNG NHẬP"]'
const INVALID_PHONE_MSG = '//*[@text="Số điện thoại không hợp lệ"]'
const INVALID_PASSWORD_MSG = '//*[@text="Please enter at least 8 characters"]'

class Login extends CrendentialForm{
    wait_till_for_displayed(){
        $(CONTINUE_BTN).waitForDisplayed()
    }

    is_on_login_screen(){
        if($(CONTINUE_BTN).isDisplayed()) return true
        return false
    }

    click_on_continue_btn(){
        $(CONTINUE_BTN).click()
    }
    click_on_login_button(){
        $(LOGIN_BUTTON).click()
    }

    is_invalid_phonenumber_format_msg_display(){
        $(INVALID_PHONE_MSG).waitForDisplayed()
        return $(INVALID_PHONE_MSG).isDisplayed()
    }

    is_invalid_password_format_msg_display(){
        $(INVALID_PASSWORD_MSG).waitForDisplayed()
        return $(INVALID_PASSWORD_MSG).isDisplayed()
    }
}
export default new Login()