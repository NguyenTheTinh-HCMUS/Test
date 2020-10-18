# Excersice1 

## Run với Docker
- Yêu cầu: phải cài docker trên máy
- Bước 1:  `cd  .\`
- Bước 2: Mở CMD vào chạy lệnh:   `docker-compose up --build`
- Bước 3: cd `.\front-end` và chạy lệnh `npm start` hoặc `yarn start`
- Bước 4: 
        - Truy cập: http://localhost:7000/swagger/ : Để test API trên Swagger
        - http://localhost:3000/: Để thấy test giao diện app

## Run với môi trường tại máy host
- Yêu cầu `.net core 3.1` và `node`
- Bước 1: Vào thư mục `.\Store` để back-up dữ liệu từ database 'Data1'
- Bước 2: Truy cập file `appsettings.json` để đổi connectionstring
- Bước 3: `cd .\Back-End\WebApplication1`
- Bước 4: `dotnet run`
- Bước 5: `cd .\front-end`
- Bước 6: `cd .\front-end\src\api_service`
- Bước 7: đổi `const API_HOST="http://localhost:7000/"` thành `const API_HOST="https://localhost:5001/"`
- Bước 8: Chạy lệnh `npm start` hoặc `yarn start`
- Bước 9: 
         - Truy cập: http://localhost:5001/swagger/ : Để test API trên Swagger
        - http://localhost:3000/: Để thấy test giao diện app
