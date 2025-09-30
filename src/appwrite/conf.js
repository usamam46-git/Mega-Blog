import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.APPWRITE_URL)
            .setProject(config.APPWRITE_PROJECT_ID);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                config.APPWRITE_DATABASE_ID,
                config.APPWRITE_TABLE_ID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            throw new Error(error);

        }
    }
    async updatePost(slug, { title, content, featuredImage, status}) {
        try {
            return await this.databases.updateDocument(
                config.APPWRITE_DATABASE_ID,
                config.APPWRITE_TABLE_ID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            throw new Error(error);

        }
    }
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                config.APPWRITE_DATABASE_ID,
                config.APPWRITE_TABLE_ID,
                slug
            )
            return true;
        } catch (error) {
            console.log("Error encountered in deleteDocument")
            return false
        }
    }
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                config.APPWRITE_DATABASE_ID,
                config.APPWRITE_TABLE_ID,
                slug
            )

        } catch (error) {
            console.log("Error encountered in getPost")
            return false;
        }
    }
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                config.APPWRITE_DATABASE_ID,
                config.APPWRITE_TABLE_ID,
                queries
            )
        } catch (error) {
            console.log(error);
            return false
        }
    }
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.APPWRITE_BUCKET_ID,
                ID.unique(),
                file
            )
            
        } catch (error) {
            console.log("Appwrite service error.")
        }
    }
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                config.APPWRITE_BUCKET_ID,
                fileId
            )
        } catch (error) {
            console.log("Appwrite service deleteFile error", error);
            return false
        }
    }
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            config.APPWRITE_BUCKET_ID,
            fileId
        )
    }
}
const Service = new Service();
export default Service
