const express = require('express');  // 1. Express library for building web servers
const app = express();               // 2. Create an Express application instance
const PORT = 3000;                  // 3. Port number the server will listen on

// 4. Define a GET route handler for the root URL ('/')
app.get('/', (req, res) => {
  res.send('Hello World!');         // 5. Send back a simple text response
});

// 6. Start the server listening on the specified port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
