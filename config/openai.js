import OpenAI from "openai";


module.exports = class openai{ 
    static configuraton(){
        const configuration = new this.configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });
        return new OpenAIApi(configuration)
    }

    static textCompletion ({prompt}){
        return{
            
                model: "gpt-3.5-turbo",
                messages: [
                  {
                    "role": "system",
                    "content": [
                      {
                        "text": "X",
                        "type": "text"
                      }
                    ]
                  }
                ],
                temperature: 1,
                max_tokens: 256,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
                response_format: {
                  "type": "text"
                },
              }
        }
    }


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const response = await openai.chat.completions.create();