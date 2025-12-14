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
  // --- LIGNE 1 : LES INCONTOURNABLES (Cash Machine) ---
  {
    id: 'base-mainnet',
    name: 'Base',
    category: 'L2 Coinbase',
    potential: '$$$',
    status: 'Hype Totale',
    description: 'Le réseau n°1 du moment. Frais quasi nuls ($0.01).',
    tasks: [
      {
        id: 't1',
        title: 'STEP 1 : Bridge ETH vers Base (Orbiter)',
        link: 'https://www.orbiter.finance/?channel=0x8d7e6a1fB35e27246272590281B9B2f21758C354'
      },
      {
        id: 't2',
        title: 'STEP 2 : Acheter un token sur Aerodrome',
        link: 'https://aerodrome.finance/'
      },
      {
        id: 't3',
        title: 'STEP 3 : Minter un NFT "Onchain Summer"',
        link: 'https://onchain.summer.xyz/'
      }
    ]
  },
  {
    id: 'scroll-mainnet',
    name: 'Scroll',
    category: 'Layer 2 (ZK)',
    potential: '$$$',
    status: 'Priorité Haute',
    description: 'Snapshot imminent. Il faut du volume on-chain.',
    tasks: [
      {
        id: 't1',
        title: 'STEP 1 : Bridge via Owlto (Moins cher)',
        link: 'https://owlto.finance/?ref=0x8d7e6a1fB35e27246272590281B9B2f21758C354'
      },
      {
        id: 't2',
        title: 'STEP 2 : Sécuriser (Bridge Officiel 1 fois)',
        link: 'https://scroll.io/bridge'
      },
      {
        id: 't3',
        title: 'STEP 3 : Prêter sur Aave (Lending)',
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
    description: 'Soutenu par ConsenSys (MetaMask). Très solide.',
    tasks: [
      {
        id: 't1',
        title: 'STEP 1 : Bridge Rapide vers Linea (Owlto)',
        link: 'https://owlto.finance/?ref=0x8d7e6a1fB35e27246272590281B9B2f21758C354'
      },
      {
        id: 't2',
        title: 'STEP 2 : Swap ETH/USDC (SyncSwap)',
        link: 'https://syncswap.xyz/'
      },
      {
        id: 't3',
        title: 'STEP 3 : Lending sur Mendi Finance',
        link: 'https://mendi.finance/'
      }
    ]
  },

  // --- LIGNE 2 : LES PARIS FUTURS (Investissement) ---
  {
    id: 'zksync-era',
    name: 'ZkSync Era',
    category: 'Layer 2',
    potential: '$$',
    status: 'Final Stage',
    description: 'Le géant des L2. Maximisez le nombre de contrats uniques.',
    tasks: [
      {
        id: 't1',
        title: 'STEP 1 : Bridge via Orbiter (Points)',
        link: 'https://www.orbiter.finance/?channel=0x8d7e6a1fB35e27246272590281B9B2f21758C354'
      },
      {
        id: 't2',
        title: 'STEP 2 : Swap sur Maverick',
        link: 'https://mav.xyz/'
      },
      {
        id: 't3',
        title: 'STEP 3 : Minter un NFT (Tevaera)',
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
    description: 'Le "Solana Killer". Soyez prêt pour le lancement.',
    tasks: [
      {
        id: 't1',
        title: 'Préparer des ETH sur Mainnet (Via Owlto)',
        link: 'https://owlto.finance/?ref=0x8d7e6a1fB35e27246272590281B9B2f21758C354'
      },
      {
        id: 't2',
        title: 'Rejoindre le Discord',
        link: 'https://discord.gg/monad'
      },
      {
        id: 't3',
        title: 'Suivre sur Twitter (X)',
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
    description: 'Idéal pour les petits budgets. Très facile à farmer.',
    tasks: [
      {
        id: 't1',
        title: 'STEP 1 : Bridge vers Zora (Owlto)',
        link: 'https://owlto.finance/?ref=0x8d7e6a1fB35e27246272590281B9B2f21758C354'
      },
      {
        id: 't2',
        title: 'STEP 2 : Minter un NFT gratuit',
        link: 'https://zora.co/'
      },
      {
        id: 't3',
        title: 'STEP 3 : Créer votre profil Zora',
        link: 'https://zora.co/create'
      }
    ]
  }
];
