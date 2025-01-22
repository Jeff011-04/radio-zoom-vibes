import { Radio } from "lucide-react";

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent">
      <div className="preloader flex flex-col items-center space-y-6">
        <Radio className="w-24 h-24 text-white" />
        <h1 className="text-6xl font-bold tracking-tight text-white">WaveRadio</h1>
      </div>
    </div>
  );
};

export default Preloader;