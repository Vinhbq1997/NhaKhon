import LoginPage from "../../page_objects/account/Login"
import NavBar from "../../page_objects/common/NavBar"
import LoginMessPopup from "../../page_objects/account/LoginMessPopup"
import allureReporter from '@wdio/allure-reporter'


class LoginFlow {
    constructor(phonenumber, password){
        this.phonenumber = phonenumber
        this.password = password
    }
    loginWithCredentials(phonenumber,password){
        //if(!LoginPage.is_on_login_screen()) NavBar.login_icon.click()
        allureReporter.addStep(`Input phonenumber as ${this.phonenumber}`)
        LoginPage.phone_txt_feild.setValue(this.phonenumber)
        console.log("Đã nhập số điện thoại")
        allureReporter.addStep('Click on continue button')
        LoginPage.click_on_continue_btn()
        console.log("Đã nhấn tiếp tục")

        /*allureReporter.addStep(`Input password as ${this.password}`)
        LoginPage.pwd_txt_feild.setValue(this.password)
        allureReporter.addStep(`Click on login button`)
        LoginPage.click_on_login_button()*/
        return this;
    }
    
    verify_login_successfully(){
        
        const expected_msg_title = "Success"
        const expected_msg_content = "You are logged in!"

        expect(LoginMessPopup.msg_title).toHaveText(expected_msg_title)
        expect(LoginMessPopup.msg_content).toHaveText(expected_msg_content)

        LoginMessPopup.msg_accept_btn.click()
    }
    verify_login_with_incorrect_phonenumber_unsuccessfully(){
        if(this.phonenumber.length == 9) {
            chaiExpect(LoginPage.is_invalid_phonenumber_format_msg_display()).to.equal(false)
        }else {
            chaiExpect(LoginPage.is_invalid_phonenumber_format_msg_display()).to.equal(true)     
        }
    }
}

export default LoginFlow