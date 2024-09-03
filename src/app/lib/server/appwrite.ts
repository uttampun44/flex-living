
     "use server";
import { Client, Account, Databases } from "node-appwrite";
import { cookies } from "next/headers";


// creating session login for admin
export async function createSessionClient() {
 
  const client = new Client()

    .setEndpoint(process.env.NEXT_PUBLIC_END_POINT)
    .setProject(process.env.NEXT_PUBLIC_PROJECT_ID);

  const session = cookies().get("my-custom-session");
  if (!session || !session.value) {
    throw new Error("No session");
  }

  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
  };
}

// creating admin client for login
export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT )
    .setProject(process.env.NEXT_PUBLIC_PROJECT_ID)
    .setKey(process.env.NEXT_PUBLIC_API_KEY);

  return {
    get account() {
      return new Account(client);
    },
    get databases() {
      return new Databases(client)
    }
  };
}


