'use client';

import { useState } from 'react';
import { AIRDROPS, Airdrop } from '@/data';
import { AirdropCard } from '@/components/AirdropCard';
import { AirdropModal } from '@/components/AirdropModal';

export default function Home() {
  const [selectedAirdrop, setSelectedAirdrop] = useState<Airdrop | null>(null);

  return (
    <div className="pb-20">
      <header className="py-16 md:py-24 max-w-2xl">
        <span className="text-indigo-500 font-semibold tracking-wider text-xs uppercase mb-4 block">Alpha Season is Here</span>
        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
          Hunt smarter, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 animate-pulse">not harder.</span>
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
          A curated dashboard for the most promising DeFi opportunities. Track your engagement and maximize your claim eligibility.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {AIRDROPS.map((airdrop) => (
          <AirdropCard
            key={airdrop.id}
            airdrop={airdrop}
            onClick={() => setSelectedAirdrop(airdrop)}
          />
        ))}
      </div>

      {/* Modal - Conditionally Rendered */}
      {selectedAirdrop && (
        <AirdropModal
          airdrop={selectedAirdrop}
          onClose={() => setSelectedAirdrop(null)}
        />
      )}
    </div>
  );
}
