import productDao from "../dao/products.dao.js";
export const getAll=(req,res)=>{
    productDao.getAll()
    .then(products=> res.json(products))
    .catch(err=>res.json({
        status: "Server unavaliable"
    }));  
};
export const getOne=(req,res)=>{
    productDao.getOne(req.params.barcode)
    .then(product=>{
        !product ? res.json({
            message: "product not found"
        }) : res.json(product);
    })
    .catch(err=>res.json({
        status: "Server unavaliable"
    }));
}
export const insertOne=(req,res)=>{
    console.log(req.body)
    productDao.insertOne(req.body)
    .then(result=>res.json(result))
    .catch(err=>res.json({status: "Server unavaliable =/"}));
}
export const deleteOne=(req,res)=>{
    productDao.deleteOne(req.params.barcode)
    .then(result=>{
        !result ? res.json({
            message: "product not found"
        }) : res.json(result);
    })
    .catch(err=>res.json({status: "Server unavaliable =/"}));
}
export const updateOne=(req,res)=>{
    console.log(req.body)
    productDao.updateOne(req.params.barcode, req.body)
    .then(result=>res.json(result))
    .catch(err=>res.json({status: "Server unavaliable =/"}));
}
export const getPrice=(req,res)=>{
    productDao.getPrice()
    .then(result=> res.json(result))
    .catch(err=>res.json({
        status: "Server unavaliable"
    }));  
};
export const getPrime=(req,res)=>{
    productDao.getPrime(req.params.price)
    .then(result=> res.json(result))
    .catch(err=>res.json({
        status: "Server unavaliable"
    }));  
};