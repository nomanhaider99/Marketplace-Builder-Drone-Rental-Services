import { auth } from "@/auth"

const NON_AUTH_ROUTES = [
    '/login',
    '/register'
];

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const isNonAuthRoute = NON_AUTH_ROUTES.includes(nextUrl.pathname);

    if (isNonAuthRoute && isLoggedIn) {
        return Response.redirect(new URL('/', nextUrl));
    } 
})