import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AirQualityDashboard } from './components/AirQualityDashboard';
import { ExploreFeatures } from './components/ExploreFeatures';
import { StorySection } from './components/StorySection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { PledgeModal } from './components/PledgeModal';
import { DetailModal } from './components/DetailModal';
import { CausesAndEffectsPage } from './components/CausesAndEffectsPage';
import { PreventionMethodsPage } from './components/PreventionMethodsPage';
import { AwarenessCampaignsPage } from './components/AwarenessCampaignsPage';
import { StudentCommunityPage } from './components/StudentCommunityPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<
    'home' | 'causes' | 'prevention' | 'campaigns' | 'community'
  >('home');
  const [language, setLanguage] = useState<'en' | 'te'>('en');
  const [isPledgeOpen, setIsPledgeOpen] = useState(false);
  const [activeFeatureId, setActiveFeatureId] = useState<string | null>(null);

  const handleExploreAQI = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const elem = document.getElementById('air-quality');
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const elem = document.getElementById('air-quality');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreMore = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const elem = document.getElementById('explore');
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const elem = document.getElementById('explore');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectFeature = (id: string) => {
    if (id === 'causes') {
      setCurrentPage('causes');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (id === 'prevention') {
      setCurrentPage('prevention');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (id === 'campaigns') {
      setCurrentPage('campaigns');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (id === 'community') {
      setCurrentPage('community');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setActiveFeatureId(id);
    }
  };

  return (
    <div className="bg-[#030d0a] text-gray-200 font-sans antialiased selection:bg-[#00e599] selection:text-black min-h-screen flex flex-col">
      {/* Navigation */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        language={language}
        setLanguage={setLanguage}
        onOpenPledge={() => setIsPledgeOpen(true)}
        onSelectFeature={handleSelectFeature}
      />

      {/* Main Content: Switches between all 5 Core Pages */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            {/* Page 1: Hero Section */}
            <Hero
              language={language}
              onExploreAQI={handleExploreAQI}
              onExploreMore={handleExploreMore}
            />

            {/* Current Air Quality Station & Gauge */}
            <AirQualityDashboard
              language={language}
              onTakeAction={() => handleSelectFeature('prevention')}
            />

            {/* Explore More 4-Card Feature Grid */}
            <ExploreFeatures
              language={language}
              onSelectFeature={handleSelectFeature}
            />

            {/* Together For Cleaner Air Story Section */}
            <StorySection
              language={language}
              onOpenPledge={() => setIsPledgeOpen(true)}
              onExploreCampaigns={() => handleSelectFeature('campaigns')}
            />

            {/* Call to Action Banner */}
            <CtaBanner
              language={language}
              onOpenPledge={() => setIsPledgeOpen(true)}
            />
          </>
        )}

        {currentPage === 'causes' && (
          /* Page 2: Causes & Effects Dedicated Page */
          <CausesAndEffectsPage
            language={language}
            onNavigateHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectFeature={handleSelectFeature}
            onOpenPledge={() => setIsPledgeOpen(true)}
          />
        )}

        {currentPage === 'prevention' && (
          /* Page 3: Prevention Methods Dedicated Page */
          <PreventionMethodsPage
            language={language}
            onNavigateHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateCampaigns={() => handleSelectFeature('campaigns')}
            onOpenPledge={() => setIsPledgeOpen(true)}
          />
        )}

        {currentPage === 'campaigns' && (
          /* Page 4: Awareness Campaigns Dedicated Page */
          <AwarenessCampaignsPage
            language={language}
            onNavigateHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigatePrevention={() => handleSelectFeature('prevention')}
            onOpenPledge={() => setIsPledgeOpen(true)}
          />
        )}

        {currentPage === 'community' && (
          /* Page 5: Student Community Dedicated Page */
          <StudentCommunityPage
            language={language}
            onNavigateHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenPledge={() => setIsPledgeOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        language={language}
        onNavigate={(page) => {
          setCurrentPage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectFeature={handleSelectFeature}
        onOpenPledge={() => setIsPledgeOpen(true)}
      />

      {/* Interactive Clean Air Pledge Modal */}
      <PledgeModal
        isOpen={isPledgeOpen}
        onClose={() => setIsPledgeOpen(false)}
        language={language}
      />

      {/* Deep-Dive Feature Detail Modal */}
      <DetailModal
        featureId={activeFeatureId}
        onClose={() => setActiveFeatureId(null)}
        language={language}
        onOpenPledge={() => setIsPledgeOpen(true)}
      />
    </div>
  );
}
