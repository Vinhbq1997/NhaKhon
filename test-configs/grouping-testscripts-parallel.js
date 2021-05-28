const {config} = require('./main')

config.capabilities = [
    {
        "platformName": "Android",
        "automationName": "UiAutomator2",
        "udid": "emulator-5554",
        "appPackage": "com.wdiodemoapp",
        "appActivity": ".MainActivity",
        "systemPort": 6001,
        port: 6000,
        deviceName: "Emulator"
    },
    {
        "platformName": "Android",
        "automationName": "UiAutomator2",
        "udid": "192.168.69.103:5555",
        "appPackage": "com.wdiodemoapp",
        "appActivity": ".MainActivity",
        "systemPort": 7001,
        port: 7000,
        deviceName: "Nexus 5X"
    }
]
config.suites = {
    smokeTest: [
        './src/test_script/account/TC_002_Login.js'
    ],
    regressionTest: [
        './src/test_script/account/TC_001_Login.js'
    ]
}
exports.config = config