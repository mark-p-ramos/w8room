import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export async function proxy(request: NextRequest) {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session) {
        if (request.url.startsWith('/api/')) {
            return NextResponse.json("Unauthorized", { status: 401 });
        }

        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!seed|login|api/auth|_next/static|_next/image|favicon.ico|static|.*\\..*).*)'],
};