# l298 library for KB-IDE

## การเชื่อมต่อสำหรับบอร์ด KidBright

หมายเหตุ - ขา OUT1 และ OUT2 ของ KidBright เชื่อมต่อกับ MOSFET แบบ open-drain 
ดังนั้น หากต้องการควบคุมลอจิกที่ขา OUTPUT ทั้ง 2 จะต้องทำการเชื่อมต่อตัวต้านทาน 1K PULL_UP ที่ขาสัญญาณด้วยดังภาพ
![image](https://raw.githubusercontent.com/cmmc-kbide/kbide-plugin-l298/master/static/kidbright_robotcar_recieves.png)

## การเชื่อมต่อสำหรับบอร์ด ESP32 Generic devKitC
![image](https://raw.githubusercontent.com/cmmc-kbide/kbide-plugin-l298/master/static/esp32devkitc_robotcar_recieves.png)

