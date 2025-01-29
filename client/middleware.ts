// middleware.ts
export { default } from "next-auth/middleware"

export const config = {
  matcher: [
    "/profile/:path*",
    "/interview/:path*",
    "/leaderboard/:path*",
    "/services/:path*",
    "/jobs/:path*",
    // add other protected routes here
  ]
}