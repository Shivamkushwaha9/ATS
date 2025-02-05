// middleware.ts
export { default } from "next-auth/middleware"

export const config = {
  matcher: [

    //Temporary disabling so to get access in mobile without login , phone me login nii hora

    // "/profile/:path*",
    // "/interview/:path*",
    // "/leaderboard/:path*",
    // "/services/:path*",
    // "/jobs/:path*",
    // add other protected routes here
  ]
}