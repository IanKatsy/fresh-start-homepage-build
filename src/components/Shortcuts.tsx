
import React from 'react';
import { 
  Github, 
  Twitter, 
  Search, 
  Spotify, 
  Discord,
  Mail,
  LineChart,
  LayoutGrid,
  Newspaper,
  BarChart,
  DollarSign,
  TrendingUp,
  Code,
  Monitor,
  Keyboard,
  Music
} from 'lucide-react';

// Define the shortcut type
type Shortcut = {
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
};

// Group shortcuts
const shortcuts: Record<string, Shortcut[]> = {
  "Favorites": [
    {
      name: "Gmail",
      icon: <Mail size={20} />,
      url: "https://gmail.com",
      color: "text-red-400",
    },
    {
      name: "Twitter",
      icon: <Twitter size={20} />,
      url: "https://twitter.com",
      color: "text-blue-400",
    },
    {
      name: "Github",
      icon: <Github size={20} />,
      url: "https://github.com",
      color: "text-white",
    },
    {
      name: "Discord",
      icon: <Discord size={20} />,
      url: "https://discord.com",
      color: "text-indigo-400",
    },
  ],
  "Tools": [
    {
      name: "Spotify",
      icon: <Spotify size={20} />,
      url: "https://spotify.com",
      color: "text-green-400",
    },
    {
      name: "Trading View",
      icon: <LineChart size={20} />,
      url: "https://tradingview.com",
      color: "text-blue-300",
    },
    {
      name: "Start Page",
      icon: <LayoutGrid size={20} />,
      url: "https://start.page",
      color: "text-purple-400",
    },
    {
      name: "Hacker News",
      icon: <Newspaper size={20} />,
      url: "https://news.ycombinator.com",
      color: "text-orange-400",
    },
  ],
  "Finance": [
    {
      name: "Sector SPDRs",
      icon: <BarChart size={20} />,
      url: "https://www.sectorspdr.com/",
      color: "text-yellow-400",
    },
    {
      name: "Earnings",
      icon: <DollarSign size={20} />,
      url: "https://finance.yahoo.com/calendar/earnings",
      color: "text-green-500",
    },
    {
      name: "Wallstreet Bets",
      icon: <TrendingUp size={20} />,
      url: "https://reddit.com/r/wallstreetbets",
      color: "text-red-500",
    },
    {
      name: "V0.dev",
      icon: <Code size={20} />,
      url: "https://v0.dev",
      color: "text-blue-400",
    },
  ],
  "Others": [
    {
      name: "Desktops",
      icon: <Monitor size={20} />,
      url: "https://reddit.com/r/desktops",
      color: "text-teal-400",
    },
    {
      name: "MonkeyType",
      icon: <Keyboard size={20} />,
      url: "https://monkeytype.com",
      color: "text-yellow-300",
    },
    {
      name: "Music for Prog",
      icon: <Music size={20} />,
      url: "https://musicforprogramming.net",
      color: "text-pink-400",
    },
    {
      name: "Search",
      icon: <Search size={20} />,
      url: "https://google.com",
      color: "text-blue-500",
    },
  ],
};

const ShortcutItem = ({ shortcut }: { shortcut: Shortcut }) => {
  return (
    <a 
      href={shortcut.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="shortcut-button"
    >
      <span className={`shortcut-icon ${shortcut.color}`}>
        {shortcut.icon}
      </span>
      <span className="text-xs text-white/70">{shortcut.name}</span>
    </a>
  );
};

const Shortcuts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {Object.entries(shortcuts).map(([category, items]) => (
        <div key={category}>
          <h3 className="text-white/60 text-xs font-medium mb-3">{category}</h3>
          <div className="shortcut-grid">
            {items.map((shortcut) => (
              <ShortcutItem key={shortcut.name} shortcut={shortcut} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shortcuts;
