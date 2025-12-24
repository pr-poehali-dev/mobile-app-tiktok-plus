import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';

const UploadPage = () => {
  const [enableDonations, setEnableDonations] = useState(true);
  const [description, setDescription] = useState('');
  const [hashtags, setHashtags] = useState('');

  return (
    <div className="h-full w-full overflow-y-auto pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-foreground mb-6">Загрузить видео</h1>

        <div className="space-y-6">
          <div className="aspect-[9/16] bg-card border-2 border-dashed border-border rounded-3xl flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-[#FF006E] transition-colors">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FF006E] to-[#00F5FF] flex items-center justify-center neon-glow-pink">
              <Icon name="Upload" size={32} className="text-white" />
            </div>
            <div className="text-center">
              <p className="text-foreground font-semibold mb-1">Выбрать видео</p>
              <p className="text-muted-foreground text-sm">До 60 секунд, макс. 100MB</p>
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-foreground mb-2 block">
              Описание
            </label>
            <Textarea
              placeholder="Расскажите о вашем видео..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[100px] bg-card border-border text-foreground resize-none"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-foreground mb-2 block">
              Хештеги
            </label>
            <Input
              placeholder="#dance #trend #viral"
              value={hashtags}
              onChange={(e) => setHashtags(e.target.value)}
              className="bg-card border-border text-foreground"
            />
          </div>

          <div className="bg-card border border-border rounded-2xl p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF006E] to-[#FFBE0B] flex items-center justify-center">
                  <Icon name="Gift" size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-foreground font-semibold">Монетизация</p>
                  <p className="text-muted-foreground text-sm">Получайте донаты и подарки</p>
                </div>
              </div>
              <Switch checked={enableDonations} onCheckedChange={setEnableDonations} />
            </div>
            
            {enableDonations && (
              <div className="pl-13 space-y-2">
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-muted-foreground">Минимальный донат</span>
                  <span className="text-sm font-semibold text-foreground">50₽</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-muted-foreground">Комиссия платформы</span>
                  <span className="text-sm font-semibold text-[#FFBE0B]">10%</span>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-3">
            <Button
              size="lg"
              className="w-full h-14 bg-gradient-to-r from-[#FF006E] to-[#00F5FF] text-white font-semibold rounded-full text-lg neon-glow-pink hover:opacity-90"
            >
              <Icon name="Upload" size={20} className="mr-2" />
              Опубликовать
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="w-full h-14 border-border text-foreground font-semibold rounded-full text-lg hover:bg-muted"
            >
              Сохранить черновик
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
