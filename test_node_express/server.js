const express = require('express');
const serveIndex = require('serve-index');
const path = require('path');
const os = require('os');

const app = express();
const port = 8080;

// Specify the directory you want to serve
const directoryToServe = os.homedir(); // path.join(__dirname, 'public');

// Serve static files and enable directory listing
app.use(express.static(directoryToServe));
app.use(serveIndex(directoryToServe, { icons: true }));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
