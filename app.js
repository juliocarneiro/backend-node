let app = require('./config/server');

let rotaHome = require('./app/routes/home');
rotaHome(app);
let rotaNoticias = require('./app/routes/admin');
rotaNoticias(app);

app.listen(3000, () => {
    console.log('Servidor ON em http://localhost:3000');
});