import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    // db push / migrate use this
  },
  datasource: {
    url: process.env.DIRECT_URL, // use the direct (non-pooled) connection for schema changes
  },
});
