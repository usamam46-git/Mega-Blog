import config from "../config/config";
import { Client, Account,ID } from "appwrite";

export class AuthService {
  constructor() {
    this.client = new Client();
    this.account = new Account(this.client);
    this.client.setEndpoint(config.APPWRITE_URL).setProject(config.APPWRITE_PROJECT_ID);
  }
  async createAccount(email, password, name) {
    try {
      const user = await this.account.create(ID.unique(),email, password, name);
      if(user) {
        console.log("User created successfully:", user);
        //Call another method.
      }else{
        return user;
      }
    } catch (error) {
      console.error("Error creating account:", error);
      throw error;
    }
  }
}

const authService = new AuthService(); 
export default authService;