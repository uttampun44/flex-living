
    //  "use server";
import { Client, Account} from "node-appwrite";


export const client = new Client();

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('66d2876100358b9fdfc2')


export const account = new Account(client)
