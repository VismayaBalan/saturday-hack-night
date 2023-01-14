const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "org-byuhA1YjY89BB2EZ77e1SfLW",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);




const generateText = async (req,res) => {

    const { location , budget} = req.body;

    const promptText = `I need a complete travel plan with places to visit and food to try in for 3 Days in ${location} in  a budget of Rs${budget}.show the output day by day and leave 10 line space between each day`
    console.log(req.body);
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: promptText,
            max_tokens: 800,
            temperature: 0.7,
          }); 
        
          res.status(200).json({
            success: true,
            data: response.data.choices[0].text
          })
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          } else {
            console.log(error.message);
          }
        res.status(400).json({
            success: false,
            error: 'Sorry, The data could not bo generated..'
        })
    }
}

module.exports =  { generateText }