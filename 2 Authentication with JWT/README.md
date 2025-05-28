# 🔐 Kullanıcı Kayıt ve Giriş Sistemi (JWT + MongoDB)

Node.js kullanılarak geliştirilen bu projede, kullanıcıların güvenli bir şekilde kayıt olması ve giriş yapması sağlanır. Giriş sonrası kullanıcıya JWT token verilir ve bu token ile korunan endpoint'lere erişim sağlanabilir.

---

## 🎯 Proje Hedefleri

- Kullanıcıların kayıt ve giriş işlemlerini gerçekleştirmek
- Şifreleri güvenli şekilde hash'lemek
- JWT token ile kimlik doğrulama sağlamak
- Yetkisiz erişimleri engellemek

---

## 👨‍💻 Kullanılan Teknolojiler

- **Node.js**
- **Express.js**
- **MongoDB** (mongoose)
- **JWT (jsonwebtoken)**
- **dotenv**
- **bcryptjs**

---

## ⚙️ Kurulum Talimatları

### 1. Projeyi klonlayın:
``bash
git clone https://github.com/kullanici/kimlik-dogrulama-api.git
cd kimlik-dogrulama-api



#  👥 Ekip / Kaynaklar Açıklama
-  Geliştirici: [ Quenn Exe ]

# Kaynaklar:

-  Express.js Dokümantasyonu

-  Mongoose

-  JWT.io

-  bcryptjs

# 📌 Açıklama
Bu proje, kullanıcı doğrulama işlemlerini güvenli şekilde gerçekleştirmek amacıyla geliştirilmiştir. JWT mimarisi sayesinde client-server iletişimi güvenli hale getirilir. Her kullanıcının girişinde özel token üretilir ve korunan endpoint'lere bu token ile erişim sağlanır.


