//funciones

const { request, response } = require("express")

const usersGet = (req= request, res=response)=>{
    const {limit, page} = req.query;
    res.json({message: "Get usuarios",
     limit,
     page})
};

const userPost =  (req = request, res) =>{
    const {nombre, correo}= req.body;
    res.json({message: "Post usuarios", 
  nombre,
  correo
});
};

const userPut =  (req = request, res) =>{
    const {idUser} = req.params
    res.json({message: "Put usuarios",
    idUser})
};

const userDelete =  (req,res) =>{
    res.json({message: "Delete usuarios"})
};

module.exports = {
    usersGet,
    userPost,
    userPut,
    userDelete
};