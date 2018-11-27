import Koa from 'koa'
import ip from 'ip'
import conf from './config'
import router from './router'
import middleware from './middleware'
import './mongodb'

const app = new Koa()
const cors = require('koa2-cors');
app.use(cors())
middleware(app)
router(app)
app.listen(conf.port, '127.0.0.1', () => {
    console.log(`server is running at http://${ip.address()}:${conf.port}`)
})