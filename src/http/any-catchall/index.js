const https = require('https');
let arc = require('@architect/functions')
let parseBody = arc.http.helpers.bodyParser
const fetch=require("node-fetch");
const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

exports.handler = async function resp(req) {
 if (req.rawPath=='/'){

  return {
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    statusCode: 404,
    body: 'append dest url after path'
  }}
  
  else{
  url=req.rawPath.substring(1)// otherwise /abcdddddd
    queries=''
    Object.entries(req.pathParameters).forEach(([key, value]) => {  
queries=queries+key+'='+value+'&'
})
  url=url+'?'+queries
 // url=url.substring(url.length - 1)
  
  
                            return {
    headers:{ 'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
},
    statusCode:200,
    body: url
  }
   
  }
  
  
  
  
  
  
}


