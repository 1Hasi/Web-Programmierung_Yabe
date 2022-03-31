Matrikelnummern:
2063294
8833391
9885196

to do:
im frontend:
- npm install 
- npm start

im backend
- npm install
- .env Dateiinhalt (falls was schief geht):
"MONGO_URI=mongodb+srv://Hasi:666OchsenhuepfennichtwiePferde666@produkt.yp52w.mongodb.net/YabeProjekt?retryWrites=true&
JWT_SECRET=somethingsecret"
- npm start

dann sollte die Side im localhost auf dem port: 3000 erreichbar sein

Infos:
- wenn Produkt erstellen nicht lädt Produktunterseite öffnen, dann gehts
- Ersteigertes in Warenkorb packen haben wir nicht hinbekommen, aber Warenkorb funktioniert vollständig -> Orders können getätigt werden und werden angelegt/ eingesehen werden

User mit Admin zugriff: 
name: Adi
email: admin@email.de
pw: 1234 

npm modules backend:
    "bcrypt": "^5.0.1",
         --> passwortverschlüsselung
    "body-parser": "^1.19.1",
         --> json eingabe in postman
    "cors": "^2.8.5",
        --> Dateiübergreifende sachen
    "dotenv": "^14.3.2",
        --> für .env Datei
    "express": "^4.17.2",
         --> siehe Vorlesung
    "express-async-handler": "^1.2.0",
         --> Async handeling
    "jsonwebtoken": "^8.5.1",
         --> token im header für Anmeldung
    "mongodb": "^4.3.1",
         --> für MongoDB/ Datenbank
    "mongoose": "^6.1.8",
         --> Funktionen für Datenbank
    "multer": "^1.4.4",
         --> regelt Bilder Upload
    "multer-gridfs-storage": "^5.0.2",
         --> Bilder Speichern
    "socket.io": "^4.4.1"
         --> nicht verwendet / websoket

npm modules frontend:
    "axios": "^0.25.0",
         --> für API Schnittstellen
    "cors": "^2.8.5",
         --> erkennung
    "nodemon": "^2.0.15",
         --> Beim speichern react neustart
    "react": "^17.0.2",
         --> siehe Vorlesung
    "react-datepicker": "^4.7.0",
         --> Datumfeld
    "react-dom": "^17.0.2",
         --> routenplanung
    "react-redux": "^7.2.6",
         --> fehleranzeige
    "react-router-dom": "^6.2.1",
         --> routenplanung
    "react-scripts": "5.0.0",
         --> start von react
    "redux": "^4.1.2",
         --> fehleranzeige
    "redux-thunk": "^2.4.1",
    "socket.io-client": "^4.4.1",
         --> nicht benutzt / WebSocket
    "web-vitals": "^2.1.4"