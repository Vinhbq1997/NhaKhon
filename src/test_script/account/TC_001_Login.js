import { VALID_CREDS,INVALID_CREDS} from "../../test_data/account/TC_001_Login"
import LoginFlow from "../../test_flows/account/LoginFlow"
import allureReporter from '@wdio/allure-reporter'

describe(`Account Function for ${browser.capabilities.deviceName}`, function(){
    it('should login successfully', function(){
        allureReporter.addTestId("TC_001")
        allureReporter.addSeverity("critical")
        const {phonenumber, password} = VALID_CREDS
        const loginFlow = new LoginFlow(phonenumber, password)
        loginFlow
        .loginWithCredentials() 
        //.verify_login_successfully()
    })
    it('should see valid msg when login unsuccessfully with incorrect phone number', function(){
        allureReporter.addTestId("TC_002")
        allureReporter.addSeverity("normal")
        const {phonenumber, password} = INVALID_CREDS
        const loginFlow = new LoginFlow(phonenumber, password)
        loginFlow
        .loginWithCredentials() 
        .verify_login_unsuccessfully()
    })
    /*it('should see valid msg when login unsuccessfully', function(){
        allureReporter.addTestId("TC_002")
        allureReporter.addSeverity("normal")
        const {email, password} = INVALID_CREDS
        const loginFlow = new LoginFlow(email,password)
        loginFlow
        .loginWithCredentials() 
        .verify_login_unsuccessfully()
    })*/
})