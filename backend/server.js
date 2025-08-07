const express = require('express')
const fs = require('fs');
const path = require('path');
const app = express()
const cors = require('cors');
const port = 3000

app.use(express.json());
app.use(cors());

const DATA_DIR = path.join(__dirname, 'excerpts');

// API to list JSON files
app.get('/api/files', (req, res) => {
  fs.readdir(DATA_DIR, (err, files) => {
    if (err) return res.status(500).send('Unable to read files');
    const jsonFiles = files.filter(file => file.endsWith('.json'));
    res.json(jsonFiles);
  });
});

// API to fetch a specific JSON file
app.get('/api/files/:filename', (req, res) => {
  const filePath = path.join(DATA_DIR, req.params.filename);
  if (!filePath.startsWith(DATA_DIR)) return res.status(400).send('Invalid path');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return res.status(404).send('File not found');
    res.type('json').send(data);
  });
});

// API to save a JSON file
app.post('/api/save-json', (req, res) => {
  const jsonData = req.body;
  const timeStamp = jsonData.timeStamp;

  fs.writeFile('excerpts/' + timeStamp + '.json', JSON.stringify(jsonData, null, 2), (err) => {
    if (err) {
      console.error('Failed to write file:', err);
      return res.status(500).send('Error writing file');
    }
    res.send('JSON data saved successfully.');
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

