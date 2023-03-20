const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const app = express();
const port = 4000;
const bodyParser = require("body-parser");
const cors = require("cors"); 

const configuration = new Configuration({
  organization: "org-HRfrKPUSfTAPDpxN0xBjpq5J",
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);


app.use(bodyParser.json());
app.use(cors());

app.post("/", async (req, res) => {

  const { message } = req.body

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${message}`,
    max_tokens: 100,
    temperature: 0.5,
  });

  res.json({
    message: response.data.choices[0].text,
   
  });
});

app.listen(port, () => console.log("Gpt running"));
