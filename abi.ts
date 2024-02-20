export const wagmiAbi = [
    {
        inputs: [
            { internalType: "address", name: "_ai", type: "address" },
            {
                internalType: "uint256",
                name: "_gameEntryPriceInEth",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    { inputs: [], name: "Error__GameFeeNotSet", type: "error" },
    {
        inputs: [],
        name: "Error__JoinWithEitherTokensOrEthNotBoth",
        type: "error",
    },
    { inputs: [], name: "Error__TokenTransferFailed", type: "error" },
    {
        inputs: [{ internalType: "address", name: "owner", type: "address" }],
        name: "OwnableInvalidOwner",
        type: "error",
    },
    {
        inputs: [{ internalType: "address", name: "account", type: "address" }],
        name: "OwnableUnauthorizedAccount",
        type: "error",
    },
    { inputs: [], name: "ReentrancyGuardReentrantCall", type: "error" },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "gameId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "endTimestamp",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "gameEntryFee",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "prizePool",
                type: "uint256",
            },
        ],
        name: "GameCreated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address[]",
                name: "winners",
                type: "address[]",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "payoutPerWinner",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "gameId",
                type: "uint256",
            },
        ],
        name: "GameEnded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "player",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "gameId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "playerRating",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "token",
                type: "address",
            },
        ],
        name: "PlayerJoinedGame",
        type: "event",
    },
    {
        inputs: [
            { internalType: "contract IERC20", name: "_token", type: "address" },
            { internalType: "uint256", name: "_tokenEntryPrice", type: "uint256" },
        ],
        name: "addTokenToAllowedList",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "ai",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "createGame",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "_aiRating", type: "uint256" },
            { internalType: "uint256", name: "_gameId", type: "uint256" },
        ],
        name: "endGame",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "gameEntryPriceInEth",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "gameId",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "allowedToken",
                type: "address",
            },
        ],
        name: "gameTokensToEntryPrice",
        outputs: [
            { internalType: "uint256", name: "tokenEntryPrice", type: "uint256" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "contract IERC20", name: "_token", type: "address" },
            { internalType: "bool", name: "_getEthPrice", type: "bool" },
        ],
        name: "getGameFee",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "contract IERC20", name: "_token", type: "address" },
            { internalType: "uint256", name: "_amountOfToken", type: "uint256" },
            { internalType: "uint256", name: "_gameId", type: "uint256" },
            { internalType: "uint256", name: "_playerRating", type: "uint256" },
        ],
        name: "joinGame",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "prizePool",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "contract IERC20", name: "_token", type: "address" },
            { internalType: "uint256", name: "_tokenEntryPrice", type: "uint256" },
            { internalType: "uint256", name: "_ethEntryPrice", type: "uint256" },
        ],
        name: "setGameFee",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
] as const;