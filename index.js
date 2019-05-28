const did_you_mean = require("./app/didyoumean");
require("dotenv").config();
const api_key = process.env.API_KEY;
const se_id = process.env.SE_ID;

let query = process.argv[2];
if(query !== null){
    let search = new did_you_mean.did_you_mean(query,api_key,se_id, (body)=>{
        try{
            console.log(JSON.parse(body).spelling.correctedQuery);
        }catch(error){
            console.log("No spelling correction.");
        }
    }).query_google();
}