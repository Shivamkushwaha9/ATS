// app/api/auth/[...nextauth]/route.ts
import NextAuth, { NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";

export const authOptions: NextAuthOptions = {
  // debug: process.env.NODE_ENV === 'development', // Enable debugging
  
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  
  adapter: MongoDBAdapter(clientPromise),
  
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
    
    // Add this callback to handle the OAuthAccountNotLinked issue
    async signIn({ user, account, profile, email, credentials }) {
      // Always allow sign-in
      return true;
    },
    
    redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
  
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };















// // app/api/auth/[...nextauth]/route.ts
// import NextAuth, { NextAuthOptions } from "next-auth";
// import Google from "next-auth/providers/google";
// import { MongoDBAdapter } from "@auth/mongodb-adapter";
// import clientPromise from "@/lib/mongodb";

// export const authOptions: NextAuthOptions = {
//   providers: [
//     Google({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
//   adapter: MongoDBAdapter(clientPromise),
//   callbacks: {
//     async session({ session, user }) {
//       if (session.user) {
//         session.user.id = user.id;
//       }
//       return session;
//     },
//     redirect({ url, baseUrl }) {
//       return url.startsWith(baseUrl) ? url : baseUrl;
//     },
//   },
//   pages: {
//     signIn: '/auth/signin',
//     //error: '/auth/error', // Error code passed in query string as ?error=
//     // signOut: '/auth/signout'
//   },
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };





















// // app/api/auth/[...nextauth]/route.ts
// import NextAuth from "next-auth";
// import Google from "next-auth/providers/google";
// import { MongoDBAdapter } from "@auth/mongodb-adapter";
// import clientPromise from "@/lib/mongodb";

// const handler = NextAuth({
//   providers: [
//     Google({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
//   adapter: MongoDBAdapter(clientPromise),
//   callbacks: {
//     async session({ session, user }) {
//       // Add user ID to the session
//       if (session.user) {
//         session.user.id = user.id;
//       }
//       return session;
//     },
//     redirect({ url, baseUrl }) {
//       return url.startsWith(baseUrl) ? url : baseUrl;
//     },
//   },
//   pages: {
//     signIn: '/auth/signin',
//     // error: '/auth/error', // Error code passed in query string as ?error=
//     // signOut: '/auth/signout'
//   },
// });

// export { handler as GET, handler as POST };