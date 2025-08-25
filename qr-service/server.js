const express = require('express');
const path = require('path');
const app = express();
const PORT = 3002;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


function renderQR(res, data) {
  const fs = require('fs');
  const qrHtmlPath = path.join(__dirname, 'public', 'qr.html');
  fs.readFile(qrHtmlPath, 'utf8', (err, html) => {
    if (err) return res.status(500).send('Error interno');
    const dataScript = `<script>window.qrData = ${JSON.stringify(data)};</script>`;
    const finalHtml = html.replace('</head>', `${dataScript}</head>`);
    res.send(finalHtml);
  });
}

app.post('/generate', (req, res) => {
  renderQR(res, req.body);
});

app.get('/generate', (req, res) => {
  renderQR(res, req.query);
});

app.listen(PORT, () => {
  console.log(`QR Service running on http://localhost:${PORT}`);
});
