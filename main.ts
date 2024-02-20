import { createWalletClient, createPublicClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { fantomTestnet } from 'viem/chains'
// import { publicClient } from './client'
import { wagmiAbi } from './abi';
import { setTimeout } from "timers/promises";
import { OpenAI } from "openai";

require('dotenv').config()
// console.log(process.env);

"use server";

// for testing only - PK should be imported from .env
const account = privateKeyToAccount(process.env.AI_WALLET as `0x${string}`)

// === WALLET CLIENT: for creating and ending games
const client = createWalletClient({
  account,
  chain: fantomTestnet,
  transport: http()
})

// === CREATE GAME: calls createGame() on our contract on Fantom testnet
async function createGame() {
  var createGame = await client.writeContract({
    address: '0x4e2dd804E4f7CCEbaDa82531d52D8F998541c997',
    abi: wagmiAbi,
    functionName: 'createGame',
    account,
  })
  console.log("========= GAME CREATED ==========")
  console.log("=== TXN HASH: ", createGame, " ==");
  console.log("=================================");
};

createGame();

// === OPEN AI: setup with API key ===
const openai = new OpenAI({
  apiKey: process.env.NEXT_OPENAI_API_KEY,
});

// === PUBLIC CLIENT: for reading our contracts gameId
const publicClient = createPublicClient({
  chain: fantomTestnet,
  transport: http()
})

// this is a placeholder for fetching the AI rating
// const aiRating = Math.floor(Math.random() * 100) + 1;

async function endGame() {
  // await setTimeout(600000); // wait 10 minutes
  await setTimeout(20000); // wait 20 seconds

  const gameId = await publicClient.readContract({
    address: '0x4e2dd804E4f7CCEbaDa82531d52D8F998541c997',
    abi: wagmiAbi,
    functionName: 'gameId',
  })

  console.log("The current gameId is ", gameId.toString());
  const gameIdForImage = gameId.toString(); // gameId returns as '12n', toString() makes it just '12' for passing to ChatGPT

  const url = "https://my-r8r-bucket.s3.amazonaws.com/" + gameIdForImage + ".png";
  console.log(url);

  const response = await openai.chat.completions.create({
    model: "gpt-4-vision-preview",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            // text: "Based on this image, can you assign it a number 1-100 based on a completely arbitrary and random set of metrics?",
            text: "Can you assign an arbitrary number to this image between 1 and 100? Just return the number with no text."
            // text: "Give me a random number between 1 and 100. Just return the number with no text.",
          },
          {
            type: "image_url",
            image_url: {
              url: url,
            },
          },
        ],
      },
    ],
  });

  console.log("GPT4 Response: ", response.choices);

  console.log("GPT4 Random Number: ", response.choices[0].message.content);
  const aiRating = response.choices[0].message.content?.toString();

  console.log("========== ENDING GAME ==========");
  console.log("=== GameId: ", gameId, " ===");
  var endGame = await client.writeContract({
    address: '0x4e2dd804E4f7CCEbaDa82531d52D8F998541c997',
    abi: wagmiAbi,
    functionName: 'endGame',
    account,
    args: [gameId, aiRating!] // ends the game just created above
  })
  console.log("=== TXN HASH: ", endGame, " =====");
  console.log("=== aiRating: ", aiRating, " =====");
  console.log("=================================");
};

endGame();