const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage'
        }
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak bisa diakses'
        }
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'ABout'
        }
    },
    {
        method: '*',
        path: '/{any*}',
        handler: function(request, h){
            return 'Halaman tidak ditemukan'
        }
    },
    {
        method:'GET',
        path: '/hello/{name?}',
        handler: (request, h)  => {
            const { name = 'tidak dikenal' } = request.params
            const { lang } = request.query

            if(lang === 'id'){
                return `hai ${name}`
            }
            return `Haloooo ${name}`
        }
    },
    {
        method:'GET',
        path:'/login',
        handler: (request, h) => {
            const { username, password } = request.payload
            return `Hello ${username}`
        }
    }
]

module.exports = routes;