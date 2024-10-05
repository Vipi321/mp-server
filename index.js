//importing json-server package
const jsonserver=require('json-server')
//creating server instance
const mpserver=jsonserver.create()
//getting default middleware
const middleware=jsonserver.defaults()
//setting routes for resources
const routes=jsonserver.router('db.json')


//configuring the server
mpserver.use(middleware)
mpserver.use(routes)

const PORT=3000 || process.env.PORT

mpserver.listen(PORT,()=>{
    console.log('server running at:'+PORT)
})