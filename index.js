require('dotenv').config();

let express = require('express');
let app = express();

let test = require('./controllers/0-testcontroller');
let theBoss = require('./controllers/1-theBossController');
let bigBoss = require('./controllers/2-bigBossController');
let solidSnake = require ('./controllers/3-solidSnakeController');
let liquidSnake = require('./controllers/4-liquidSnakeController');
let solidusSnake = require('./controllers/5-solidusSnakeController');
let revolverOcelot = require('./controllers/6-revolverOcelotController');
let raiden = require('./controllers/7-raidenController');
let eva = require('./controllers/8-evaController');
let quiet = require('./controllers/9-quietController');
let user = require('./controllers/0-usercontroller');

let sequelize = require('./db');
let bodyParser = require('body-parser');

sequelize.sync();

app.use(bodyParser.json());
app.use(require('./middleware/headers'));

app.use('/mgsServer/test', function(req, res) {
    res.send("This is data from the /mgsServer/test endpoint. It's from the server.")
});

app.use('/test', test);
app.use('/patriots/user', user);

app.use(require('./middleware/validate-session'));
app.use('/theboss', theBoss);
app.use('/bigboss', bigBoss);
app.use('/solidsnake', solidSnake);
app.use('/liquidsnake', liquidSnake);
app.use('/solidussnake', solidusSnake);
app.use('/revolverocelot', revolverOcelot);
app.use('/raiden', raiden);
app.use('/eva', eva);
app.use('/quiet', quiet)

app.listen(process.env.PORT, function(){console.log('Hey... Your pretty good...')});