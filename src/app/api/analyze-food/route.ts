import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { image } = await req.json();

    if (!image) {
      return NextResponse.json(
        { error: "Image is required" },
        { status: 400 }
      );
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content:
            "You are a nutrition expert. Analyze the food in the image and provide the estimated nutritional information. Return ONLY a JSON object with the following structure: { \"name\": \"food name\", \"protein\": number (grams), \"carbs\": number (grams), \"fat\": number (grams), \"calories\": number (kcal) }. Do not include any other text or markdown formatting.",
        },
        {
          role: "user",
          content: [
            {
              type: "image_url",
              image_url: {
                url: image,
              },
            },
            {
              type: "text",
              text: "Analyze this food image and provide the nutritional information.",
            },
          ],
        },
      ],
      max_tokens: 300,
    });

    const content = response.choices[0].message.content;

    if (!content) {
      return NextResponse.json(
        { error: "Failed to analyze food" },
        { status: 500 }
      );
    }

    const nutritionData = JSON.parse(content);

    return NextResponse.json(nutritionData);
  } catch (error) {
    console.error("Error analyzing food:", error);
    return NextResponse.json(
      { error: "Failed to analyze food" },
      { status: 500 }
    );
  }
}
