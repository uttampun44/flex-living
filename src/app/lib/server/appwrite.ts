
     "use server";
import { Client, Account } from "node-appwrite";
import { cookies } from "next/headers";


// creating session login for admin
export async function createSessionClient() {
 
  const client = new Client()

    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_END_POINT!)
    .setProject(process.env.NEXT_PUBLIC_APPRWRITE_FLEX_LIVING!);

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
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_END_POINT! )
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
    .setKey(process.env.NODE_ENV);

  return {
    get account() {
      return new Account(client);
    },
  };
}

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error) {
    console.error('Failed to fetch logged-in user:', error);
    return null;
  }
}

  
