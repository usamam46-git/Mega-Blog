import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    constructor() {
        this.client = new Client();
        this.account = new Account(this.client);
        this.client.setEndpoint(config.APPWRITE_URL).setProject(config.APPWRITE_PROJECT_ID);
    }
    async createAccount(email, password, name) {
        try {
            const user = await this.account.create(ID.unique(), email, password, name);
            if (user) {
                return this.login(email, password);
            } else {
                return user;
            }
        } catch (error) {
            console.error("Error creating account:", error);
            throw error;
        }
    }
    async login(email, password) {
        try {
            const session = await this.account.createEmailSession(email, password);
            return session;
        } catch (error) {
            console.error("Error logging in:", error);
            throw error;
        }

    }

    async getCurrentUser() {
        try {
            const user = await this.account.get();
            return user;
        } catch (error) {
            console.error("Error getting current user:", error);
            throw error;
        }
    }
    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.error("Error logging out:", error);
            throw error;
        }
    }
}

const authService = new AuthService();
export default authService;