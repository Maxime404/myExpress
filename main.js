const express = require('./my-express')
const app = express()

app.get('/', function (req, res) {
    res.write('GET request to homepage')
})

app.post('/students', function (req, res) {
    res.write('POST request to homepage')
})

app.put('/students/', function (req, res) {
    res.write('PUT request to homepage')
})

app.delete('/students/', function (req, res) {
    res.write('DELETE request to homepage')
})

// app.all('/*', function (req, res) {
//      res.write('Request ALL to homepage')
// })

// app.render('home', { name: 'Ch0pper' }, (err, html) => {
//       // ...
// })

app.render('home', { name: 'Ch0pper', weight: 33.1337 }, (err, html) => {
      // ...
})

app.listen(4242)
