import { usersWithProfession } from "../../DetailedData";

export async function GET() {
    
    return Response.json(usersWithProfession)
}