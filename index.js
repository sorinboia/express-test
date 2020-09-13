const express=require('express');
const app=express();
app.get('/',function(req,res)
{
    res.cookie('thisIsACookie','123456');
    res.send('Hello World!');
});
const server = app.listen(3000,function() {});