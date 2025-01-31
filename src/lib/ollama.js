"use server";

import ollama from "ollama";

export async function getOllamaResponse(messages) {
  const response = await ollama.chat({
    model: "deepseek-r1:1.5b",
    messages: messages,
    stream: true,
  });

  let fullResponse = "";

  for await (const part of response) {
    fullResponse += part.message?.content || "";
  }

  return fullResponse;
}
