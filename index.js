const fetch = require('node-fetch');

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
  
    url=req.rawPath
   cookies=req.cookies
   headers=req.headers
   headers.host=url.split('/')[0] //set the correct host
   body=null?req.requestContext.http.method=='GET':req.body

const response = await fetch(url,{method:req.requestContext.http.method,headers:headers,body:body});

    return {
    headers:response.headers.raw(),
    statusCode: response.status,
    body: response.text()
  }
  
  }
  
  
  
  
  
  
  
}


