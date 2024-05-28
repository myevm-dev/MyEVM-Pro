import { Suspense, useEffect } from 'react';

import * as Sentry from '@sentry/react';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { Route, Routes, Navigate } from 'react-router-dom';
import Footer from 'shared/lib/components/common/Footer';
import { Text } from 'shared/lib/components/common/Typography';
import { wagmiConfig } from 'shared/lib/components/WagmiConfig';
import { PRIVACY_POLICY_URL, TERMS_OF_SERVICE_URL } from 'shared/lib/data/constants/Values';
import ScrollToTop from 'shared/lib/util/ScrollToTop';
import { usePublicClient, WagmiProvider, serialize, deserialize } from 'wagmi';

import AppBody from './components/common/AppBody';
import Header from './components/header/Header';
import AdvancedPage from './pages/AdvancedPage';
import ImportBoostPage from './pages/boost/ImportBoostPage';
import ManageBoostPage from './pages/boost/ManageBoostPage';
import BoostPage from './pages/BoostPage';
import LeaderboardPage from './pages/LeaderboardPage';
import MarketsPage from './pages/MarketsPage';
import PortfolioPage from './pages/PortfolioPage';

const CONNECT_WALLET_CHECKBOXES = [
  <Text size='M' weight='regular'>
    I have read, understood, and agreed to the{' '}
    <a
      className='underline text-green-600 hover:text-green-700'
      href={TERMS_OF_SERVICE_URL}
      target='_blank'
      rel='noreferrer'
    >
      Terms of Service
    </a>{' '}
    and{' '}
    <a
      className='underline text-green-600 hover:text-green-700'
      href={PRIVACY_POLICY_URL}
      target='_blank'
      rel='noreferrer'
    >
      Privacy Policy
    </a>
    .
  </Text>,
  <Text>I will not violate federal, state, local, or international laws.</Text>,
  <Text>I acknowledge that trading may result in loss of funds.</Text>,
];

function AppBodyWrapper() {
  const publicClient = usePublicClient();

  useEffect(() => {
    if (!publicClient) return;
    Sentry.setTag('chain_name', publicClient.chain.name);
  }, [publicClient]);

  return (
    <>
      <ScrollToTop />
      <AppBody>
        <Header checkboxes={CONNECT_WALLET_CHECKBOXES} />
        <main className='flex-grow'>
          <Routes>
            <Route path='/portfolio' element={<PortfolioPage />} />
            <Route path='/markets' element={<MarketsPage />} />
            <Route path='/leaderboard' element={<LeaderboardPage />} />
            <Route path='/boost' element={<BoostPage />} />
            <Route path='/boost/import/:tokenId' element={<ImportBoostPage />} />
            <Route path='/boost/manage/:nftTokenId' element={<ManageBoostPage />} />
            <Route path='/borrow' element={<AdvancedPage />} />
            <Route path='/' element={<Navigate replace to='/markets' />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </main>
        <Footer />
      </AppBody>
    </>
  );
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 365 * 24 * 60 * 60 * 1_000, // 7 days
    },
  },
});

const persister = createSyncStoragePersister({
  serialize,
  storage: window.localStorage,
  deserialize,
});

function App() {
  return (
    <Suspense fallback={null}>
      <WagmiProvider config={wagmiConfig}>
        <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
          <AppBodyWrapper />
        </PersistQueryClientProvider>
      </WagmiProvider>
    </Suspense>
  );
}

export default App;
