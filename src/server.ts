import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static(path.join(__dirname, 'public')));

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(_, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function(_, res) {
  res.json({ greeting: 'hello API' });
});

// listen for requests :)
app.listen(process.env.PORT || 3000);
