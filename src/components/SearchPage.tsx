import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const trendingHashtags = [
  { tag: 'dance', views: '12.5M', color: 'from-[#FF006E] to-[#FF4D94]' },
  { tag: 'comedy', views: '8.3M', color: 'from-[#00F5FF] to-[#4DFFFF]' },
  { tag: 'food', views: '15.2M', color: 'from-[#FFBE0B] to-[#FFD93D]' },
  { tag: 'fitness', views: '6.8M', color: 'from-[#9b87f5] to-[#B4A0FF]' },
  { tag: 'travel', views: '9.1M', color: 'from-[#FF006E] to-[#00F5FF]' },
  { tag: 'tech', views: '7.4M', color: 'from-[#00F5FF] to-[#FFBE0B]' },
];

const trendingCreators = [
  { username: '@maria_dance', followers: '2.3M', avatar: '/placeholder.svg' },
  { username: '@tech_guru', followers: '1.8M', avatar: '/placeholder.svg' },
  { username: '@food_lover', followers: '3.1M', avatar: '/placeholder.svg' },
  { username: '@fitness_pro', followers: '1.5M', avatar: '/placeholder.svg' },
];

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="h-full w-full overflow-y-auto pb-20">
      <div className="p-4">
        <div className="relative mb-6">
          <Icon
            name="Search"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            size={20}
          />
          <Input
            type="text"
            placeholder="Поиск видео, авторов..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12 bg-card border-border rounded-full text-foreground placeholder:text-muted-foreground"
          />
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">Прямые эфиры</h2>
            <Badge className="bg-[#FF006E] text-white neon-glow-pink animate-pulse">
              <div className="w-2 h-2 bg-white rounded-full mr-1.5 animate-pulse" />
              LIVE
            </Badge>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 mb-6">
            <div className="min-w-[140px] relative cursor-pointer group">
              <div className="aspect-[9/16] rounded-2xl overflow-hidden relative">
                <img src="/placeholder.svg" alt="Live" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
                <Badge className="absolute top-2 left-2 bg-[#FF006E] text-white h-6 px-2 neon-glow-pink">
                  <Icon name="Eye" size={12} className="mr-1" />
                  1.2K
                </Badge>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white font-semibold text-xs">@maria_dance</p>
                </div>
              </div>
            </div>
            <div className="min-w-[140px] relative cursor-pointer group">
              <div className="aspect-[9/16] rounded-2xl overflow-hidden relative">
                <img src="/placeholder.svg" alt="Live" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
                <Badge className="absolute top-2 left-2 bg-[#FF006E] text-white h-6 px-2 neon-glow-pink">
                  <Icon name="Eye" size={12} className="mr-1" />
                  892
                </Badge>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white font-semibold text-xs">@tech_guru</p>
                </div>
              </div>
            </div>
            <div className="min-w-[140px] relative cursor-pointer group">
              <div className="aspect-[9/16] rounded-2xl overflow-hidden relative">
                <img src="/placeholder.svg" alt="Live" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
                <Badge className="absolute top-2 left-2 bg-[#FF006E] text-white h-6 px-2 neon-glow-pink">
                  <Icon name="Eye" size={12} className="mr-1" />
                  2.5K
                </Badge>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white font-semibold text-xs">@fitness_pro</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">Трендовые хештеги</h2>
            <Icon name="TrendingUp" className="text-[#FF006E]" size={20} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {trendingHashtags.map((item) => (
              <div
                key={item.tag}
                className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} bg-opacity-10 backdrop-blur-sm border border-border hover:scale-105 transition-transform cursor-pointer`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Hash" size={20} className="text-white" />
                  <span className="text-white font-semibold text-lg">{item.tag}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Eye" size={14} className="text-white/70" />
                  <span className="text-white/70 text-sm">{item.views} просмотров</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">Популярные авторы</h2>
            <Icon name="Flame" className="text-[#FFBE0B]" size={20} />
          </div>
          <div className="space-y-3">
            {trendingCreators.map((creator) => (
              <div
                key={creator.username}
                className="flex items-center justify-between p-4 bg-card rounded-2xl border border-border hover:border-[#FF006E] transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF006E] to-[#00F5FF] p-0.5">
                    <img
                      src={creator.avatar}
                      alt={creator.username}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">{creator.username}</p>
                    <p className="text-muted-foreground text-sm">{creator.followers} подписчиков</p>
                  </div>
                </div>
                <Badge className="bg-[#FF006E] text-white hover:bg-[#FF006E]/90 neon-glow-pink">
                  Подписаться
                </Badge>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">Топ донатеры</h2>
            <Icon name="Trophy" className="text-[#FFBE0B]" size={20} />
          </div>
          <div className="space-y-3">
            {[{ username: '@generous_king', donated: '45,000₽', avatar: '/placeholder.svg' },
              { username: '@super_fan', donated: '32,500₽', avatar: '/placeholder.svg' },
              { username: '@diamond_hand', donated: '28,900₽', avatar: '/placeholder.svg' }].map((donor, index) => (
              <div
                key={donor.username}
                className="flex items-center justify-between p-4 bg-gradient-to-r from-[#FFBE0B]/10 to-transparent rounded-2xl border border-[#FFBE0B]/30"
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFBE0B] to-[#FF006E] p-0.5">
                      <img
                        src={donor.avatar}
                        alt={donor.username}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#FFBE0B] border-2 border-background flex items-center justify-center">
                      <span className="text-xs font-bold text-black">{index + 1}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">{donor.username}</p>
                    <p className="text-[#FFBE0B] text-sm font-bold">{donor.donated}</p>
                  </div>
                </div>
                <Icon name="Gift" className="text-[#FFBE0B]" size={24} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;