import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest){

    const user:boolean = false;

    if(!user){
        return NextResponse.redirect(new URL('/', request.url))
    }
    console.log("Middleware ran sher")
    return  NextResponse.next()
}

export const config ={
    matcher: ["/auth/dashboard"]
}