
     "use server";
import { Client, Account } from "node-appwrite";
import { cookies } from "next/headers";


// creating session login for admin
export async function createSessionClient() {
  const client = new Client()
    .setEndpoint(process.env.NODE_ENV)
    .setProject(process.env.NODE_ENV);

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
    .setEndpoint(process.env.NODE_ENV)
    .setProject(process.env.NODE_ENV)
    .setKey(process.env.NODE_ENV);

  return {
    get account() {
      return new Account(client);
    },
  };
}
