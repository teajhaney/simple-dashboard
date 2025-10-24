import { Bell, Search, Settings, Upload } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { UserProfile } from '../../types/schema';

interface HeaderProps {
  user: UserProfile;
}

export function Header({ user }: HeaderProps) {
  return (
    <header className="h-16 md:h-20 bg-background-secondary border-b border-border-primary px-4 md:px-8 flex items-center justify-between">
      {/* User Profile */}
      <div className="flex items-center gap-3 md:gap-4 min-w-0">
        <Avatar className="w-10 h-10 md:w-12 md:h-12 shrink-0">
          <AvatarImage src={user.avatarUrl} alt={user.displayName} />
          <AvatarFallback>
            {user.displayName.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <div className="flex  items-center gap-2">
            <span className="body-md text-text-primary font-medium truncate">
              {user.displayName}
            </span>
            {user.isPro && (
              <Badge className="bg-accent-primary text-white text-xs px-2 py-0.5">
                Pro
              </Badge>
            )}
          </div>
          <span className="body-sm text-text-muted hidden sm:inline">
            @{user.username}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 md:gap-3">
        <Button className="bg-accent-primary hover:bg-accent-primary/90 text-white text-sm md:text-base">
          <Upload size={16} className="mr-1 md:mr-2" />
          <span className="hidden sm:inline">Deposit</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-text-secondary hover:text-text-primary h-8 w-8 md:h-10 md:w-10"
        >
          <Bell size={20} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-text-secondary hover:text-text-primary h-8 w-8 md:h-10 md:w-10 hidden sm:flex"
        >
          <Search size={20} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-text-secondary hover:text-text-primary h-8 w-8 md:h-10 md:w-10"
        >
          <Settings size={20} />
        </Button>
      </div>
    </header>
  );
}
