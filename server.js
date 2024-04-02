// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Konfiguriere dotenv, um Umgebungsvariablen aus einer .env-Datei zu lesen
dotenv.config();

const app = express();

// CORS-Middleware zur Bearbeitung von Cross-Origin-Anfragen
app.use(cors());

// Express JSON-Middleware zum Parsen von JSON-Anfragen
app.use(express.json());

// Definieren Sie eine einfache Route für den Test
app.get('/', (req, res) => {
  res.json({ message: 'Willkommen bei Ihrem PERN-Stack Server!' });
});

// Starten Sie den Server auf dem angegebenen Port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
