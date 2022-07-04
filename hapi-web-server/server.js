// console.log("membuat web server dengan HAPi framwork");
const Hapi = require('@hapi/hapi')
const routes = require('./routes')

const init = async () => {
    const server = Hapi.Server({
        port: 5000,
        host: 'localhost'
    })

    /**
     * !pada method route seperti dibawah ini bisa menggunakan array untuk menampung multiple path
     */
    server.route(routes)
    // server.route([
    //     {
    //         method:'GET',
    //         path:'/',
    //         handler: function(){
    //             return 'Hello Aku menggunakan framework HAPI'
    //         }
    //     },
    //     {
    //         method: 'GET',
    //         path: '/homepage',
    //         handler: function(request, h){

    //             return 'Hello ini halaman Homepage'
    //         }
    //     },
    //     {
    //         method: 'GET',
    //         path: '/about',
    //         handler: (request, h) => {
    //             return 'Hello ini halaman About'
    //         }
    //     }
    // ])

    await server.start()
    console.log(`server berjalan 🏃 pada ${server.info.uri}`);
}

init()

