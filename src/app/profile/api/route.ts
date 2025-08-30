import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

// headers
// -> using req:NextRequest

// so we can get headers form client with two types
// export async function GET(req:NextRequest) {
//           const reqHeaders = new Headers(req.headers);
//           console.log(reqHeaders.get("Authorization"))
//     return new Response("prile api routes")
// }

// above one is working fine but also nextjs provided nextjs fuction so can also use it given blow


// -> using build in funciton // await headers()
// export async function GET() {
//     const reqHeaders = await headers()

//     console.log(reqHeaders.get("Authorization"))

//     return new Response(`<h1>this response</h1>`,{
//         headers:{
//             "Content-Type":"text/html" // thi will convet response as heading
//         }
//     })
// }




// -> cookies


// by using req:NextRequest ->

// Set Cookie
// export async function GET(req:NextRequest) {
//     return new Response('<h1>body</h1>',{
//         headers:{
//             "Content-Type": "text/html",
//             "Set-Cookie" : "theme=light"
//         }
//     })
// }



// get Cookie by req:NextRequest

// export async function GET(req:NextRequest) {
    
//     const cookies = req.cookies.get('theme')
//     console.log(cookies)

//     return new Response("<h1>body</h1>",{
//         headers:{
//             "Set-Cookie" : "theme=dark"
//         }
//     })

// }

// cookies by using cookie next funciton

export async function GET() {
     const cookieStore = await cookies();

      cookieStore.set("age","20") // this is used for set cookies

     console.log(cookieStore.get("theme")); // this is for get cookies

     return new Response("<h1>body</h1>",{
        headers:{
            "Set-Cookie": "theme=green", // here we can also set cookies
        }
     })
}