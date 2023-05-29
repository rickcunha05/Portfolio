import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const config = {
  projectId: "nfdzzv0x",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skmzO7SJeEBbfZ8pD4bl2XQrJzP8VhtlEAD6vYGkNmkRf4SPFKdIMJZzRXutbhFxYx4F3fPBZKw0RqQy3I8S2LL3gdOJ4MCzgiFcjoZev3xVbSMT2Lxq63vZP6Lq2HYHb7sJ1yZxuPqUxgK6FrYbI7hFZ8ujLKNqGntaDN0ht9qA6HicS7Bc",
};

export const client = createClient(config);

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);
