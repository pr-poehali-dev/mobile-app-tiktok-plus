import Icon from '@/components/ui/icon';

type Page = 'home' | 'search' | 'upload' | 'notifications' | 'profile';

interface BottomNavProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

const BottomNav = ({ currentPage, onPageChange }: BottomNavProps) => {
  const navItems = [
    { id: 'home' as Page, icon: 'Home', label: 'Главная' },
    { id: 'search' as Page, icon: 'Search', label: 'Поиск' },
    { id: 'upload' as Page, icon: 'PlusSquare', label: 'Добавить' },
    { id: 'notifications' as Page, icon: 'Heart', label: 'Уведомления' },
    { id: 'profile' as Page, icon: 'User', label: 'Профиль' },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 h-16 bg-card/95 backdrop-blur-lg border-t border-border z-50">
      <div className="h-full flex items-center justify-around px-2">
        {navItems.map((item) => {
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`flex flex-col items-center justify-center gap-1 px-4 py-2 transition-all duration-200 ${
                isActive ? 'scale-110' : 'scale-100'
              }`}
            >
              <Icon
                name={item.icon}
                size={24}
                className={`${
                  isActive
                    ? 'text-[#FF006E]'
                    : 'text-muted-foreground'
                } transition-colors`}
              />
              <span
                className={`text-xs font-medium ${
                  isActive
                    ? 'text-[#FF006E]'
                    : 'text-muted-foreground'
                } transition-colors`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
