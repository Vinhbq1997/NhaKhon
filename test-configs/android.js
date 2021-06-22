const {config} = require('./main')

config.capabilities = [{
    "platformName": "Android",
    "automationName":"UiAutomator2",
    "noReset" : true,
    "udid":"1cbd435520037ece",
    //"udid":"192.168.69.103:5555", 
    "appPackage":"com.gratiot.nhakhon",
    "appActivity":"com.gratiot.nhakhon.MainActivity",
    deviceName: "S9+"
}],

exports.config = config