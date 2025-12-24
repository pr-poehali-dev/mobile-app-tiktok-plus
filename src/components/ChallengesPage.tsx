import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Challenge {
  id: number;
  title: string;
  description: string;
  prize: number;
  participants: number;
  deadline: string;
  category: string;
  icon: string;
  gradient: string;
  progress: number;
  isJoined: boolean;
}

const activeChallenges: Challenge[] = [
  {
    id: 1,
    title: 'Танцевальный вызов 2024',
    description: 'Покажи свой лучший танец на трек месяца',
    prize: 50000,
    participants: 2341,
    deadline: '3 дня',
    category: 'Танцы',
    icon: '💃',
    gradient: 'from-[#FF006E] to-[#FF4D94]',
    progress: 65,
    isJoined: true,
  },
  {
    id: 2,
    title: 'Кулинарный батл',
    description: 'Приготовь идеальное блюдо за 10 минут',
    prize: 35000,
    participants: 1823,
    deadline: '5 дней',
    category: 'Кулинария',
    icon: '🍳',
    gradient: 'from-[#FFBE0B] to-[#FFD93D]',
    progress: 42,
    isJoined: false,
  },
  {
    id: 3,
    title: 'Фитнес марафон',
    description: 'Самая крутая тренировка недели',
    prize: 25000,
    participants: 3456,
    deadline: '2 дня',
    category: 'Спорт',
    icon: '💪',
    gradient: 'from-[#00F5FF] to-[#4DFFFF]',
    progress: 78,
    isJoined: true,
  },
  {
    id: 4,
    title: 'Комедийный челлендж',
    description: 'Рассмеши зрителей за 15 секунд',
    prize: 40000,
    participants: 4521,
    deadline: '7 дней',
    category: 'Юмор',
    icon: '😂',
    gradient: 'from-[#9b87f5] to-[#B4A0FF]',
    progress: 31,
    isJoined: false,
  },
];

const myProgress = [
  {
    challengeId: 1,
    title: 'Танцевальный вызов 2024',
    views: 45300,
    likes: 12400,
    position: 23,
    icon: '💃',
  },
  {
    challengeId: 3,
    title: 'Фитнес марафон',
    views: 32100,
    likes: 8900,
    position: 67,
    icon: '💪',
  },
];

const topCreators = [
  { username: '@dance_star', views: '234K', likes: '89K', avatar: '/placeholder.svg' },
  { username: '@fitness_god', views: '198K', likes: '76K', avatar: '/placeholder.svg' },
  { username: '@food_master', views: '167K', likes: '62K', avatar: '/placeholder.svg' },
];

