const express = require ("express");

const https = require ("https");
const app = express();
app.get("/", function(req,res){
  const url = ("https://api.openweathermap.org/data/2.5/forecast?q=chennai&appid=ed34abfab895b53f5c60f185a1811a9d&units=metric#");
  https.get(url,function(response){
    console.log(response.statusCode);

    response.on("data", function(data){
      const weatherData= JSON.parse(data);
      const temp = weatherData.list[0].main.temp
      res.send("The temparature in chennai is " + temp + "celsius");
 })
})

})
app.listen(3000,function(){
  console.log("The server is up and running");
})
