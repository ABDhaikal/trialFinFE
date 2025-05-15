# Laundry Web App - Final Project

## Description

Laundry Web App adalah aplikasi e-commerce berbasis web yang memungkinkan customer untuk melakukan layanan laundry tanpa harus datang ke outlet secara langsung. Sistem ini menyediakan fitur pickup dan delivery oleh driver, serta proses laundry yang terorganisir dalam beberapa station (washing, ironing, packing). Aplikasi ini ditujukan untuk diakses oleh 5 jenis pengguna: customer, admin, outlet admin, worker, dan driver.

## Roles & Responsibilities

* **Customer**: Melakukan request pickup, melihat status pesanan, melakukan pembayaran, dan komplain.
* **Driver**: Mengambil dan mengantar laundry.
* **Worker**: Melakukan proses pencucian, penyetrikaan, dan pengepakan.
* **Outlet Admin**: Mengelola order, validasi item laundry, dan permintaan delivery.
* **Super Admin**: Mengelola data master, outlet, dan seluruh pengguna.

## Main Features

### Feature 1

#### Homepage / Landing Page (20 Points)

* Hero section + carousel promo
* Navigation bar & Footer
* Button request pickup
* Location-based outlet display

#### User Authentication & Profiles (35 Points)

* Registrasi: Email dan Social Login
* Email verification dan set password
* Login dan Reset Password
* Profile: Edit data, ubah password, upload foto profil (max 1MB, .jpg/.jpeg/.png/.gif)
* Validasi akses berdasarkan status verifikasi

#### User Address & Cost Calculation (20 Points)

* Multi-address management
* Pilih alamat untuk pickup
* Biaya pickup/delivery berdasarkan jarak

#### Outlet Management (15 Points)

* CRUD outlet, lokasi outlet
* Laundry item management
* Assign outlet admin, worker, driver

### Feature 2

#### Admin Account Management (10 Points)

* Akses khusus untuk admin dashboard
* CRUD data user (outlet admin, worker, driver)

#### Report & Analysis (5 Points)

* Laporan income bulanan (per outlet)

#### Request Pickup & Tracking (25 Points)

* Request pickup & delivery
* Penentuan outlet terdekat secara otomatis
* Input detail laundry oleh outlet admin
* Tracking order status
* Upload bukti pembayaran (1MB max, .jpg/.jpeg/.png)
* Konfirmasi order manual/otomatis (2x24 jam)

#### Driver Management (15 Points)

* Daftar request pickup/delivery
* Pengurutan job berdasarkan lokasi terdekat
* History pickup/delivery

#### Order Management (30 Points)

* View all orders
* Create order by outlet admin (input total kilo dan quantity item)
* Worker re-input quantity
* Request access to outlet admin jika quantity tidak sesuai
* Tracking job status driver

#### Worker Management (5 Points)

* Notifikasi job masuk ke setiap station
* Input ulang item laundry
* View job history

### Mentor Evaluation (10 Points)

* UI tampilan
* Komunikasi tim
* Inisiatif
* Pengembangan fitur

## Order Statuses

* Menunggu Penjemputan Driver
* Laundry Sedang Menuju Outlet
* Laundry Telah Sampai Outlet
* Laundry Sedang Dicuci
* Laundry Sedang Disetrika
* Laundry Sedang Di Packing
* Menunggu Pembayaran
* Laundry Sedang Dikirim
* Laundry Telah Diterima Customer

## Technical Requirements

### Validation

* Semua input divalidasi di sisi client dan server
* Validasi file extension dan ukuran file
* Approval untuk proses penting (hapus data)

### Pagination, Filtering, Sorting

* Semua list data (order, user, dll) wajib support fitur ini dan diproses di server

### Frontend

* Responsive (mobile first)
* Clean UI
* Penamaan file jelas
* File .jsx jika mengandung HTML
* Title & favicon disesuaikan

### Backend

* RESTful API standard
* Authorization untuk API terbatas role tertentu
* Clean code:

  * Maks. 200 baris per file
  * Fungsi maks. 15 baris
  * Bersihkan log dan code tidak terpakai

## References

* API RajaOngkir / alternatif API ongkir
* OpenCage / API geolocation gratis

---

**Note**: Semua fitur dan implementasi dalam proyek ini dinilai secara kolektif dan wajib dikerjakan agar memperoleh nilai penuh. Pastikan dokumentasi, validasi, dan user experience menjadi prioritas utama selama pengembangan.
