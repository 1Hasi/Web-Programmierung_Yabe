# Web-Programmierung_Yabe
Projekt: Entwicklung eines Webservers

Beschreibungen Ordner:
public/ :
db/connect: zum verbinden mit der datenbank
modules/Task.js: zum definieren und strukturieren der datenbank
.env: muss angelegt werden und benötigt variable "MONGO_URI" zum Datenbank verbinden
.gitignore: sachen werden nich auf github geladen
package: darin sind die benötigten module nach runterladen in konsole ".npm install" machen

Notizen: 
Syntax get anfrage:

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//   adding to static assets
//   SSR
// })

