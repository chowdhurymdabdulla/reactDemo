var express =  require('express');
// console.log(express);
var app = express();

app.use(express.static('public'));
app.listen(9001, function(){
  console.log("Express server is up on port 9001");
});
