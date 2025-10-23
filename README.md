
# BÀI TẬP 02 - LẬP TRÌNH WEB
**Sinh viên:** Đặng Phương Nam  
**MSSV:**  K215480106036

## Tiến trình làm bài
### Bước 1: Tạo repo và cài Apache

<img width="801" height="595" alt="image" src="https://github.com/user-attachments/assets/28ff9d4c-4370-4149-9e33-c9202aec12d7" />

TẮT IIS

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/cdc9211c-e71b-453c-a49c-50e0c5b76e39" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/473e1f85-073a-4198-89fc-5f0231fd0496" />

tải và giải nén apache

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/9de3202a-79cc-4105-8f74-e00da2f0d767" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/5eb60971-ea01-4524-be3a-a1d7b9d5ffda" />

cấu hình file CONFIG HTTPD.CONF

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/b5385796-6e31-4ae8-9c8f-a42bb7519daf" />

cấu hình file HTTPD-VHOSTS.CONF

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/563874b3-3613-475f-bd1c-1510ec3bac64" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/3cf60517-c5a1-40ca-86dc-6126b13cc9b1" />


Hosts file và  ping dangphuongnam.com

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/b61d9497-c0fc-4cae-b855-95fd1c9f705c" />
Tạo thư mục + File test index.html (Tạo nơi chứa frontend, file test có style gradient tím-xanh)

<img width="341" height="41" alt="image" src="https://github.com/user-attachments/assets/377d6cc2-b150-4d85-9132-8c98d48038b6" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/ad44c614-6114-4967-bb0e-e8f98fcfcd5e" />

PORT 80 + DOMAIN OK

### Bước 2: Cài đặt nodejs và nodered

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/6fc73f68-1ed8-40e9-9ec0-8db6514f2867" />

download Node.js
<img width="843" height="623" alt="image" src="https://github.com/user-attachments/assets/a3a8aabb-b4f8-4582-a471-a5c420e47154" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/cbb18bc6-94e2-4fee-86cb-0033f22913a9" />
<img width="475" height="97" alt="image" src="https://github.com/user-attachments/assets/ab544ad6-0d8c-4d4f-ba0a-95c6811461f1" />

Cài Python + Visual Studio Build Tools

<img width="863" height="523" alt="image" src="https://github.com/user-attachments/assets/781dbea0-6d13-4544-9ff5-ec7dfe5dbf5d" />

Node-RED

<img width="512" height="414" alt="image" src="https://github.com/user-attachments/assets/15b18dcc-4312-4810-bfe6-828ee0ee71c3" />

path nssm vào D:\nodejs\nodered>

 
<img width="869" height="393" alt="image" src="https://github.com/user-attachments/assets/3b50ce54-779f-4b00-a109-e711e1af8d34" />

 tạo file "D:\nodejs\nodered\run-nodered.cmd

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/53ec07f9-07fa-4df4-ac41-01ab3ebce8f4" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/93820078-fe0f-40da-942f-cc7efb45c28a" />

Node-RED NSSM Service ✅ HOÀN THÀNH


### Bước 3: Tạo csdl

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/9cffbdae-3b47-4403-85d6-2b2656725cd0" />

 tạo csdl về điện thoại để dùng vào bài tìm kiếm điện thoại đơn giản, bảng sanpham gồm các cột id, tensp, gia tien, mota, danhsach

### Bước 4 CÀI 7 LIBRARIES NODE-RED

 <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/269c2db9-f2c0-44c4-b42d-ab08716d4cb7" />

 <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/bbf1ba77-6c63-48a8-93ba-a4428b8d7855" />
sau khi làm các bước theo hướng dẫn của thầy => http://localhost:1880 dùng tên admin, mk nam123 đăng nhập

### BƯỚC 5: TẠO API 4 NODES
kéo 1 http in, 1 function node, 1 mssql-plus, 1 debug, 1 http responne node nối theo thứ tự trên và cấu hình cho các phần.
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/1accdc42-4fb4-4c42-bc8c-d829e45fda7b" />

http in, đặt URL /timkiem
<img width="1920" height="1031" alt="image" src="https://github.com/user-attachments/assets/16cc7c8d-a5e2-41c9-9b11-f7022adb1f51" />

function node

<img width="665" height="875" alt="image" src="https://github.com/user-attachments/assets/9c3f1ff9-85f2-42c0-b1df-7860b4c2c6c2" />


<img width="802" height="858" alt="image" src="https://github.com/user-attachments/assets/4e3f1263-37cd-4bde-868b-140e2cc28492" />
mssql-plus

<img width="687" height="436" alt="image" src="https://github.com/user-attachments/assets/061ea647-1d9e-48ab-a2e2-448c997e0e4e" />
http responne node, Status Code=200

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d506c9ad-ac6c-4d85-80ca-7443164ed6fc" />

đã nối và cấu hình 

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/ebef424c-c8c5-47e8-931b-ac278ddf7b20" />


<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/7f3c416b-f8f1-4568-b354-770d9ffe5f08" />
test api, tìm kiếm các sản phẩm có tên pro.

### BƯỚC 6: Tạo giao diện front-end

- html form gồm các file : index.html, fullname.js, fullname.css

<img width="850" height="243" alt="image" src="https://github.com/user-attachments/assets/43474525-b49c-49ce-969a-1ae70e642c02" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/ce1f818e-984c-4fa7-92db-90df64e55ca1" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/3601f26e-7792-40a3-8924-86d132c98138" />

 Lấy dữ liệu trên form, gửi đến api nodered đã làm ở bước 2.5, nhận về json, dùng json trả về để tạo giao diện phù hợp với kết quả truy vấn 

### Bước 7 nhận xét

1. Cài đặt: dựa vào hướng dẫn thầy đã gửi và Ai em đã hiểu rõ cách cài SSMS, Node-RED, MSSQL. Có gặp lỗi port, sa password nhưng đã sử dụng AI để tìm hiểu fix được qua debug.
   
2. Node-RED API: em đã làm được flow hoàn chỉnh: http in → function → mssql → response. Query '%${msg.query}%' chạy đúng, test  URL OK 100%. làm bước này nhớ đến phần MIT app đã học ở môn lập trình thiết bị di động >
   
3. Frontend-Backend:  hiểu cách /timkiem?q=pro gửi request → function lấy q → MSSQL trả JSON. hoàn thành bước làm HTML form.

### EM XIN CẢM ƠN THẦY ĐÃ HƯỚNG DẪN RẤT CHI TIẾT ĐỂ EM HOÀN THÀNH ĐƯỢC BÀI TẬP, CẢM ƠN THẦY VÀ CÁC BẠN ĐÃ XEM BÀI LÀM CỦA EM.
