# Aufgabenergebnis


## Anmerkungen

Ich war nur in der Lage, die Aufgaben 1, 2, 3 und 6 zu entwickeln. Die CSV-Datei Artikel.csv hatte falsch platzierte Daten, es sind viele Brüche dazwischen und ich war nicht in der Lage, es manuell zu beheben.

## Eingesetzte Technologien / Frameworks

Folgende Technologien / Frameworks setze ich in meinem Projekt ein:

- JavaScript / React.js / Bootstrap
- Node.js / Express.js / MongoDB


Ich habe mich für Javascript entschieden, weil Ich es am besten beherrsche, und weil es erlaubt Frontend und Backend von Anwendungen zu verbinden. Mit React, Node, Express und MongoDB habe ich im Ironhack Bootcamp gelernt Anwendungen mit dem MERN-stack zu entwickeln

## Eingesetzte 3rd Party Libraries

Ich setze in meinem Projekt die folgenden 3rd Party Libraries ein: 

Name | Begründung
--- | ---
[mongoosejs](https://mongoosejs.com/) | Zur Berechnung von Datumswerten und Umwandlung von Formaten.
[react-Bootstrap](https://react-bootstrap.github.io/) | Einfaches RWD Framework zur Gestaltung des Frontends
[csvjson] (https://www.npmjs.com/package/csvjson) | Um CSV-Daten in Json umzuwandeln
[react-csv] (https://www.npmjs.com/package/react-csv?activeTab=readme) | Um Json in CSV-Daten umzuwandeln und herunterladen.

## Installation / Ausführen des Projektes

Beschreibe, wie wir uns das Projekt lokal anschauen können.


Folgende Komponenten müssen lokal installiert sein:

Server:
- [nodejs](https://nodejs.org/en/) v13.2.0
- [expressjs](https://expressjs.com/) v4.18.12

Um das Projekt lokal auszuführen, folgendes in der Commandline / Bash eingeben:

```console
Client:
$ git clone <linktorepository> udg-probeaufgabe
$ cd udg-probeaufgab
& cd client
$ npm install
$ npm run start
---
Server:
$ cd udg-probeaufgab
& cd server
$ npm install
Bevor wir unseren Server starten, müssen wir eine .env File mit den folgenden Daten erstellen:

PORT = 5000
ORIGIN=http://localhost:3000
MONGODB_URI = 'mongodb://localhost/artikel'

$ npm run dev




