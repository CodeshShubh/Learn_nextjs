import { NextRequest } from "next/server";
import { comments, commentType } from "./comments";



// export async function GET() {
//     return   Response.json(comments)
// }

export async function POST(req:Request) {
    const comment = await req.json();

    const newComment:commentType = {
         id:String(comments.length+1),
         name:comment.name
    }

    comments.push(newComment)

    return  Response.json(newComment)
}

//query parameters

export async function GET(req:NextRequest) {
    const {searchParams} = req.nextUrl

    const querys= searchParams.getAll("name") // searchParams.get("name") for one
    // so we can get multiple queries by using this here name is query key form url
        // ["you1", "you2"] in query we got this if url like comments?name=you1&name=you2
        // and if we have one one like comments?name=you1 then get get array also ["you1"]
    const filterComments = querys ? comments.filter((itm)=>querys.some((q)=>itm.name.includes(q))) : comments
          // here i am using some becuse if we have arry so filter only give response if we have full query value 
           // name=fuckyou1&name=fuckyou2 but if we need partially search we use filter and some same time
    return Response.json(filterComments)
}