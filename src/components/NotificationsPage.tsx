import Icon from '@/components/ui/icon';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const notifications = [
  {
    id: 1,
    type: 'challenge',
    user: 'Система',
    avatar: '/placeholder.svg',
    action: 'Ты занял 23 место в "Танцевальном вызове"! 🏆',
    time: '1 мин назад',
    isNew: true,
  },
  {
    id: 2,
    type: 'like',
    user: '@anna_vlog',
    avatar: '/placeholder.svg',
    action: 'понравилось ваше видео',
    time: '2 мин назад',
    isNew: true,
  },
  {
    id: 3,
    type: 'comment',
    user: '@tech_master',
    avatar: '/placeholder.svg',
    action: 'прокомментировал: "Супер контент! 🔥"',
    time: '15 мин назад',
    isNew: true,
  },
  {
    id: 4,
    type: 'follow',
    user: '@dance_queen',
    avatar: '/placeholder.svg',
    action: 'подписался на вас',
    time: '1 час назад',
    isNew: true,
  },
  {
    id: 5,
    type: 'gift',
    user: '@generous_fan',
    avatar: '/placeholder.svg',
    action: 'отправил вам подарок 💎 на 500₽',
    time: '2 часа назад',
    isNew: false,
  },
  {
    id: 6,
    type: 'like',
    user: '@music_lover',
    avatar: '/placeholder.svg',
    action: 'понравилось ваше видео',
    time: '3 часа назад',
    isNew: false,
  },
  {
    id: 7,
    type: 'comment',
    user: '@food_critic',
    avatar: '/placeholder.svg',
    action: 'прокомментировал: "Рецепт просто бомба!"',
    time: '5 часов назад',
    isNew: false,
  },
];

const NotificationsPage = () => {
  const getIconByType = (type: string) => {
    switch (type) {
      case 'like':
        return <Icon name="Heart" className="text-[#FF006E]" size={20} />;
      case 'comment':
        return <Icon name="MessageCircle" className="text-[#00F5FF]" size={20} />;
      case 'follow':
        return <Icon name="UserPlus" className="text-[#FFBE0B]" size={20} />;
      case 'gift':
        return <Icon name="Gift" className="text-[#9b87f5]" size={20} />;
      case 'challenge':
        return <Icon name="Trophy" className="text-[#FFBE0B]" size={20} />;
      default:
        return <Icon name="Bell" className="text-muted-foreground" size={20} />;
    }
  };

  return (
    <div className="h-full w-full overflow-y-auto pb-20">
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-foreground">Уведомления</h1>
          <Badge className="bg-[#FF006E] text-white neon-glow-pink">
            {notifications.filter((n) => n.isNew).length} новых
          </Badge>
        </div>

        <div className="space-y-2">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`flex items-start gap-3 p-4 rounded-2xl transition-all cursor-pointer ${
                notification.isNew
                  ? 'bg-card border border-[#FF006E]/30'
                  : 'bg-card/50 border border-transparent hover:border-border'
              }`}
            >
              <div className="relative">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={notification.avatar} />
                  <AvatarFallback>{notification.user[1]}</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-card border-2 border-background flex items-center justify-center">
                  {getIconByType(notification.type)}
                </div>
              </div>

              <div className="flex-1">
                <p className="text-foreground text-sm">
                  <span className="font-semibold">{notification.user}</span>{' '}
                  <span className="text-muted-foreground">{notification.action}</span>
                </p>
                <p className="text-muted-foreground text-xs mt-1">{notification.time}</p>
              </div>

              {notification.isNew && (
                <div className="w-2 h-2 rounded-full bg-[#FF006E] neon-glow-pink mt-2" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 p-6 bg-gradient-to-br from-[#FF006E]/10 to-[#00F5FF]/10 rounded-3xl border border-border">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF006E] to-[#FFBE0B] flex items-center justify-center neon-glow-pink">
              <Icon name="TrendingUp" size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-foreground font-bold">Ваша статистика</h3>
              <p className="text-muted-foreground text-sm">За последние 7 дней</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-[#FF006E]">+2.5K</p>
              <p className="text-xs text-muted-foreground">Лайков</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#00F5FF]">+534</p>
              <p className="text-xs text-muted-foreground">Комментов</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#FFBE0B]">+892</p>
              <p className="text-xs text-muted-foreground">Подписчиков</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;