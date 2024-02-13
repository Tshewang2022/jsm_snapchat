import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  // projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  // url: import.meta.env.VITE_APPWRITE_URL,
};

// need to look for how the env file and config file has been linked

export const client = new Client();
client.setProject("65cb7b275e0ec93ba710");
// client.setEndpoint(appwriteConfig.url);
client.setEndpoint("https://cloud.appwrite.io/v1");

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
