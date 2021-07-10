// 基本設定
const express = require('express')
const port = 3002
const app = express()
const exhbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateFuckingword = require('./generate_fuckingword')




app.engine('handlebars', exhbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extend: true }))

//路由及回應
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const option = req.body.option
  const fuckingword = generateFuckingword(option)
  //作為radio check參考(不安裝handlebars插件{{#if}}限制較多)
  const engineer = []
  const designer = []
  const entrepreneur = []
  if (option === 'engineer') {
    engineer.push(option)
  } else if (option === 'designer') {
    designer.push(option)
  } else {
    entrepreneur.push(option)
  }
  res.render('index', { fuckingword: fuckingword, option: option, engineer: engineer, designer: designer, entrepreneur: entrepreneur })
})


//啟動及監聽伺服器
app.listen(port, () => {
  console.log(`The server is running in http://localhost:${port}`)
})