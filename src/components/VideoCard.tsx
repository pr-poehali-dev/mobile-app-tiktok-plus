import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

interface Video {
  id: number;
  username: string;
  description: string;
  likes: number;
  comments: number;
  shares: number;
  saves: number;
  videoUrl: string;
  userAvatar: string;
  isVerified: boolean;
}

interface VideoCardProps {
  video: Video;
}

const formatNumber = (num: number) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};

const VideoCard = ({ video }: VideoCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [likes, setLikes] = useState(video.likes);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="h-screen w-full relative flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      
      <img
        src={video.videoUrl}
        alt="Video"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute bottom-24 left-0 right-0 px-4 pb-4 z-10">
        <div className="flex items-end justify-between">
          <div className="flex-1 mr-4">
            <div className="flex items-center gap-2 mb-3">
              <Avatar className="w-10 h-10 border-2 border-white">
                <AvatarImage src={video.userAvatar} />
                <AvatarFallback>{video.username[1]}</AvatarFallback>
              </Avatar>
              <span className="text-white font-semibold text-base">
                {video.username}
              </span>
              {video.isVerified && (
                <Icon name="BadgeCheck" className="text-[#00F5FF]" size={18} />
              )}
              <Button
                size="sm"
                variant={isFollowing ? 'secondary' : 'default'}
                onClick={() => setIsFollowing(!isFollowing)}
                className={`ml-2 h-8 px-4 rounded-full font-semibold ${
                  isFollowing
                    ? 'bg-muted text-white'
                    : 'bg-[#FF006E] text-white hover:bg-[#FF006E]/90 neon-glow-pink'
                }`}
              >
                {isFollowing ? 'Подписан' : 'Подписаться'}
              </Button>
            </div>
            <p className="text-white text-sm mb-2">{video.description}</p>
            <div className="flex items-center gap-2">
              <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-[#FFBE0B] text-xs font-semibold">
                  🎁 Донаты открыты
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center">
            <button
              onClick={handleLike}
              className="flex flex-col items-center gap-1 transition-transform active:scale-90"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  isLiked
                    ? 'bg-[#FF006E] neon-glow-pink'
                    : 'bg-muted/80 backdrop-blur-sm'
                }`}
              >
                <Icon
                  name="Heart"
                  size={24}
                  className={`${isLiked ? 'fill-white text-white' : 'text-white'}`}
                />
              </div>
              <span className="text-white text-xs font-semibold">
                {formatNumber(likes)}
              </span>
            </button>

            <button className="flex flex-col items-center gap-1 transition-transform active:scale-90">
              <div className="w-12 h-12 rounded-full bg-muted/80 backdrop-blur-sm flex items-center justify-center">
                <Icon name="MessageCircle" size={24} className="text-white" />
              </div>
              <span className="text-white text-xs font-semibold">
                {formatNumber(video.comments)}
              </span>
            </button>

            <button
              onClick={() => setIsSaved(!isSaved)}
              className="flex flex-col items-center gap-1 transition-transform active:scale-90"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  isSaved
                    ? 'bg-[#FFBE0B] neon-glow-yellow'
                    : 'bg-muted/80 backdrop-blur-sm'
                }`}
              >
                <Icon
                  name="Bookmark"
                  size={24}
                  className={`${isSaved ? 'fill-black text-black' : 'text-white'}`}
                />
              </div>
              <span className="text-white text-xs font-semibold">
                {formatNumber(video.saves)}
              </span>
            </button>

            <button className="flex flex-col items-center gap-1 transition-transform active:scale-90">
              <div className="w-12 h-12 rounded-full bg-muted/80 backdrop-blur-sm flex items-center justify-center">
                <Icon name="Share2" size={24} className="text-white" />
              </div>
              <span className="text-white text-xs font-semibold">
                {formatNumber(video.shares)}
              </span>
            </button>

            <button className="flex flex-col items-center gap-1 transition-transform active:scale-90">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF006E] to-[#00F5FF] neon-glow-cyan flex items-center justify-center">
                <Icon name="Gift" size={24} className="text-white" />
              </div>
              <span className="text-white text-xs font-semibold">Подарок</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
