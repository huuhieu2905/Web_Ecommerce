import clientPromise from '@/lib/mongodb'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import NextAuth, { getServerSession } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const adminEmails = ['huuhieuht38@gmail.com','huuhieuthht@gmail.com','nplinh20112003@gmail.com','trinhhuu0123@gmail.com','dao191010@gmail.com','vadanhdungh@gmail.com','phandinhcan05082003@gmail.com']

export const authOptions = {
    providers: [
      // OAuth authentication providers...
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET
      }),
      // Passwordless / email sign in
    ],
    adapter: MongoDBAdapter(clientPromise),
    callbacks:{
      session: ({session,token,user}) => {
        if (adminEmails.includes(session?.user?.email)){
          return session;
        } else {
          return false;
        }
       
      },
    },
}

export default NextAuth(authOptions);

export async function isAdminRequest(req,res){
  const session = await getServerSession(req,res,authOptions);
  
  if (!adminEmails.includes(session?.user?.email)){
    res.status(401);
    res.end();
    throw 'not an admin';
  }
}