# timesheet-api

## มีการตั้งค่าอยู่ใน .env

```
PORT=8080
PG_CONNECTION=postgres://postgres:postgres@127.0.0.1:5432/timesheet
SECRET_KEY=my_secret_key
```

## end point

- Login

POST localhost:8080/auth 

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

POST localhost:8080/checkin

POST localhost:8080/checkout

Header: {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1MDcwODUyOTgsImV4cCI6MTUwNzA4ODg5OH0.4vwnZAfLglBzTiU-7tN1TLo5spaxhr0vxjr5F7GsK-g"}

- History

GET localhost:8080/history --> แสดงทั้งหมด
GET localhost:8080/history/id --> แสดงของแต่ละคน
