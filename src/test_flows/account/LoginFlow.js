import LoginPage from "../../page_objects/account/Login"
import NavBar from "../../page_objects/common/NavBar"
import LoginMessPopup from "../../page_objects/account/LoginMessPopup"
import allureReporter from '@wdio/allure-reporter'


class LoginFlow {
    constructor(phonenumber, password){
        this.phonenumber = phonenumber
        this.password = password
    }
    loginWithCredentialsPhone(phonenumber){
        LoginPage.wait_till_for_displayed({interval:5000})
        LoginPage.phone_txt_field.clearValue()
        allureReporter.addStep(`Input phonenumber as ${this.phonenumber}`)
        LoginPage.phone_txt_field.setValue(this.phonenumber)
        LoginPage.click_on_continue_btn()
        return this;
    }
    loginWithCredentialsPwd(password){
        LoginPage.password_txt_field.clearValue()
        allureReporter.addStep(`Input password as ${this.password}`)
        LoginPage.password_txt_field.setValue(this.password)
        allureReporter.addStep('Click on Login button')
        LoginPage.click_on_login_button()
        return this;
    }
    verify_login_successfully(){
        NavBar.other_icon.click()
        NavBar.person_icon.click()
        NavBar.log_out.click()
        NavBar.click_on_yes_btn.click()
    }
    verify_wrong_pwd(){
        LoginPage.click_on_login_button()
        chaiExpect(LoginPage.is_invalid_password_format_msg_display()).to.equal(true)
    }
    verify_wrong_phonenumber(){
        LoginPage.click_on_continue_btn()
        chaiExpect(LoginPage.is_invalid_phonenumber_format_msg_display()).to.equal(true)
    }
    verify_unregis_phonenumber(){
        const expected_msg_title_login = "Số điện thoại chưa được đăng ký, vui lòng đăng ký tài khoản mới"
        expect(LoginMessPopup.msg_title_login).toHaveText(expected_msg_title_login)
        LoginMessPopup.click_on_del_msg()
    }
    verify_escape_pwd(){
        const expected_msg_title_pwd = "tham số đầu vào không hợp lệ"
        expect(LoginMessPopup.msg_title_pwd).toHaveText(expected_msg_title_pwd)
        LoginMessPopup.click_on_del_msg()
    }
    verify_escape_phonenumber(){
        LoginPage.click_on_continue_btn()
        chaiExpect(LoginPage.is_invalid_phonenumber_format_msg_display()).to.equal(true)
    }
}
export default LoginFlow