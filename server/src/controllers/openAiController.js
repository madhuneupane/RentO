const OpenAI = require("openai")

const suggestDescription =async(req,res)=>{
    const content = req.body.content
   console.log(req.body);


    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
      });
      try {
        
      
      
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            "role": "system",
            "content": "You will be provided with statements, and your task is to paraphrase it in good and attractive english."
          },
          {
            "role": "user",
            "content": content
          }
        ],    temperature: 1,
        max_tokens: 256,
      });
    res.json(response.choices[0].message.content);
} catch (error) {
         console.log(error)
}

}


module.exports = {
    suggestDescription
  };