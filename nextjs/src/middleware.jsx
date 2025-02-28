import {NextResponse} from 'next/server';

export function middleware(res){

    // if(res.nextUrl.pathname !="/login")
    // {
        return NextResponse.redirect(new URL("/login", res.url))
    // }
}

export const config = {
    matcher : "/about/:path*"
}