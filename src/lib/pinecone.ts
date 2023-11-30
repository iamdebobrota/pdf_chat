import { Pinecone } from "@pinecone-database/pinecone";

export const pinecone  = new Pinecone({
    apiKey: process.env.PINE_CONE_API_KEY!,
    environment: "us-east1-gcp",
});

