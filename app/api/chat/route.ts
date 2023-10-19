import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

export async function POST(request: Request) {
  const { messages } = await request.json(); // { messages: [] }
  // messages [{ user and he says "hello there" }]

  // GPT-4 system message
  // system message tells GPT-4 how to act
  // it should always be at the front of your array

  // createChatCompletion (get response from GPT-4)
  const response = await openai.createChatCompletion({
    model: "gpt-4",
    stream: true,
    messages: [
      {
        role: "system",
        content:
          //   "Act as an experienced digital marketing executive with 10 years of experience. Your task is to write up a copywriting with simple English that has trending SEO elements.",
          "",
      },
      ...messages,
    ],
  });

  // create a stream of data from OpenAI (stream data to the frontend)
  const stream = await OpenAIStream(response);

  // send the stream as a response to our client / frontend
  return new StreamingTextResponse(stream);
}

// import type { NextApiRequest, NextApiResponse } from "next";
// import OpenAI from "openai";

// export default async function POST(req: NextApiRequest, res: NextApiResponse) {
//   console.log("hello");
//   if (req.method !== "POST") {
//     res.status(405).json({ message: "Method should be POST" });
//   } else {
//     try {
//       const prompt = req.body.prompt;

//       console.log("helloo", OpenAI);

//       const openai = new OpenAI({
//         apiKey: process.env.OPENAI_API_KEY,
//       });
//       const textResults = await openai.chat.completions.create({
//         model: "gpt-3.5-turbo",
//         messages: [{ role: "user", content: prompt }],
//         // stream: true,
//         // temperature: 0,
//         // max_tokens: 2048,
//       });

//       // for await (const part of textResults) {
//       //   console.log("output: ", part.choices[0].delta);
//       // }

//       console.log("textResults: ", textResults);

//       const response = textResults.choices[0].message;

//       res.status(200).json({ text: response });
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({ message: "Something went wrongggg" });
//     }
//   }
// }
