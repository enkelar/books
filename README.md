# Dokumentacioni i Aplikacionit Web të Librarisë

## Përmbledhje

Ky aplikacion është një platformë e thjeshtë për menaxhimin e një koleksioni librash. Mundëson funksione si shikimi i një liste librash, krijimi i librave të rinj, ndryshimi i detajeve të librave ekzistues, dhe fshirja e librave. Përdoruesit mund të regjistrohen dhe të kyçen për të përdorur këto funksionalitete.

## Struktura e Projektit

Projekti ndjek një arkitekturë klient-server, me pjesën e klientit të ndërtuar me React p dhe pjesën e serverit duke përdorur Node.js me Express. MongoDB përdoret si bazë të dhënash për të ruajtur informacionin e librave.

### Teknologjitë e Përdorura

**Frontend:**

- React, React-Icons, ReactDom, React Router DOM
- React Router (Navigimi)
- Axios (Klienti HTTP për kërkesa API)
- Notistack (Njoftimet Snackbar)

**Backend:**

- Node.js
- Express
- MongoDB (Baza e të dhënave)
- JWT (JSON Web Token) për autentikim e përdoruesve

### Përmbajtja

**Frontend:**

**src/App.js**

Komponenti kryesor që menaxhon konfigurimin e rrugës bazuar në statusin e autentifikimit të përdoruesit.

**pages**

- **Login.js**: Faqe për hyrjen e përdoruesit.
- **Signup.js**: Faqe për regjistrimin e përdoruesit.
- **Home.js**: Faqe kryesore që shfaq një listë librash.
- **CreateBook.js**: Faqe për krijimin e një libri të ri.
- **DeleteBook.js**: Faqe për konfirmimin dhe fshirjen e një libri.
- **EditBook.js**: Faqe për ndryshimin e një libri ekzistues.
- **ShowBook.js**: Faqe që shfaq informacion të detajuar për një libër të vetëm.

  **src/components**

- **BackButton.js**: Komponent për një buton mbrapa me funksionalitetin e drejtimdhënies.
- **BookCard.js**: Komponent për shfaqjen e një karte librash të vetëm.
- **BookModal.js**: Komponent modal për shfaqjen e informacionit të detajuar të librit.
- **BookSingleCard.js**: Komponent për një kartë librash të vetëm me veprime (shfaq, redakto, fshij).
- **SaveButton.js**: Komponent butoni për veprimet e ruajtjes.

**Backend:**

- **server.js**: Pikënisja për serverin Node.js dhe Express.
- **db.js**: Konfigurimi për lidhjen me bazën e të dhënave MongoDB.
- **models/book.js**: Modeli i Mongoose për skemën e librave.
- **routes/bookRoutes.js**, **routes/authRoutes.js**, **routes/usersRoutes.js**: Trajtuesit e rrugës Express për operacione lidhur me librat, per regjistrimin e përdoruesve, dhe autentikimin e tyre
