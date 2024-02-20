import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { fantomTestnet } from 'viem/chains'
import { wagmiAbi } from './abi';

const account = privateKeyToAccount('0x2de6828af73897b5eef20475239c3b2ce96a1b7998430d1c0543eab240a72860')

const client = createWalletClient({
  account,
  chain: fantomTestnet,
  transport: http()
})

// const aiRating = Math.floor(Math.random() * 100) + 1;

async function main() {
  console.log("=== ENDING GAME ===");
  var endGame = await client.writeContract({
    address: '0xcF3f4bbFEf57f6fc2b347C9b62798d84ef93c1D2',
    abi: wagmiAbi,
    functionName: 'endGame',
    account,
    args: [1, 42]
  })
  console.log("TXN HASH: ", endGame);
};

main();