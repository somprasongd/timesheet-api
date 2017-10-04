# timesheet-api

## มีการตั้งค่าอยู่ใน .env

```
PORT=8081
PG_CONNECTION=postgres://postgres:postgres@127.0.0.1:5432/timesheet
SECRET_KEY=my_secret_key
```

## สร้างฐานข้อมูล

สร้างฐานข้อมูลชื่อ timesheet

## end point

- Login

POST localhost:8081/auth 

Body: {"username": "abc", "password": "1234"}

Response: 
```
{
    "user": {
        "username": "abc",
        "isAdmin": false
    },
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1MDcwODUyOTgsImV4cCI6MTUwNzA4ODg5OH0.4vwnZAfLglBzTiU-7tN1TLo5spaxhr0vxjr5F7GsK-g"
}
```

- Checkin & Checkout

POST localhost:8081/checkin

POST localhost:8081/checkout

Header: {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1MDcwODUyOTgsImV4cCI6MTUwNzA4ODg5OH0.4vwnZAfLglBzTiU-7tN1TLo5spaxhr0vxjr5F7GsK-g"}

- History (ยังไม่ได้เชค authen)

GET localhost:8081/history --> แสดงทั้งหมด

GET localhost:8081/history/id --> แสดงของแต่ละคน
