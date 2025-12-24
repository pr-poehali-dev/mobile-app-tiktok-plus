import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const userVideos = [
  { id: 1, thumbnail: '/placeholder.svg', views: '123K', likes: '12.5K' },
  { id: 2, thumbnail: '/placeholder.svg', views: '89K', likes: '8.9K' },
  { id: 3, thumbnail: '/placeholder.svg', views: '156K', likes: '15.6K' },
  { id: 4, thumbnail: '/placeholder.svg', views: '203K', likes: '20.3K' },
  { id: 5, thumbnail: '/placeholder.svg', views: '312K', likes: '31.2K' },
  { id: 6, thumbnail: '/placeholder.svg', views: '98K', likes: '9.8K' },
];

const savedVideos = [
  { id: 7, thumbnail: '/placeholder.svg', views: '445K', likes: '44.5K' },
  { id: 8, thumbnail: '/placeholder.svg', views: '267K', likes: '26.7K' },
  { id: 9, thumbnail: '/placeholder.svg', views: '189K', likes: '18.9K' },
];

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('videos');

  return (
    <div className="h-full w-full overflow-y-auto pb-20">
      <div className="relative">
        <div className="h-32 bg-gradient-to-br from-[#FF006E] via-[#00F5FF] to-[#FFBE0B]" />
        
        <div className="px-4 -mt-16">
          <div className="flex items-end justify-between mb-4">
            <Avatar className="w-28 h-28 border-4 border-background">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>ME</AvatarFallback>
            </Avatar>
            <Button
              size="sm"
              className="mb-2 bg-card text-foreground border border-border hover:bg-muted rounded-full"
            >
              <Icon name="Settings" size={16} className="mr-2" />
              Настройки
            </Button>
          </div>

          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-2xl font-bold text-foreground">@my_profile</h1>
              <Icon name="BadgeCheck" className="text-[#00F5FF]" size={24} />
            </div>
            <p className="text-muted-foreground text-sm">
              Создаю крутой контент каждый день 🚀
            </p>
          </div>

          <div className="flex items-center gap-6 mb-6">
            <div className="text-center">
              <p className="text-xl font-bold text-foreground">342</p>
              <p className="text-xs text-muted-foreground">Подписок</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-foreground">2.5M</p>
              <p className="text-xs text-muted-foreground">Подписчиков</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-foreground">45.3M</p>
              <p className="text-xs text-muted-foreground">Лайков</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FF006E]/20 to-[#FFBE0B]/20 rounded-2xl p-4 mb-6 border border-[#FF006E]/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF006E] to-[#FFBE0B] flex items-center justify-center neon-glow-pink">
                  <Icon name="DollarSign" size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-foreground font-bold">Мой заработок</p>
                  <p className="text-muted-foreground text-sm">За этот месяц</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-[#FFBE0B]">24,350₽</p>
                <Badge className="bg-green-500/20 text-green-500 hover:bg-green-500/20 mt-1">
                  <Icon name="TrendingUp" size={12} className="mr-1" />
                  +18%
                </Badge>
              </div>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full bg-card border border-border rounded-full p-1 mb-4">
              <TabsTrigger
                value="videos"
                className="flex-1 rounded-full data-[state=active]:bg-[#FF006E] data-[state=active]:text-white"
              >
                <Icon name="Grid3x3" size={16} className="mr-2" />
                Видео
              </TabsTrigger>
              <TabsTrigger
                value="saved"
                className="flex-1 rounded-full data-[state=active]:bg-[#FFBE0B] data-[state=active]:text-black"
              >
                <Icon name="Bookmark" size={16} className="mr-2" />
                Сохранённое
              </TabsTrigger>
            </TabsList>

            <TabsContent value="videos" className="mt-0">
              <div className="grid grid-cols-3 gap-1">
                {userVideos.map((video) => (
                  <div key={video.id} className="relative aspect-[9/16] group cursor-pointer">
                    <img
                      src={video.thumbnail}
                      alt="Video"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="flex items-center gap-2 text-white text-sm mb-1">
                          <Icon name="Eye" size={14} />
                          <span>{video.views}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white text-sm">
                          <Icon name="Heart" size={14} />
                          <span>{video.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="saved" className="mt-0">
              <div className="grid grid-cols-3 gap-1">
                {savedVideos.map((video) => (
                  <div key={video.id} className="relative aspect-[9/16] group cursor-pointer">
                    <img
                      src={video.thumbnail}
                      alt="Video"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="flex items-center gap-2 text-white text-sm mb-1">
                          <Icon name="Eye" size={14} />
                          <span>{video.views}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white text-sm">
                          <Icon name="Heart" size={14} />
                          <span>{video.likes}</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2">
                      <Icon name="Bookmark" className="text-[#FFBE0B] fill-[#FFBE0B]" size={20} />
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
