const HTTP = require('http');
const users = [
  {id: 1010, name: 'CI持续集成1010'},
  {id: 2020, name: 'CD持续部署2010'}
];
const server = HTTP.createServer((req,res) => {
  res.setHeader('Access-Control-Allow-Origin', "*")
  if(req.url === "/api/users"){
    res.end(JSON.stringify(users));
  }else{
    res.end("Not Found")
  }
})
server.listen(3000, ()=>{
  console.log("server started...");
})