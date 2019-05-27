const request = require("request");
require("dotenv").config();


const api_key = process.env.API_KEY;
const se_id = process.env.SE_ID;

const return_did_you_mean = (query, callback) => {
    return new DidYouMean(query, api_key, se_id,  (body) => {
        console.log(body);

        callback(body);
    }).query_google();
};

class DidYouMean{
    constructor(query, api_key, se_id, callback){
        this.query = query;
        this.api_key = api_key;
        this.se_id = se_id;
        this.callback = callback;
        this.setup_headers();
    }

    query_google(){
        request({url: this.build_query_url(), headers:this.headers, method:'GET'}, (error, response, body) => {
            console.log(body);
            this.callback(body);
        });
    }

    build_query_url(){
        return `https://www.googleapis.com/customsearch/v1/siterestrict?q=${this.query}&cx=${this.se_id}&key=${this.api_key}`;
    }

    static urlify(string){
      return string.trim().replace(/\s/g, '%20');
    }

    setup_headers(){
        this.headers = {
            headers: {
                'User-Agent': '	Mozilla/5.0 (Windows NT x.y; rv:10.0) Gecko/20100101 Firefox/10.0'
            }
        }
    }
}

exports.return_did_you_mean = return_did_you_mean;