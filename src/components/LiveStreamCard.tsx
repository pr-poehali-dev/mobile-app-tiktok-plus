import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

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
  isLive?: boolean;
  viewers?: number;
}

interface LiveStreamCardProps {
  video: Video;
}

interface Comment {
  id: number;
  username: string;
  text: string;
  avatar: string;
}

interface Gift {
  id: number;
  name: string;
  icon: string;
  price: number;
}

const gifts: Gift[] = [
  { id: 1, name: 'Сердце', icon: '❤️', price: 50 },
  { id: 2, name: 'Роза', icon: '🌹', price: 100 },
  { id: 3, name: 'Звезда', icon: '⭐', price: 200 },
  { id: 4, name: 'Алмаз', icon: '💎', price: 500 },
  { id: 5, name: 'Корона', icon: '👑', price: 1000 },
  { id: 6, name: 'Ракета', icon: '🚀', price: 2000 },
];

const LiveStreamCard = ({ video }: LiveStreamCardProps) => {
  const [viewers, setViewers] = useState(video.viewers || 1234);
  const [likes, setLikes] = useState(video.likes);
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, username: '@anna_fan', text: 'Привет! 👋', avatar: '/placeholder.svg' },
    { id: 2, username: '@tech_lover', text: 'Классный эфир!', avatar: '/placeholder.svg' },
    { id: 3, username: '@music_star', text: 'Продолжай в том же духе! 🔥', avatar: '/placeholder.svg' },
  ]);
  const [newComment, setNewComment] = useState('');
  const [showGifts, setShowGifts] = useState(false);
  const [earnings, setEarnings] = useState(3450);
  const [isLiked, setIsLiked] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const viewerInterval = setInterval(() => {
      setViewers((prev) => prev + Math.floor(Math.random() * 10) - 3);
    }, 3000);

    const commentInterval = setInterval(() => {
      const mockComments = [
        'Супер контент! 🎉',
        'Ты лучший!',
        'Продолжай! 💪',
        'Отличный эфир!',
        'Хочу больше видео! 🔥',
      ];
      const newMockComment: Comment = {
        id: Date.now(),
        username: `@user${Math.floor(Math.random() * 1000)}`,
        text: mockComments[Math.floor(Math.random() * mockComments.length)],
        avatar: '/placeholder.svg',
      };
      setComments((prev) => [...prev.slice(-20), newMockComment]);
    }, 5000);

    return () => {
      clearInterval(viewerInterval);
      clearInterval(commentInterval);
    };
  }, []);

  const handleSendComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now(),
        username: '@my_profile',
        text: newComment,
        avatar: '/placeholder.svg',
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  const handleSendGift = (gift: Gift) => {
    setEarnings(earnings + gift.price);
    const giftComment: Comment = {
      id: Date.now(),
      username: '@viewer_generous',
      text: `отправил ${gift.icon} ${gift.name}`,
      avatar: '/placeholder.svg',
    };
    setComments([...comments, giftComment]);
    setShowGifts(false);
  };

  const handleLike = () => {
    if (!isLiked) {
      setLikes(likes + 1);
      setIsLiked(true);
      setTimeout(() => setIsLiked(false), 1000);
    }
  };

  return (
    <div className="h-screen w-full relative flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      
      <img
        src={video.videoUrl}
        alt="Live Stream"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute top-4 left-4 right-4 flex items-start justify-between z-20">
        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12 border-2 border-white ring-2 ring-[#FF006E]">
            <AvatarImage src={video.userAvatar} />
            <AvatarFallback>{video.username[1]}</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-base">{video.username}</span>
              {video.isVerified && (
                <Icon name="BadgeCheck" className="text-[#00F5FF]" size={16} />
              )}
            </div>
            <div className="flex items-center gap-2 mt-1">
              <Badge className="bg-[#FF006E] text-white h-6 px-2 neon-glow-pink animate-pulse">
                <div className="w-2 h-2 bg-white rounded-full mr-1.5 animate-pulse" />
                LIVE
              </Badge>
              <Badge className="bg-black/60 backdrop-blur-sm text-white h-6 px-2">
                <Icon name="Eye" size={12} className="mr-1" />
                {viewers.toLocaleString()}
              </Badge>
            </div>
          </div>
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
      </div>

      <div className="absolute top-24 right-4 flex flex-col gap-3 z-20">
        <button
          onClick={handleLike}
          className="flex flex-col items-center gap-1 transition-transform active:scale-90"
        >
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm ${
              isLiked
                ? 'bg-[#FF006E] neon-glow-pink scale-125'
                : 'bg-black/60'
            }`}
          >
            <Icon
              name="Heart"
              size={24}
              className={`${isLiked ? 'fill-white text-white' : 'text-white'} transition-all`}
            />
          </div>
          <span className="text-white text-xs font-semibold drop-shadow-lg">
            {likes.toLocaleString()}
          </span>
        </button>

        <button
          onClick={() => setShowGifts(!showGifts)}
          className="flex flex-col items-center gap-1 transition-transform active:scale-90"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF006E] to-[#FFBE0B] flex items-center justify-center neon-glow-yellow">
            <Icon name="Gift" size={24} className="text-white" />
          </div>
          <span className="text-white text-xs font-semibold drop-shadow-lg">Подарок</span>
        </button>

        <button className="flex flex-col items-center gap-1 transition-transform active:scale-90">
          <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center">
            <Icon name="Share2" size={24} className="text-white" />
          </div>
          <span className="text-white text-xs font-semibold drop-shadow-lg">Поделиться</span>
        </button>
      </div>

      <div className="absolute top-24 left-4 right-20 z-20">
        <div className="bg-gradient-to-r from-[#FF006E]/20 to-[#FFBE0B]/20 backdrop-blur-md border border-[#FFBE0B] rounded-2xl p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="DollarSign" size={20} className="text-[#FFBE0B]" />
              <span className="text-white font-bold text-lg">{earnings.toLocaleString()}₽</span>
            </div>
            <Badge className="bg-green-500/30 text-green-300 border-green-500">
              <Icon name="TrendingUp" size={12} className="mr-1" />
              +{Math.floor((earnings / 3450) * 100)}%
            </Badge>
          </div>
        </div>
      </div>

      <div className="absolute bottom-24 left-0 right-0 px-4 pb-4 z-20">
        <ScrollArea className="h-48 mb-4">
          <div className="space-y-2">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="bg-black/50 backdrop-blur-sm rounded-2xl px-3 py-2 inline-block max-w-[80%] animate-fade-in"
              >
                <span className="text-[#00F5FF] font-semibold text-sm mr-2">
                  {comment.username}
                </span>
                <span className="text-white text-sm">{comment.text}</span>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="flex items-center gap-2">
          <div className="flex-1 flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-full px-4 py-3">
            <Input
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendComment()}
              placeholder="Написать комментарий..."
              className="flex-1 bg-transparent border-0 text-white placeholder:text-white/50 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 h-auto"
            />
            <Button
              size="sm"
              onClick={handleSendComment}
              disabled={!newComment.trim()}
              className="bg-[#FF006E] hover:bg-[#FF006E]/90 text-white rounded-full px-4 neon-glow-pink disabled:opacity-50"
            >
              <Icon name="Send" size={18} />
            </Button>
          </div>
        </div>
      </div>

      {showGifts && (
        <div className="absolute bottom-44 left-4 right-4 bg-card/95 backdrop-blur-lg rounded-3xl p-4 border border-border z-30 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-foreground font-bold text-lg">Отправить подарок</h3>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setShowGifts(false)}
              className="h-8 w-8 p-0 rounded-full"
            >
              <Icon name="X" size={16} />
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {gifts.map((gift) => (
              <button
                key={gift.id}
                onClick={() => handleSendGift(gift)}
                className="flex flex-col items-center gap-2 p-3 bg-muted rounded-2xl hover:bg-muted/80 hover:scale-105 transition-all border border-border hover:border-[#FF006E]"
              >
                <span className="text-4xl">{gift.icon}</span>
                <span className="text-foreground font-semibold text-sm">{gift.name}</span>
                <Badge className="bg-[#FFBE0B] text-black hover:bg-[#FFBE0B]">
                  {gift.price}₽
                </Badge>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveStreamCard;
