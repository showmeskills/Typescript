import express,{Application,Request,Response,NextFunction} from "express";
import bodyParser from "body-parser";
const app:Application = express();
const port:number = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use((req:Request, res:Response,next:NextFunction) =>{
    res.set({
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials":true,
        "Access-Control-Allow-Headers":"Content-Type,name",
        "Access-Control-Allow-Methods":"GET,POST,PUT,DELETE,OPTIONS"
    })
    if(req.method === "OPTIONS"){
        return res.sendStatus(200);
    }
    next();
})

app.get('/get',(req:Request,res:Response)=>{
    res.json(req.query);
})

app.post('/post',(req:Request, res:Response)=>{
    res.json(req.body);
})

app.post('/post_timeout',(req:any,res:Response)=>{
    let {timeout} = req.query
    if(timeout){
        timeout = parseInt(timeout)
    }else{
        timeout = 0;
    }
    setTimeout(()=>{
        res.json(req.body);
    },timeout)
})

app.post("/post_status",(req:any, res:Response)=>{
    let {code} = req.query;
    if(code){
        code = parseInt(code)
    }else{
        code = 200;
    }
    res.statusCode = code;
    res.json(req.body);
})

app.listen(port,()=>console.log("8000 is listening"));