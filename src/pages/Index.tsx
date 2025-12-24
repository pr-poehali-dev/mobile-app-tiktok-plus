import { useState } from 'react';
import VideoFeed from '@/components/VideoFeed';
import BottomNav from '@/components/BottomNav';
import SearchPage from '@/components/SearchPage';
import UploadPage from '@/components/UploadPage';
import NotificationsPage from '@/components/NotificationsPage';
import ProfilePage from '@/components/ProfilePage';

type Page = 'home' | 'search' | 'upload' | 'notifications' | 'profile';

const Index = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <VideoFeed />;
      case 'search':
        return <SearchPage />;
      case 'upload':
        return <UploadPage />;
      case 'notifications':
        return <NotificationsPage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <VideoFeed />;
    }
  };

  return (
    <div className="h-screen w-screen bg-background overflow-hidden relative">
      {renderPage()}
      <BottomNav currentPage={currentPage} onPageChange={setCurrentPage} />
    </div>
  );
};

export default Index;