export interface Task {
  id: string;
  title: string;
  link: string;
}

export interface Airdrop {
  id: string;
  name: string;
  category: string;
  potential: string;
  description: string;
  status: string;
  tasks: Task[];
}

export const AIRDROPS: Airdrop[] = [
  // --- ROW 1 : MUST DO (Cash Machines) ---
  {
    id: 'base-mainnet',
    name: 'Base',
    category: 'L2 Coinbase',
    potential: '$$$',
    status: 'Max Hype',
    description: 'The #1 network right now. Near-zero fees ($0.01).',
    tasks: [
      {
        id: 't1',
        title: 'STEP 1: Bridge ETH to Base (Orbiter)',
        link: 'https://www.orbiter.finance/?channel=0x8d7e6a1fB35e27246272590281B9B2f21758C354'
      },
      {
        id: 't2',
        title: 'STEP 2: Buy a token on Aerodrome',
        link: 'https://aerodrome.finance/'
      },
      {
        id: 't3',
        title: 'STEP 3: Mint an "Onchain Summer" NFT',
        link: 'https://onchain.summer.xyz/'
      }
    ]
  },
  {
    id: 'scroll-mainnet',
    name: 'Scroll',
    category: 'Layer 2 (ZK)',
    potential: '$$$',
    status: 'High Priority',
    description: 'Snapshot imminent. On-chain volume required.',
    tasks: [
      {
        id: 't1',
        title: 'STEP 1: Bridge via Owlto (Cheaper)',
        link: 'https://owlto.finance/?ref=0x8d7e6a1fB35e27246272590281B9B2f21758C354'
      },
      {
        id: 't2',
        title: 'STEP 2: Secure (Official Bridge once)',
        link: 'https://scroll.io/bridge'
      },
      {
        id: 't3',
        title: 'STEP 3: Lend on Aave',
        link: 'https://app.aave.com/?marketName=proto_scroll_v3'
      }
    ]
  },
  {
    id: 'linea-mainnet',
    name: 'Linea',
    category: 'Layer 2',
    potential: '$$$$',
    status: 'Linea Surge',
    description: 'Backed by ConsenSys (MetaMask). Very solid.',
    tasks: [
      {
        id: 't1',
        title: 'STEP 1: Fast Bridge to Linea (Owlto)',
        link: 'https://owlto.finance/?ref=0x8d7e6a1fB35e27246272590281B9B2f21758C354'
      },
      {
        id: 't2',
        title: 'STEP 2: Swap ETH/USDC (SyncSwap)',
        link: 'https://syncswap.xyz/'
      },
      {
        id: 't3',
        title: 'STEP 3: Lending on Mendi Finance',
        link: 'https://mendi.finance/'
      }
    ]
  },

  // --- ROW 2 : FUTURE BETS (Investment) ---
  {
    id: 'zksync-era',
    name: 'ZkSync Era',
    category: 'Layer 2',
    potential: '$$',
    status: 'Final Stage',
    description: 'The L2 giant. Maximize unique contract interactions.',
    tasks: [
      {
        id: 't1',
        title: 'STEP 1: Bridge via Orbiter (Points)',
        link: 'https://www.orbiter.finance/?channel=0x8d7e6a1fB35e27246272590281B9B2f21758C354'
      },
      {
        id: 't2',
        title: 'STEP 2: Swap on Maverick',
        link: 'https://mav.xyz/'
      },
      {
        id: 't3',
        title: 'STEP 3: Mint an NFT (Tevaera)',
        link: 'https://tevaera.com/'
      }
    ]
  },
  {
    id: 'monad-social',
    name: 'Monad',
    category: 'Layer 1',
    potential: '$$$$$',
    status: 'Early Access',
    description: 'The "Solana Killer". Be ready for launch.',
    tasks: [
      {
        id: 't1',
        title: 'Prepare ETH on Mainnet (Via Owlto)',
        link: 'https://owlto.finance/?ref=0x8d7e6a1fB35e27246272590281B9B2f21758C354'
      },
      {
        id: 't2',
        title: 'Join Discord',
        link: 'https://discord.gg/monad'
      },
      {
        id: 't3',
        title: 'Follow on Twitter (X)',
        link: 'https://twitter.com/monad_xyz'
      }
    ]
  },
  {
    id: 'zora-nft',
    name: 'Zora',
    category: 'NFT Chain',
    potential: '$$',
    status: 'Low Cost',
    description: 'Ideal for small budgets. Very easy to farm.',
    tasks: [
      {
        id: 't1',
        title: 'STEP 1: Bridge to Zora (Owlto)',
        link: 'https://owlto.finance/?ref=0x8d7e6a1fB35e27246272590281B9B2f21758C354'
      },
      {
        id: 't2',
        title: 'STEP 2: Mint a free NFT',
        link: 'https://zora.co/'
      },
      {
        id: 't3',
        title: 'STEP 3: Create your Zora profile',
        link: 'https://zora.co/create'
      }
    ]
  }
];
