import { comments } from "../comments";
export async function GET(_req: Request, { params }: { params: Promise<{ Id: string }> }) {

    const { Id } = await params

    const comment = comments.find((itm, i) => parseInt(itm.id) == parseInt(Id))

    return Response.json(comment)

}


export async function PATCH(req: Request, { params }: { params: Promise<{ Id: string }> }) {
    const { Id } = await params;

    const { name } = await req.json()

    const commentIndex = comments.findIndex((itm) => itm.id == Id)

    comments[commentIndex].name = name

    return Response.json(comments[commentIndex])
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ Id: string }> }) { // we _req because we dont need that

    const { Id } = await params;

    const index = comments.findIndex((itm) => itm.id == Id)

    const deletedComment = comments[index]

     comments.splice(index,1);

    return Response.json(deletedComment);

}