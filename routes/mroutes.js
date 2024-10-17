const {Router} = require('express')
const mrouter = Router()
const messages = require('../model/mmodel')

mrouter.get('/',(req,res)=>{
    res.render('homem',{messages:messages})
});
mrouter.get('/new',(req,res)=>{
    res.render('mform')
});
mrouter.post('/new',(req,res)=>{
    const {Authorname,msgtext} = req.body
    messages.push({text:msgtext,user:Authorname,added:new Date()})
    res.redirect("/")
})

module.exports = mrouter