// const express = require("express");
// const app = express();
// function sum(n){
//     let ans =0;
//     for(let i=1;i<=n;i++){
//         ans=ans+i;
//     }
//     return ans;
// }


// app.get("/",function(req,res){
//     const n = req.query.n;
//     const ans = sum(n)
//     res.send("ans: "+ans);
// })
// app.listen(3000);

//------------------------------------------------------------------------

// const express = require("express");
// const app =express();

// function sum(a,b){
//     return a+b;
// }

// app.get("/",function(req,res){
//     const a=parseInt(req.query.a);
//     const b=parseInt(req.query.b);
//     const ans = sum(a,b);
//     res.send("answer is: "+ ans);
// })

// app.listen(3000);

//----------------------------------------------------------------------
const express = require("express");
const app = express();
var users = [{
    name:"Raka",
    kidneys:[{
        healthy:false
    }]
}];

app.get("/",(req,res)=>{
    const rakaKidneys = users[0].kidneys;
    const numberKidneys = rakaKidneys.length;
    let numberHealthy=0;
    for(let i=0;i<rakaKidneys.length;i++){
       if(rakaKidneys[i].healthy){
        numberHealthy=numberHealthy+1;
       }
    }
    const numberUnhealthy = numberKidneys-numberHealthy;
    res.json({
        numberKidneys,
        numberHealthy,
        numberUnhealthy
    })
})

app.use(express.json());

app.post("/",(req,res)=>{
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg:"Done."
    })
})

app.put("/",(req,res)=>{
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({});
})

app.delete("/",(req,res)=>{
    const newKidneys=[];
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys=newKidneys;
    res.json({msg:"Done."})
})

app.listen(3000);