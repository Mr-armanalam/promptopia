import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (req, res) =>{
    try {
        await connectToDB();

        const prompts = await Prompt.find({}).populate('creator'); // populate because at each prompt related to own unique user

        return new Response(JSON.stringify(prompts), {
            status: 200
        })
    } catch (error) {
        return new Response("Failed to fetch all prompt", { status:500})
    }
}