
//Declare Selector values on the page
const PHONE_TXT_FEILD = '~inputPhone'
const PWD_TXT_FEILD = '~inputPw'

class CredentialForm {

    get phone_txt_field(){
        return $(PHONE_TXT_FEILD)
    }

    get password_txt_field(){
        return $(PWD_TXT_FEILD)
    }

}
export default CredentialForm