const ChallengesPage = () => {
  const [challenges, setChallenges] = useState(activeChallenges);
  const [activeTab, setActiveTab] = useState('all');

  const handleJoinChallenge = (id: number) => {
    setChallenges(
      challenges.map((c) =>
        c.id === id ? { ...c, isJoined: !c.isJoined, participants: c.isJoined ? c.participants - 1 : c.participants + 1 } : c
      )
    );
  };

  return (
    <div className="h-full w-full overflow-y-auto pb-20">
      <div className="p-4">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Челленджи</h1>
          <p className="text-muted-foreground">Участвуй в вызовах и выигрывай призы!</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-6">
          <TabsList className="w-full bg-card border border-border rounded-full p-1">
            <TabsTrigger
              value="all"
              className="flex-1 rounded-full data-[state=active]:bg-[#FF006E] data-[state=active]:text-white"
            >
              Все челленджи
            </TabsTrigger>
            <TabsTrigger
              value="my"
              className="flex-1 rounded-full data-[state=active]:bg-[#FFBE0B] data-[state=active]:text-black"
            >
              Мои челленджи
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6 space-y-4">
            {challenges.map((challenge) => (
              <div
                key={challenge.id}
                className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${challenge.gradient} p-0.5`}
              >
                <div className="bg-card rounded-3xl p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF006E] to-[#FFBE0B] flex items-center justify-center text-3xl">
                        {challenge.icon}
                      </div>
                      <div>
                        <h3 className="text-foreground font-bold text-lg">{challenge.title}</h3>
                        <Badge className="bg-muted text-muted-foreground mt-1">
                          {challenge.category}
                        </Badge>
                      </div>
                    </div>
                    <Badge className="bg-[#FFBE0B] text-black font-bold">
                      <Icon name="Trophy" size={14} className="mr-1" />
                      {challenge.prize.toLocaleString()}₽
                    </Badge>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">{challenge.description}</p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Участников</span>
                      <span className="text-foreground font-semibold">
                        {challenge.participants.toLocaleString()}
                      </span>
                    </div>
                    <Progress value={challenge.progress} className="h-2" />
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Icon name="Clock" size={14} />
                        <span>Осталось {challenge.deadline}</span>
                      </div>
                      <span className="text-[#FF006E] font-semibold">{challenge.progress}%</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => handleJoinChallenge(challenge.id)}
                    className={`w-full h-12 rounded-full font-bold ${
                      challenge.isJoined
                        ? 'bg-muted text-foreground hover:bg-muted/80'
                        : 'bg-gradient-to-r from-[#FF006E] to-[#FFBE0B] text-white hover:opacity-90 neon-glow-pink'
                    }`}
                  >
                    {challenge.isJoined ? (
                      <>
                        <Icon name="CheckCircle" size={20} className="mr-2" />
                        Участвуешь
                      </>
                    ) : (
                      <>
                        <Icon name="PlusCircle" size={20} className="mr-2" />
                        Участвовать
                      </>
                    )}
                  </Button>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="my" className="mt-6 space-y-6">
            <div className="bg-gradient-to-br from-[#FF006E]/20 to-[#FFBE0B]/20 rounded-3xl p-6 border border-[#FF006E]/30">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF006E] to-[#FFBE0B] flex items-center justify-center neon-glow-pink">
                    <Icon name="Award" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-bold text-lg">Твоя статистика</h3>
                    <p className="text-muted-foreground text-sm">По всем челленджам</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#FF006E]">{myProgress.length}</p>
                  <p className="text-xs text-muted-foreground">Активных</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#00F5FF]">77.4K</p>
                  <p className="text-xs text-muted-foreground">Просмотров</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#FFBE0B]">21.3K</p>
                  <p className="text-xs text-muted-foreground">Лайков</p>
                </div>
              </div>
            </div>

            {myProgress.map((item) => (
              <div
                key={item.challengeId}
                className="bg-card rounded-3xl p-5 border border-border"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <h3 className="text-foreground font-bold">{item.title}</h3>
                      <Badge className="bg-[#FFBE0B]/20 text-[#FFBE0B] mt-1">
                        <Icon name="Medal" size={12} className="mr-1" />
                        Место #{item.position}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-muted rounded-2xl p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon name="Eye" size={16} className="text-[#00F5FF]" />
                      <span className="text-muted-foreground text-xs">Просмотры</span>
                    </div>
                    <p className="text-foreground font-bold text-lg">
                      {item.views.toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-muted rounded-2xl p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon name="Heart" size={16} className="text-[#FF006E]" />
                      <span className="text-muted-foreground text-xs">Лайки</span>
                    </div>
                    <p className="text-foreground font-bold text-lg">
                      {item.likes.toLocaleString()}
                    </p>
                  </div>
                </div>

                <Button
                  className="w-full bg-[#FF006E] text-white hover:bg-[#FF006E]/90 rounded-full font-semibold"
                >
                  <Icon name="Upload" size={18} className="mr-2" />
                  Загрузить ещё видео
                </Button>
              </div>
            ))}

            <div>
              <h3 className="text-foreground font-bold text-lg mb-4">Лидеры челленджей</h3>
              <div className="space-y-3">
                {topCreators.map((creator, index) => (
                  <div
                    key={creator.username}
                    className="flex items-center justify-between p-4 bg-card rounded-2xl border border-border"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={creator.avatar} />
                          <AvatarFallback>{creator.username[1]}</AvatarFallback>
                        </Avatar>
                        <div
                          className={`absolute -top-1 -left-1 w-6 h-6 rounded-full ${
                            index === 0
                              ? 'bg-[#FFBE0B]'
                              : index === 1
                              ? 'bg-gray-400'
                              : 'bg-orange-600'
                          } border-2 border-background flex items-center justify-center`}
                        >
                          <span className="text-xs font-bold text-white">{index + 1}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-foreground font-semibold">{creator.username}</p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Icon name="Eye" size={12} />
                            {creator.views}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Heart" size={12} />
                            {creator.likes}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Icon name="Trophy" className="text-[#FFBE0B]" size={24} />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ChallengesPage;
