export const prerender = false;

import { Client, Databases } from 'appwrite';

export const client = new Client();
export const databases = new Databases(client)

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66550e0f0028d923441a');