// const express = require("express");
// const app = express();

// app.get("/checkup",(req,res)=>{
//     const kidneyId = req.query.kidneyId;
//     const username = req.headers.username;
//     const password = req.headers.password;

//     if(!(username==="raka" && password === "pass")){
//         res.status(400).json({"msg":"Wrong username or password"})
//         return;
//     }

//     if(kidneyId !=1 && kidneyId!=2){
//         res.status(400).json({"msg":"Wrong inputs"})
//         return;
        
//     }
//     res.json({
//         msg:"Your kidney is fine!"
//     })
// }); 

// app.listen(3000);

//---------------------------MIDDLEWARES-------------------------------------------------

// const express = require("express");
// const app = express();

// let noRequests = 0;

// function calRequests(req,res,next){
//     noRequests++;
//     console.log("Requests: "+noRequests);
//     next();
// }

// const userMiddleware =(req,res,next)=>{
//     const username = req.headers.username;
//     const password = req.headers.password;
//     if(username!="raka" || password != "pass"){
//         res.status(400).json({"msg":"Wrong username or password"})
//         return;
//     }
//     else{
//         next();
//     }
// };

// const kidneyMiddleware =(req,res,next)=>{
//     const kidneyId = req.query.kidneyId;
//     if(kidneyId !=1 && kidneyId !=2){
//         res.status(400).json({"msg":"Wrong input"})
//         return;
//     }
//     else{
//         next();
//     }
// };

// app.use(calRequests,userMiddleware,kidneyMiddleware);


// app.get("/kidneyCheck",(req,res)=>{
//     res.send("Healthy kidney");
// })

// app.listen(3000);

//---------------------------------------------------

// const express = require("express");
// const app = express();

// app.use(express.json());

// app.post("/healthCheck",(req,res)=>{
//     const kidneys = req.body.kidneys;
//     const kidneyLength = kidneys.length;

//     res.send("You have "+kidneyLength+" kidneys.");
// })

// //global catches
// app.use((err,req,res,next)=>{
//     res.json({
//         msg:" Something is wrong."
//     })
// })

// app.listen(3000);


//---------------------------ZOD---------------------------------------------------------

// const express = require("express");
// const app = express();
// const zod = require("zod");

// const schema = zod.array(zod.number());

// const schema2 = zod.object({
//     email: zod.string(),
//     password: zod.string(),
//     country: zod.literal("IN").or(z.literal("US"))
// })

// app.use(express.json());

// app.post("/healthCheck",(req,res)=>{
//     const kidneys = req.body.kidneys;
//     const response = schema.safeParse(kidneys)
//     if(!response.success){
//         res.status(411).json({
//             msg:"Invalid Inputs."
//         })
//     }else{
//         res.send({
//             response
//         })
//     }
// });

// app.listen(3000);

//------------------------------------------------

// const zod = require("zod");

// const validateInput = (arr)=>{
//     const schema = zod.array(zod.number());

//     const response = schema.safeParse(arr);
//     console.log(response);
// }

// validateInput(["1",2,3])

//------------------------------------------------

const zod = require("zod");
const validateInput = (obj)=>{
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })
    const response = schema.safeParse(obj);
    console.log(response);
}

app.post("/login",(req,res)=>{
    const response = validateInput(req.body)
    if(!response.success){
        res.json({
            msg: "Invalid Input."
        })
        return;
    }
})
