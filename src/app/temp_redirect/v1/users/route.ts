import { redirect } from "next/navigation"
import { lessUsers } from "../../sortData"


export async function GET() {
     redirect('/temp_redirect/v2/users')
    return  Response.json(lessUsers)
}