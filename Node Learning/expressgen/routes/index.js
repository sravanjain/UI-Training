var express = require('express');
const { ROUTE_CONTSTANTS } = require('route_constant');
const app = express();
var bodyParser=require('body-parser');
var router = express.Router();
app.get(ROUTE_CONTSTANTS.GET_LOGIN,function (req,res){
  res.sendFile('my.html')
});
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.post(ROUTE_CONTSTANTS.POST_LOGIN,function (req,res){
  console.log(req.body);
  res.send("Suucesfully login")
});
/* GET home page. */
router.get('/', function(req, res, next) {
  let data=[{
    name:"sravan",
    age:21,
    salary:40000
  },
  {
    name:"jain",
    age:25,
    salary:50000
  }]
  res.render('index', { title: 'Express',myName:'sravan' ,users:data});
});

module.exports = router;
