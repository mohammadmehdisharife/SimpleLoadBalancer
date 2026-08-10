import express from 'express';
import os from 'os';

const app = express();
const port = process.env.PORT || 3000;
const serverName = process.env.SERVER_NAME || 'Backend';

app.get('/', (req, res) => {
  res.json({
    message: `Hello from ${serverName}!`,
    hostname: os.hostname(),
    instance: serverName,
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`${serverName} running on port ${port}`);
});