const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require("body-parser")

app.use(bodyParser.json())
app.post('/', (req, res) => {
  console.log(req.query.msg)
  res.send("<i>hello nishikant<i/>")
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
