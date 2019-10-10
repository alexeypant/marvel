import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as passport from 'passport';
// import * as http from 'http';
import { config } from './database/config';
import users from './routes/user';
import { usePassport } from './authentication/usePassport';

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);


const app = express();
app.use(passport.initialize());
usePassport(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', users);

app.get('/', (req, res) => {
  res.send('hello');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});


// app.use('/',             express.static(path.join(__dirname, '../client/dist')));
// app.use('/node_modules', express.static(path.join(__dirname, '../../node_modules')));

// const httpServer: http.Server = app.listen(PORT, () => {
//   if (process.env.NODE_ENV !== 'production') {
//     console.log(`Listening on http://localhost:${PORT}`);
//   }
// });

