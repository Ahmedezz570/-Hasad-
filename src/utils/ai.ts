import axios from "axios";

interface ChatCompletionResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

export const askAI = async (message: string) => {
  const response = await axios.post<ChatCompletionResponse>(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: message }],
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data.choices[0].message.content;
};