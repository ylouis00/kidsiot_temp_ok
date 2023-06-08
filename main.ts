ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
basic.forever(function () {
    if (ESP8266_IoT.wifiState(true)) {
        basic.showIcon(IconNames.Yes)
    } else {
        ESP8266_IoT.connectWifi("partageyann", "ylouis00")
    }
    basic.pause(2000)
    basic.clearScreen()
    if (ESP8266_IoT.kidsiotState(true)) {
        basic.showIcon(IconNames.Happy)
        basic.pause(2000)
        basic.clearScreen()
        ESP8266_IoT.uploadKidsiot(Environment.octopus_BME280(Environment.BME280_state.BME280_temperature_C))
        basic.showArrow(ArrowNames.East)
        basic.pause(5000)
        basic.clearScreen()
    } else {
        ESP8266_IoT.connectKidsiot("e927J9d9MNdD3UMc", "1")
    }
})
