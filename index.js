const express = require('express');
const app = express();

app.set('port', process.env.port || 3000);

app.use(express.json());
require('./routes/index')(app)

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})