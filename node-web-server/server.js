const http = require('http')

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html')
    response.statusCode = 200
    
    const { method, url } = request
    
    if(url === '/'){
        if(method === 'GET'){
            response.statusCode = 200
            response.end(JSON.stringify({
                message: 'ini Halaman Dashboard'
            }))
        }else{
            response.end(`<h1>this page not working</h1>`)
        }
    }else if(url === '/about'){
        if(method === 'GET'){
            response.statusCode = 200
            response.end(JSON.stringify({
                message: "ini halaman About"
            }))
        }else if(method === 'POST'){
            let body = []

            request.on('data', (value) => {
                body.push(value)
            })

            request.on('end', () => {
                body = Buffer.concat(body).toString()
                const {name} = JSON.parse(body)
                response.statusCode = 200
                response.end(JSON.stringify({
                    message:name
                }))
            })
        }
    }else{
        response.statusCode = 404
        response.end(`Page not found`)
    }
}

const server = http.createServer(requestListener)

server.listen(5000, 'localhost', () => {
    console.log(`server running`);
})