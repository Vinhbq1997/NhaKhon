
//Declare Selector values on the page
const PHONE_TXT_FEILD = '//*[@text="Nhập số điện thoại"]'
const PWD_TXT_FEILD = '//*[@text="Nhập mật khẩu"]'

class CrendentialForm {
  
    get phone_txt_feild(){
        return $(PHONE_TXT_FEILD)
    }

    get pwd_txt_feild(){
        return $(PWD_TXT_FEILD)
    }

  
}

export default CrendentialForm