const {config} = require('./main')

config.capabilities = [
    {
        "appium:platformName": "Android",
        "appium:automationName": "UiAutomator2",
        "appium:udid": "emulator-5554",
        "appium:appPackage": "com.wdiodemoapp",
        "appium:appActivity": ".MainActivity",
        "appium:systemPort": 6001,
        port: 6000,
        deviceName: "Emulator"
    },
    {
        "appium:platformName": "Android",
        "appium:automationName": "UiAutomator2",
        "appium:udid": "192.168.69.103:5555",
        "appium:appPackage": "com.wdiodemoapp",
        "appium:appActivity": ".MainActivity",
        "appium:systemPort": 7001,
        port: 7000,
        deviceName: "Nexus 5X"
    }
]

exports.config = config
