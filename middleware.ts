import {
  convexAuthNextjsMiddleware,
  createRouteMatcher,
} from "@convex-dev/auth/nextjs/server";


const isPublic = createRouteMatcher(["/signin"]);

export default convexAuthNextjsMiddleware((request) => {
    if (!isPublic(request)){
        
    }
});
export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
