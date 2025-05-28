# Node.js-OrtaSeviyeProjeler


Bu belge, Node.js kullanılarak geliştirilmiş ileri seviye 20 proje için özet ve öğrenim hedeflerini içermektedir. Veritabanı, kimlik doğrulama, gerçek zamanlı uygulamalar ve bot geliştirme gibi kritik beceriler burada yer alır.

---

## 1. CRUD API (MongoDB) / CRUD API with MongoDB

📌 **Açıklama:**  
MongoDB veritabanı kullanarak temel Create, Read, Update, Delete işlemlerini gerçekleştiren RESTful API oluşturulur.

🎯 **Öğrenilecekler:**  
- MongoDB ve Mongoose kullanımı  
- CRUD operasyonları  
- Express.js ile API tasarımı

---

## 2. JWT ile Kimlik Doğrulama / Authentication with JWT

📌 **Açıklama:**  
JSON Web Token (JWT) kullanarak güvenli kullanıcı kimlik doğrulama sistemi geliştirilir.

🎯 **Öğrenilecekler:**  
- JWT token oluşturma ve doğrulama  
- Middleware ile erişim kontrolü  
- Kullanıcı oturumu yönetimi

---

## 3. Dosya Yöneticisi (Upload/Download/Delete) / File Manager (Upload/Download/Delete)

📌 **Açıklama:**  
Kullanıcıların dosya yükleyip, indirebildiği ve silebildiği bir dosya yönetim sistemi.

🎯 **Öğrenilecekler:**  
- `multer` ile dosya upload  
- Dosya sistemi yönetimi  
- HTTP metodları ve güvenlik

---

## 4. Mail Gönderme Uygulaması (nodemailer) / Email Sending Application (nodemailer)

📌 **Açıklama:**  
`nodemailer` kullanarak e-posta gönderimi yapan uygulama.

🎯 **Öğrenilecekler:**  
- SMTP protokolü  
- Nodemailer kurulumu ve kullanımı  
- E-posta şablonları ve hata yönetimi

---

## 5. Blog API (Veritabanlı) / Blog API (Database-backed)

📌 **Açıklama:**  
Blog yazıları için CRUD işlemleri yapabilen veritabanı destekli API.

🎯 **Öğrenilecekler:**  
- Veritabanı modelleme  
- API endpoint tasarımı  
- Veri doğrulama ve filtreleme

---

## 6. Web Scraper (cheerio) / Web Scraper (cheerio)

📌 **Açıklama:**  
`cheerio` kullanarak web sayfalarından veri çekip işleyen scraper uygulaması.

🎯 **Öğrenilecekler:**  
- HTTP istekleri (`axios`, `node-fetch`)  
- HTML parsing  
- Veri çıkarma ve işleme

---

## 7. Chat Server (Socket.io) / Chat Server (Socket.io)

📌 **Açıklama:**  
Gerçek zamanlı çoklu kullanıcı sohbet sunucusu socket.io ile oluşturulur.

🎯 **Öğrenilecekler:**  
- Socket.io olay yönetimi  
- Gerçek zamanlı iletişim  
- İstemci-sunucu mimarisi

---

## 8. RSS Okuyucu / RSS Reader

📌 **Açıklama:**  
RSS feed’lerini çekip parse eden ve kullanıcıya sunan uygulama.

🎯 **Öğrenilecekler:**  
- RSS formatı ve XML parse  
- `rss-parser` veya benzeri kütüphane kullanımı  
- Veri sunumu

---

## 9. URL Analiz Servisi / URL Analysis Service

📌 **Açıklama:**  
Verilen URL’lerin içerik, meta veriler ve SEO bilgilerini analiz eden servis.

🎯 **Öğrenilecekler:**  
- HTTP istekleri  
- HTML parsing ve veri çıkarma  
- API geliştirme

---

## 10. Not Tutma API’si / Note Taking API

📌 **Açıklama:**  
Kullanıcıların not almasını sağlayan, CRUD destekli API.

