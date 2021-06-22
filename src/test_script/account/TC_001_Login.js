import { VALID_CREDS,
    ESCAPE_PHONE_CREDS,
    INVALID_PHONE_CREDS,
    UNREGIS_PHONE_CREDS,
    INVALID_PWD_CREDS,
    ESCAPE_PWD_CREDS,
} from "../../test_data/account/TC_001_Login"
import LoginFlow from "../../test_flows/account/LoginFlow"
import allureReporter from '@wdio/allure-reporter'

describe(`Account Function for ${browser.capabilities.deviceName}`, function(){
    this.timeout(60000); 
    it('should show error msg flash when escape phone', function(){
        allureReporter.addTestId("TC_003")
        allureReporter.addSeverity("critical")
        const {phonenumber} = ESCAPE_PHONE_CREDS
        const loginFlow = new LoginFlow(phonenumber)
        loginFlow
        .loginWithCredentialsPhone() 
        .verify_escape_phonenumber()
    })
    it('should login successfully', function(){
        allureReporter.addTestId("TC_001")
        allureReporter.addSeverity("critical")
        const {phonenumber, password} = VALID_CREDS
        const loginFlow = new LoginFlow(phonenumber, password)
        loginFlow
        .loginWithCredentialsPhone()
        .loginWithCredentialsPwd() 
        .verify_login_successfully()  
    })
    it('should show error msg flash when unregister phone', function(){
        allureReporter.addTestId("TC_002")
        allureReporter.addSeverity("critical")
        const {phonenumber} = UNREGIS_PHONE_CREDS
        const loginFlow = new LoginFlow(phonenumber)
        loginFlow
        .loginWithCredentialsPhone() 
        .verify_unregis_phonenumber()
    })
   
    it('should show error msg when input wrong phone', function(){
        allureReporter.addTestId("TC_004")
        allureReporter.addSeverity("critical")
        const {phonenumber} = INVALID_PHONE_CREDS
        const loginFlow = new LoginFlow(phonenumber)
        loginFlow
        .loginWithCredentialsPhone() 
        .verify_wrong_phonenumber()
    })

    it('should see error msg when input wrong pwd', function(){
        allureReporter.addTestId("TC_005")
        allureReporter.addSeverity("normal")
        const {phonenumber, password} = INVALID_PWD_CREDS
        const loginFlow = new LoginFlow(phonenumber, password)
        loginFlow
        .loginWithCredentialsPhone()
        .loginWithCredentialsPwd()
        .verify_wrong_pwd()
    })
    it('should see error flash msg when escape pwd', function(){
        allureReporter.addTestId("TC_006")
        allureReporter.addSeverity("normal")
        const {phonenumber, password} = ESCAPE_PWD_CREDS
        const loginFlow = new LoginFlow(phonenumber, password)
        loginFlow
        .loginWithCredentialsPhone()
        .loginWithCredentialsPwd()
        .verify_escape_pwd()
    })
    
})