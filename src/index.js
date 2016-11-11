import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS ! World',
  });
});

app.get('/task2A', (req, res) => {
  const sum = (+req.query.a || 0) + (+req.query.b || 0);
  res.send(sum.toString());
});

app.get('/task2B', (req, res) => {
  const str = (req.query.fullname);
  var arr = str.split(' ');
  var kolslov = arr.length;
  var otvet = 'Invalid fullname';

if (kolslov == 3) {
	otvet = arr[2] +' '+ arr[0].substring(0,1)+'. '+ arr[1].substring(0,1)+'.'
};

if (kolslov == 2) {
	otvet = arr[1] +' '+ arr[0].substring(0,1)+'.'
};
if (kolslov == 1) {
	otvet = arr[0]
};
if (str == '') {
	otvet = 'Invalid fullname'
};
if(!str.match("^[^0-9_/]*$")){
	otvet = ("Invalid fullname");
}

  res.send(otvet);

});


	
app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
