import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getLoggedInUser } from "./app/lib/server/appwrite";

export async function middleware(request: NextRequest){

//   try {
//     const user = await getLoggedInUser();

//     if(!user){
//         return NextResponse.redirect(new URL('/', request.url))
//     }
//     console.log("Middleware ran sher")
//     return  NextResponse.next()
//   } catch (error) {
//     return NextResponse.redirect(new URL('/', request.url));
//   }
}

// export const config ={
//     matcher: ["/auth/dashboard"]
// }