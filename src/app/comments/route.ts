import { comments, commentType } from "./comments";



export async function GET() {
    return   Response.json(comments)
}

export async function POST(req:Request) {
    const comment = await req.json();

    const newComment:commentType = {
         id:String(comments.length+1),
         name:comment.name
    }

    comments.push(newComment)

    return  Response.json(newComment)
}