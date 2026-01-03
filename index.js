const textOverlay = document.createElement("h1");
textOverlay.textContent = "This is an Assignment repo";
textOverlay.style.color = "red";
document.body.appendChild(textOverlay);
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});