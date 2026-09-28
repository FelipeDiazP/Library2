import { MongoClient, Db } from "mongodb";
import { env } from "./env";
<<<<<<< HEAD
import dns from "dns"
=======
>>>>>>> 6ab41a4 (feat: commit inicial de la Library API)

let client: MongoClient;
let db: Db;

export const connectDB = async (): Promise<void> => {
<<<<<<< HEAD
    dns.setServers(["8.8.8.8", "8.8.4.4"])
=======
>>>>>>> 6ab41a4 (feat: commit inicial de la Library API)
    client = new MongoClient(env.mongoUri);
    await client.connect();
    db = client.db(env.mongoDBName);
    console.log(`Conectado a MongoDB (db: ${env.mongoDBName})`);
};

export const getDb = (): Db => {
    if (!db) {
        throw new Error("La base de datos no ha sido inicializada");
    }
    return db;
};
