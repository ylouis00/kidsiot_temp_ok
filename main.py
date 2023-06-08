ESP8266_IoT.init_wifi(SerialPin.P8, SerialPin.P12, BaudRate.BAUD_RATE115200)

def on_forever():
    if ESP8266_IoT.wifi_state(True):
        basic.show_string("WIFI OK")
    else:
        ESP8266_IoT.connect_wifi("wifiyann", "147896325123698745")
    if ESP8266_IoT.kidsiot_state(True):
        basic.show_string("En ligne")
    else:
        ESP8266_IoT.connect_kidsiot("e927J9d9MNdD3UMc", "1")
basic.forever(on_forever)

def on_forever2():
    ESP8266_IoT.upload_kidsiot(Environment.ds18b20_temp(DigitalPin.P0, Environment.ValType.DS18B20_TEMPERATURE_C))
    basic.pause(60000)
basic.forever(on_forever2)
