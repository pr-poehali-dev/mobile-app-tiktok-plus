import { useState, useRef, useEffect } from 'react';
import VideoCard from './VideoCard';

const mockVideos = [
  {
    id: 1,
    username: '@maria_dance',
    description: 'Новый танец на трендовый хит 🔥 #dance #trend',
    likes: 124500,
    comments: 3420,
    shares: 892,
    saves: 2341,
    videoUrl: '/placeholder.svg',
    userAvatar: '/placeholder.svg',
    isVerified: true,
  },
  {
    id: 2,
    username: '@tech_guru',
    description: 'Топ 5 лайфхаков для iPhone в 2024 📱 #tech #lifehack',
    likes: 89200,
    comments: 1823,
    shares: 456,
    saves: 1892,
    videoUrl: '/placeholder.svg',
    userAvatar: '/placeholder.svg',
    isVerified: true,
  },
  {
    id: 3,
    username: '@food_lover',
    description: 'Готовлю идеальную пасту за 10 минут 🍝 #cooking #food',
    likes: 156300,
    comments: 4521,
    shares: 1234,
    saves: 3456,
    videoUrl: '/placeholder.svg',
    userAvatar: '/placeholder.svg',
    isVerified: false,
  },
  {
    id: 4,
    username: '@fitness_pro',
    description: 'Тренировка для идеального пресса 💪 #fitness #workout',
    likes: 203400,
    comments: 5678,
    shares: 2341,
    saves: 4567,
    videoUrl: '/placeholder.svg',
    userAvatar: '/placeholder.svg',
    isVerified: true,
  },
  {
    id: 5,
    username: '@travel_world',
    description: 'Самые красивые места Бали 🌴 #travel #bali',
    likes: 312500,
    comments: 8923,
    shares: 4521,
    saves: 7823,
    videoUrl: '/placeholder.svg',
    userAvatar: '/placeholder.svg',
    isVerified: true,
  },
];

const VideoFeed = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      if (currentIndex < mockVideos.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }

    if (touchStart - touchEnd < -100) {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
  };

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    if (e.deltaY > 0 && currentIndex < mockVideos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (e.deltaY < 0 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => container.removeEventListener('wheel', handleWheel);
    }
  }, [currentIndex]);

  return (
    <div
      ref={containerRef}
      className="h-full w-full relative overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="h-full transition-transform duration-300 ease-out"
        style={{ transform: `translateY(-${currentIndex * 100}vh)` }}
      >
        {mockVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default VideoFeed;