🎯 **Öğrenilecekler:**  
- REST API tasarımı  
- Veritabanı kullanımı (MongoDB, PostgreSQL)  
- Kullanıcı bazlı veri yönetimi

---

## 11. Basit Ürün Katalog API’si / Simple Product Catalog API

📌 **Açıklama:**  
Ürünlerin listelendiği, detaylarının görüntülendiği temel bir katalog API.

🎯 **Öğrenilecekler:**  
- API endpoint oluşturma  
- Veri filtreleme ve sıralama  
- Performans optimizasyonu

---

## 12. Kayıt/Giriş Sistemi (JWT + MongoDB) / Auth System (JWT + MongoDB)

📌 **Açıklama:**  
MongoDB destekli, JWT tabanlı kullanıcı kayıt ve giriş sistemi.

🎯 **Öğrenilecekler:**  
- Kullanıcı doğrulama  
- Parola hashleme (bcrypt)  
- Token tabanlı güvenlik

---

## 13. PDF Dosya Oluşturucu (pdfkit) / PDF File Creator (pdfkit)

📌 **Açıklama:**  
Dinamik PDF dosyaları üreten uygulama.

🎯 **Öğrenilecekler:**  
- `pdfkit` kullanımı  
- PDF içerik oluşturma  
- Dosya kaydetme ve sunma

---

## 14. Kendi Basit CLI Aracı (commander) / Simple CLI Tool (commander)

📌 **Açıklama:**  
Komut satırından kullanılabilen, `commander` kütüphanesi ile geliştirilmiş araç.

🎯 **Öğrenilecekler:**  
- CLI tasarımı  
- Komut ve argüman yönetimi  
- Node.js script geliştirme

---

## 15. Çekiliş Sistemi / Lottery System

📌 **Açıklama:**  
Katılımcılar arasından rastgele kazanan seçen sistem.

🎯 **Öğrenilecekler:**  
- Rastgele seçim algoritmaları  
- Zamanlama ve kullanıcı yönetimi  
- Veri saklama

---

## 16. Basit Blog Admin Paneli (ejs) / Simple Blog Admin Panel (ejs)

📌 **Açıklama:**  
`ejs` templating ile hazırlanmış blog yönetim paneli.

🎯 **Öğrenilecekler:**  
- Server-side rendering  
- Template motorları  
- Form işlemleri ve veri güncelleme

---

## 17. Realtime Sayfa Ziyaretçi Sayacı / Realtime Page Visitor Counter

📌 **Açıklama:**  
Gerçek zamanlı sayfa ziyaretçi sayısını takip eden sistem.

🎯 **Öğrenilecekler:**  
- Socket.io veya WebSocket  
- State yönetimi  
- Performans ve ölçeklenebilirlik

---

## 18. Discord Botu / Discord Bot

📌 **Açıklama:**  
Discord API kullanarak bot geliştirme ve komut işleme.

🎯 **Öğrenilecekler:**  
- Discord.js kütüphanesi  
- Bot komutları ve event handling  
- API entegrasyonu

---

## 19. Görev Zamanlayıcı (node-cron) / Task Scheduler (node-cron)

📌 **Açıklama:**  
Belirli aralıklarla otomatik görevleri çalıştıran zamanlayıcı.

🎯 **Öğrenilecekler:**  
- `node-cron` kullanımı  
- Zamanlanmış görevler  
- Otomasyon

---

## 20. Çoklu Dil Destekli API / Multi-Language Supported API

📌 **Açıklama:**  
Birden fazla dilde içerik sunabilen, çok dilli API geliştirme.

🎯 **Öğrenilecekler:**  
- Uluslararasılaştırma (i18n)  
- Dil tespiti  
- Çoklu dil veri yönetimi

---

🎯 **Not:**  
Bu projeler Node.js ekosisteminde ileri düzey beceriler kazanmak için ideal. İstersen detaylı dosya yapısı ve örnek kodlarla ilerleyebiliriz. Başlamak istediğin projeyi seç, birlikte ileriye doğru sağlam adımlar atalım!

