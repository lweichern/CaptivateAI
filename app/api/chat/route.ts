import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

export async function POST(request: Request) {
  const { messages, style, emoji, wordLimit } = await request.json();

  messages[0].content = contentConverter(
    messages[0]?.content,
    style,
    emoji,
    wordLimit
  );

  console.log("Prompt: ", messages[0].content)

  const response = await openai.createChatCompletion({
    model: "gpt-4",
    stream: true,
    messages: [
      {
        role: "system",
        content:
          "Act as an experienced digital marketing executive with 10 years of experience. Your task is to write up a copywriting with simple English that has trending SEO elements.",
      },
      ...messages,
    ],
  });

  // create a stream of data from OpenAI (stream data to the frontend)
  const stream = await OpenAIStream(response);

  // send the stream as a response to our client / frontend
  return new StreamingTextResponse(stream);
}

function contentConverter(
  content: string,
  style: string,
  emoji: boolean,
  wordLimit: string
) {
  const preText =
    "Act as an experienced digital marketing executive with 10 years of experience. Your task is to write up a copywriting with simple English that has trending SEO elements. \nCreate  a description that catches the attention of the reader using the contents below: \n";
  const postText =
    style &&
    `\n\nPlease provide the answer in a ${style} tone and style and you have the freedom to modify the content of the copywriting to what you think is better. Remember to highlight the SEO elements`;
  const hasEmojiText = emoji
    ? "Feel free to add suitable emoji to make the description more eye-catching for the audience."
    : "";
  const wordLimitText = `Also, ensure that the description is ${parseInt(wordLimit) > 0 ? `not more than wordLimit` : "around 500"} words excluding the SEO keywords.`

  return `${preText} ${content} ${postText} ${hasEmojiText} ${wordLimitText} Besides, add the related SEO keywords to the end of the description with bullet point format.`;
}
