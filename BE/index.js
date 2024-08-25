var express = require('express');
var app = express();
const cors = require('cors');
app.use(cors());

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.get('/api/getProduct', function(req, res) {
    
    res.json([
        {
          image: 'CA',
          name: ' ',
          category: '102',    
          sold:0,
          price:0,
          goal: 296,
          actual: 212,
          profit: 45,
        },
        {
          image: 'Next',
          name: '',
          category: '117',
          sold:0,
          price:0,
          goal: 546,
          actual: 500,
          profit: 125,
        },
        {
          image: 'Tesco',
          name: '',
          sold:0,
          price:0,
          category: '105',
          goal: 443,
          actual: 418,
          profit: 247,
        },
        {
          image: 'Mango',
          name: '',
          sold:0,
          price:0,
          category: '117',
          goal: 499,
          actual: 490,
          profit: 103,
        },
        {
          image: 'Raw',
          name: '',
          category: '118',
          sold:0,
          price:0,
          goal: 899,
          actual:785 ,
          profit: 103,
        },
      ]);
  });

app.listen(3000);