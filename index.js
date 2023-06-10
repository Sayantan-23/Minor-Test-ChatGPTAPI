import "dotenv/config"
import { Configuration, OpenAIApi } from "openai"
import readline from "readline"

const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.API_KEY
}))

const UI = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})


UI.prompt()
UI.on("line", async (input) => {

  let inputData = input.trim().toLowerCase();
  // Prompt: postBlog
  if (inputData === "blogIdea") inputData = "Give some topics to write a blog."
  
  // Prompt: suggestBlog
  if (inputData === "suggetblog") inputData = "Suggest me some blogs"
  
  // Prompt: suggestTechBlog
  if (inputData === "suggestTechBlog") inputData = "Suggest me some tech blogs"
  
  // Prompt: postBlog
  if (inputData === "postblog") {
    // functions to get data from the user and post it and gives a response blog posted.
  }

  const res = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content:inputData}]
  })
  console.log(res.data.choices[0].message.content);
  UI.prompt()
})