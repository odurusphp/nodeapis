const http = require('http')
const url =  require('url')
const StringDecoder = require('string_decoder').StringDecoder;

const server = http.createServer((req, res)=>{

     // Get URL and parse it
     const parsedUrl = url.parse(req.url, true)

     //Gte pathname
     const path = parsedUrl.pathname;
     const trimmedPath = path.replace(/^\/+|\/+$/g, '');

     //Get request method
     const method = req.method.toLowerCase();

     //Get queery String
     const queryStringObject = parsedUrl.query;

     //Get Headers
     const headers = req.headers;

     //Getting payload

     const decoder = new StringDecoder('utf-8');

      let buffer = '';

      req.on('data', (data)=>{
        buffer += decoder.write(data)
      })

      req.on('end', ()=>{

      buffer += decoder.end()

      console.log(queryStringObject)
      console.log(headers)
      console.log(buffer)
      res.end('Hello Server');
      })


})


server.listen(3000, ()=> console.log('listening on port 3000'))
