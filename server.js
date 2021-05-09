const HTTP = require('http');
const users = [
  {id: 101, name: 'CI持续集成101'},
  {id: 202, name: 'CD持续部署201'}
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