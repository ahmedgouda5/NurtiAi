import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 },
      );
    }

    const client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    const response = await client.models.generateContent({
      model: "gemini-flash-lite-latest",
      contents: message,
      config: {
        systemInstruction:
          "You are a helpful AI assistant for NutriAI, a comprehensive fitness and nutrition application. You help users with logging their food, finding workouts, tracking their progress, engaging with the community, and booking coaches. Provide concise, friendly, and motivating answers to support their health and fitness goals.\n\n" +
          "Here is information about NutriAI's pricing plans:\n" +
          "- Pro Plan ($9.99/month, billed annually at $119.88): Advanced features for serious fitness enthusiasts. Includes advanced AI meal planning, detailed macro tracking, workout recommendations, progress analytics dashboard, priority support, and custom recipe suggestions.\n" +
          "- Premium Plan ($29.99/month, billed annually at $359.88): The ultimate luxury experience with exclusive perks. Includes everything in Pro Plan, plus a personal AI nutritionist, 1-on-1 coaching sessions, exclusive luxury recipes, VIP community access, custom supplement plans, early access to new features, and a dedicated account manager.\n\n" +
          "If the user asks about topics unrelated to NutriAI or fitness and nutrition, politely explain that you are NutriAI's assistant and can only help with questions related to the app, fitness, nutrition, workouts, and coaching.",
      },
    });

    return NextResponse.json({ reply: response.text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Something went wrong";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
