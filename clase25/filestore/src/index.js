import express from 'express'
import cookieParser from 'cookie-parser'
import session from 'express-session'
/* ----------------------------------------------------- */
/*           Persistencia por file store                 */
/* ----------------------------------------------------- */
const FileStore = require('session-file-store')(session)
/* ----------------------------------------------------- */

const app = express()
app.use(cookieParser())
app.use(session({
    /* ----------------------------------------------------- */
    /*           Persistencia por file store                 */
    /* ----------------------------------------------------- */
    store: new FileStore({path: './sesiones', ttl:300, retries: 0}),
    /* ----------------------------------------------------- */

    secret: 'shhhhhhhhhhhhhhhhhhhhh',
    resave: false,
    saveUninitialized: false/* ,
    cookie: {
        maxAge: 40000
    } */
}))

app.get('/', (req,res) => {
    res.send('Servidor express ok!')
})

app.get('/contador', (req,res) => {
    if(req.session.contador) {
        req.session.contador++
        res.send(`Ud ha visitado el sitio ${req.session.contador} veces.`)
    }
    else {
        req.session.contador = 1
        res.send('Bienvenido!')
    }
})

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Servidor express escuchando en el puerto ${PORT}`)
})