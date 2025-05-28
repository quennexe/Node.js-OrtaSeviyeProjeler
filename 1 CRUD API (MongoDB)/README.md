# 📦 CRUD API (Node.js + Express + MongoDB)

Kullanıcılar üzerinde Create, Read, Update, Delete (CRUD) işlemlerinin yapılabildiği basit bir RESTful API uygulamasıdır.

---

## 🎯 Proje Hedefleri

- RESTful API mimarisine uygun yapı kurmak
- Express ile HTTP metotlarını kullanarak CRUD işlemleri yapmak
- MongoDB ve Mongoose kullanarak veritabanı yönetimini öğrenmek
- Temiz klasör yapısı ile modüler bir Node.js uygulaması geliştirmek

---

## 🧩 Kullanılan Teknolojiler / Bağımlılıklar

| Paket | Açıklama |
|-------|----------|
| [express](https://expressjs.com/) | Web sunucusu oluşturmak için |
| [mongoose](https://mongoosejs.com/) | MongoDB ile bağlantı ve modelleme |
| [nodemon](https://www.npmjs.com/package/nodemon) | Geliştirme ortamında otomatik yeniden başlatma |
| [dotenv](https://www.npmjs.com/package/dotenv) | Ortam değişkenleri için |

### Yüklemek için:
``bash
npm install express mongoose dotenv
npm install --save-dev nodemon

# 👥 Ekip / Kaynaklar
-  Geliştirici: [Quenn Exe ]

-  Eğitim/Kaynak:

-  Node.js Belgeleri

- Express.js Belgeleri

- MongoDB + Mongoose

# 📝 Notlar
- Bu sadece bir backend API'dir. Frontend içermez.

- Postman veya Insomnia gibi araçlarla test edilebilir.

- Geliştirme için nodemon kullanılmaktadır.

# 🧪 Örnek API Kullanımı
Yeni kullanıcı oluşturmak:

POST /api/users
Content-Type: application/json

{
  "name": "Ahmet Yılmaz",
  "email": "ahmet@example.com",
  "age": 28
}
Kullanıcıyı güncellemek:

PUT /api/users/65f12b8a8c4a2c4ed2fa9d91
Content-Type: application/json

{
  "age": 30
}