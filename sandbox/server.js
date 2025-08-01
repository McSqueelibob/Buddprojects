const express = require('express')
const fs = require('fs');
const app = express()
const cors = require('cors');
const port = 3000

app.use(express.json());
app.use(cors());

app.post('/save-json-ts', (req, res) => {
  const jsonData = req.body;
  const timeStamp = jsonData.timeStamp;

  fs.writeFile(timeStamp + '.json', JSON.stringify(jsonData, null, 2), (err) => {
    if (err) {
      console.error('Failed to write file:', err);
      return res.status(500).send('Error writing file');
    }
    res.send('JSON data saved successfully!');
  });
});

app.post('/save-json', (req, res) => {
  const jsonData = req.body;

  fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), (err) => {
    if (err) {
      console.error('Failed to write file:', err);
      return res.status(500).send('Error writing file');
    }
    res.send('JSON data saved successfully!');
  });
});

//app.get('/', (req, res) => {
//  res.send('<h1>Hello World!</h1>')
//})

app.get('sandbox/test', (req, res) => {
  res.send('This is the test page');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

