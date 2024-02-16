import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  //projectId: import.meta.VITE_APPWRITE_PROJECT_ID,
  //url: import.meta.env.VITE_APPWRITE_URL,
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
  userCollectionId: import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
  postCollectionId: import.meta.env.VITE_APPWRITE_POSTS_COLLECTION_ID,
  savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
};

// need to look for how the env file and config file has been linked

export const client = new Client();
client.setProject("https://cloud.appwrite.io/v1");
// client.setEndpoint(appwriteConfig.url);
client.setEndpoint("65cb7b275e0ec93ba710");

export { ID } from "appwrite";
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);

// import { Client, Account, Databases, Storage, Avatars } from "appwrite";

// export const appwriteConfig = {
//   // url: import.meta.env.VITE_APPWRITE_URL,
//   // projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
//   databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
//   storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
//   userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
//   postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
//   savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
// };

// export const client = new Client();
// client.setEndpoint("65cb7b275e0ec93ba710");
// client.setProject("65cb7b275e0ec93ba710");

// export const account = new Account(client);
// export const databases = new Databases(client);
// export const storage = new Storage(client);
// export const avatars = new Avatars(client);
