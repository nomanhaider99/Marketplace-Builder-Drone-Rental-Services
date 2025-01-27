import { createClient } from "next-sanity";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2021-08-31',
});

const deleteOrderData = async () => {
  try {
    const result = await client.delete({
      query: '*[_type == "order"]',
    });

    console.log('Deleted orders:', result);
  } catch (error) {
    console.error('Error deleting orders:', error);
  }
};

deleteOrderData();
