import { useState } from 'react';
import {
  LayoutGrid,
  Layers2,
  Waypoints,
  Calculator,
  Code,
  Droplets,
  CirclePlay,
  Zap,
  Disc,
  Menu,
  X,
  ChevronsUpDown,
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface SidebarProps {
  className?: string;
}

const menuItems = [
  { icon: LayoutGrid, label: 'Dashboard', active: true },
  { icon: Layers2, label: 'Assets', active: false },
  { icon: Waypoints, label: 'Staking Provider', active: false },
  { icon: Calculator, label: 'Staking Calculator', active: false },
  { icon: Code, label: 'Data API', active: false },
  { icon: Droplets, label: 'Liquid Staking', active: false },
  { icon: CirclePlay, label: 'Active Staking', active: false },
];

export function Sidebar({ className }: SidebarProps) {
  const [activeTab, setActiveTab] = useState('staking');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 w-10 h-10 bg-background-secondary border border-border-primary rounded-lg flex items-center justify-center text-text-primary"
      >
        {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'bg-background-secondary border-r border-border-primary flex flex-col transition-all duration-300',
          'fixed lg:relative inset-y-0 left-0 z-40',
          'lg:w-72',
          isCollapsed && 'lg:w-25',
          isMobileOpen
            ? 'translate-x-0 w-72'
            : '-translate-x-full lg:translate-x-0',
          className
        )}
      >
        <div className="border-2 border-background-tertiary h-full rounded-lg m-3">
          <TooltipProvider delayDuration={0}>
            {/* Logo */}
            <div
              className={cn(
                'p-6 flex items-center',
                isCollapsed ? 'justify-center' : 'gap-3'
              )}
            >
              <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center shrink-0">
                <Disc className="w-6 h-6 text-accent-primary" />
              </div>
              {!isCollapsed && (
                <div className="w-full  flex items-center justify-between  ">
                  <div className="flex flex-col">
                    <h1 className="heading-sm truncate ">Stakeme</h1>
                    <p className="body-sm truncate">Top staking asset</p>
                  </div>
                  <ChevronsUpDown />
                </div>
              )}
            </div>

            {/* Collapse Toggle (Desktop only) */}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden lg:flex absolute -right-3 top-20 w-6 h-6 bg-background-secondary border border-border-primary rounded-full items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
            >
              {isCollapsed ? '→' : '←'}
            </button>

            {/* Tabs */}
            {!isCollapsed && (
              <div className="px-6 mb-6">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="w-full bg-background-tertiary">
                    <TabsTrigger
                      value="staking"
                      className={cn(
                        'flex-1 ',
                        activeTab === 'staking'
                          ? 'text-white bg-accent-primary!'
                          : 'text-text-secondary hover:bg-background-tertiary hover:text-text-primary'
                      )}
                    >
                      Staking
                    </TabsTrigger>
                    <TabsTrigger
                      value="stablecoin"
                      className={cn(
                        'flex-1',
                        activeTab === 'stablecoin'
                          ? 'text-white bg-accent-primary!'
                          : 'text-text-secondary hover:bg-background-tertiary hover:text-text-primary'
                      )}
                    >
                      Stablecoin
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            )}

            {/* Menu Items */}
            <nav
              className={cn('flex-1 space-y-1', isCollapsed ? 'px-2' : 'px-4')}
            >
              {menuItems.map(item => {
                const button = (
                  <button
                    key={item.label}
                    className={cn(
                      'w-full flex items-center rounded-lg transition-colors body-md',
                      isCollapsed ? 'justify-center p-3' : 'gap-3 px-4 py-3',
                      item.active
                        ? 'bg-accent-primary text-white'
                        : 'text-text-secondary hover:bg-background-tertiary hover:text-text-primary'
                    )}
                  >
                    <item.icon size={20} className="shrink-0" />
                    {!isCollapsed && (
                      <span className="truncate">{item.label}</span>
                    )}
                  </button>
                );

                if (isCollapsed) {
                  return (
                    <Tooltip key={item.label}>
                      <TooltipTrigger asChild>{button}</TooltipTrigger>
                      <TooltipContent
                        side="right"
                        className="bg-background-tertiary border-border-primary"
                      >
                        <p>{item.label}</p>
                      </TooltipContent>
                    </Tooltip>
                  );
                }

                return button;
              })}
            </nav>

            {/* Unlock Super Card */}
            {!isCollapsed && (
              <div className="p-4 mt-auto">
                <Card className="bg-background-tertiary border-border-primary p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center shrink-0">
                      <Zap className="w-5 h-5 text-accent-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="heading-sm mb-1">Unlock Super</h3>
                      <p className="body-sm text-text-muted">
                        Unlock all features on stakeme
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Collapsed Unlock Icon */}
            {isCollapsed && (
              <div className="p-4 mt-auto flex justify-center">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-accent-primary" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="bg-background-tertiary border-border-primary"
                  >
                    <p>Unlock Super</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            )}
          </TooltipProvider>
        </div>
      </aside>
    </>
  );
}
