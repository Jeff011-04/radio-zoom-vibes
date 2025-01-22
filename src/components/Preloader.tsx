import { Radio } from "lucide-react";

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background">
      <div className="preloader flex flex-col items-center space-y-4">
        <Radio className="w-20 h-20" />
        <h1 className="text-4xl font-bold tracking-tight">WaveRadio</h1>
      </div>
    </div>
  );
};

export default Preloader;