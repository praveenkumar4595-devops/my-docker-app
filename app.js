const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello from Docker!</h1>
    <p>This app is running in a container</p>
    <p>Version: ${process.env.APP_VERSION || '1.0.0'}</p>
    <p>Host: ${process.env.HOSTNAME || 'unknown'}</p>
  `);
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
