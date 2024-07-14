
import {
    DEFAULT_LOGIN_REDIRECT,
    apiAuthPrefix,
    authRoutes,
    publicRoutes
} from "@/routes"
import { auth } from "./auth";


export default auth((req) => {
    // const isLoggedIn=!!req.auth;
    // 
    // console.log("isLoggedIn : " ,isLoggedIn);

    const {nextUrl} = req;
    const isLoggedIn=!!req.auth;

    const isApiAuthRoute=nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute=publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute=authRoutes.includes(nextUrl.pathname);

    if(isApiAuthRoute){
        //console.log("Route : " ,req.nextUrl.pathname );
        return;
    }

    if(isAuthRoute){
        if(isLoggedIn){
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl.href))
        }
        return;
    }

    if(!isLoggedIn && !isPublicRoute){
        return Response.redirect(new URL("/", nextUrl.href))
    }

    
})
 
// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: [ '/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)']
}