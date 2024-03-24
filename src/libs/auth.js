
import { SanityAdapter, SanityCredentials } from "next-auth-sanity";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
export const authOptions={
    providers: [
        GitHubProvider({
          clientId: process.env.GITHUB_CLIENT_ID,
          clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
          }),
          SanityCredentials(sanityClient),
      ],
      session:{
        strategy:'jwt',
      },
      adapter:SanityAdapter(sanityClient),
      debug:process.env.NODE_ENV==="development",
      secret:process.env.NEXTAUTH_SECRET,
      callbacks:{}
}