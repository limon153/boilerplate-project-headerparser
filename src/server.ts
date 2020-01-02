import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

app.get('/', function(_, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami', function(req, res) {
  res.json({
    ipaddress: req.connection.remoteAddress,
    language: req.header('accept-language'),
    software: req.header('user-agent'),
  });
});

app.listen(process.env.PORT || 3000);
