import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are NutriAI's AI nutrition and fitness coach.

Your job is to generate a personalized health plan based on the user's profile.

Generate:
- Daily calorie target
- Daily protein target
- Daily carbohydrates target
- Daily fat target
- Recommended water intake
- Weekly workout frequency recommendation
- Nutrition recommendations
- Exercise recommendations
- Lifestyle recommendations

Take into consideration:
- User age calculated from birth_date
- Weight and height
- Gender
- Health conditions
- User goals
- Financial status
- Marital status
- Country and city for cultural food preferences

Return ONLY valid JSON.

Response format:

{
  "daily_calories": 0,
  "daily_protein": 0,
  "daily_carbs": 0,
  "daily_fat": 0,
  "daily_water_liters": 0,
  "recommended_workout_days": 0,
  "nutrition_recommendations": [],
  "exercise_recommendations": [],
  "lifestyle_recommendations": [],
  "summary": ""
}

The generated plan will be displayed directly inside the NutriAI dashboard.

Therefore, the response must contain all information required to dynamically render dashboard components instead of using static placeholder data.

Include:

* User summary and health overview.
* Daily calorie target.
* Protein, carbohydrates, and fat targets.
* Daily water intake goal.
* Weekly progress target.
* Personalized meal recommendations.
* Personalized workout recommendations.
* Health insights based on goals and health conditions.
* Motivational message for the user.
* Recommended habits and lifestyle improvements.

The response must be structured and consistent so it can be stored in the application's state management and rendered dynamically across dashboard widgets, charts, cards, and progress sections.

Return ONLY valid JSON.

Do not include markdown, explanations, or text outside the JSON response.`;

export async function POST(req: Request) {
  try {
    const userProfile = await req.json();

    if (!userProfile) {
      return NextResponse.json(
        { error: "User profile is required" },
        { status: 400 },
      );
    }

    const client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    const profileMessage = `Generate a personalized health plan for this user:

${JSON.stringify(userProfile, null, 2)}`;

    const response = await client.models.generateContent({
      model: "gemini-2.0-flash",
      contents: profileMessage,
      config: {
        systemInstruction: SYSTEM_PROMPT,
      },
    });

    const rawText = response.text ?? "";

    // Strip any accidental markdown fences
    const cleaned = rawText
      .replace(/^```json\s*/i, "")
      .replace(/^```\s*/i, "")
      .replace(/```\s*$/i, "")
      .trim();

    let plan;
    try {
      plan = JSON.parse(cleaned);
    } catch {
      console.error("Failed to parse Gemini response as JSON:", rawText);
      return NextResponse.json(
        { error: "AI returned an invalid response. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({ plan });
  } catch (error) {
    console.error("HealthPlan API Error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Something went wrong";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
