import { connectToDatabase } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (requests) => {
    try {
        await connectToDatabase();

        const prompts = await Prompt.find({}).populate("creator");
        console.log(JSON.stringify(prompts))
        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch prompts", { status: 500 })
    }
}