
import Clock from '../components/Clock';
import Weather from '../components/Weather';
import SearchBar from '../components/SearchBar';
import Shortcuts from '../components/Shortcuts';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-8 px-4">
      <div className="glass w-full max-w-7xl mx-auto p-8 md:p-12 flex flex-col">
        <div className="mb-8 space-y-4">
          <Clock />
          <Weather />
        </div>
        
        <SearchBar />
        
        <div className="mt-6">
          <Shortcuts />
        </div>
      </div>
    </div>
  );
};

export default Index;
