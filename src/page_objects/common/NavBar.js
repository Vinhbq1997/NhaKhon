
const HOME_ICON ='//*[@text="Nhà"]'
const ROOM_ICON = '//*[@text="Phòng"]'
const SCHEME_ICON = '//*[@text="Kịch bản"]'
const DEVICE_ICON ='//*[@text="Thiết bị"]'
const OTHER_ICON = '//*[@text="Thêm"]'
const LOG_OUT = '//*[@text="Đăng xuất"]'
const PERSON_ICON = '//*[@text=""]'
const CLICK_ON_YES_BTN = '//*[@text="Có"]'

class NavBar {
    wait_until_screen_displayed(){
        $(HOME_ICON).waitForDisplayed()
    }

    get home_icon(){
        return $(HOME_ICON)
    }

    get room_icon(){
        return $(ROOM_ICON)
    }

    get scheme_icon(){
        return $(SCHEME_ICON)
    }

    get device_icon(){
        return $(DEVICE_ICON)
    }

    get other_icon(){
        return $(OTHER_ICON)
    }
    get person_icon(){
        return $(PERSON_ICON)
    }
    get log_out(){
        return $(LOG_OUT)
    }
    get click_on_yes_btn(){
        return $(CLICK_ON_YES_BTN)
    }
}

export default new NavBar()