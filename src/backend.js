
import express,{Aplication,Request,Response} from "express"
import cors from "cors"
import {Configuration,OpenAIApi} from "openai";

const PORT = 8000;

const app  = express()
app.use(cors())
app.use(express.json())

//cors intgrated

const API_KEY = process.env.OPENAI_API_KEY

const configuration = new Configuration({
    apiKey:API_KEY,
})

const openai = new OpenAIApi(configuration)

app.post("/completions",async(req,res)=>{
    try {
       const completion = await openai.createChatCompletion({
        model:"gpt-4",
        messages:[
            {
                role:"user",content:"Create a SQL request to"+req.body.message
        }
    ]
       })
       res.send(completion.data.choices[0].message)
    }
    
    catch(error){
        console.error(error)
        res.status(500).send("Server Error")
    }
})

app.listen(PORT,()=>console.log("Server is running"))
