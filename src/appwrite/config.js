import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;
    users;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ From, To, Vechicle, NumberofPassengers, DateofRide, Createdby, Message,Rideid,Rideremail,Riderphone,Ridername}) {
        try {
            console.log(Rideid ,"inapprite")
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                Rideid,
                {
                    From,
                    To,
                    Vechicle,
                    NumberofPassengers,
                    DateofRide,
                    Createdby,
                    Message,
                    Rideid,
                    Rideremail,
                    Riderphone,
                    Ridername
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }

    async updatePost(Rideid, { From, To, Vechicle, NumberofPassengers, DateofRide, Createdby, Message,Rideremail,Riderphone,Ridername }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                Rideid,
                {
                    From,
                    To,
                    Vechicle,
                    NumberofPassengers,
                    DateofRide,
                    Createdby,
                    Message,
                    Rideremail,
                    Riderphone,
                    Ridername
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }

    async deletePost(Rideid) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                Rideid

            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }

    async getPost(id) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                id

            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error, "i",id);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }


}


const service = new Service()
export default service