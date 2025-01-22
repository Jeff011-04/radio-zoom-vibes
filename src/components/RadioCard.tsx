import { Play, Pause, Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

interface RadioCardProps {
  station: {
    id: string;
    name: string;
    frequency: string;
    streamUrl: string;
    genre: string;
  };
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
  volume: number;
  onVolumeChange: (value: number[]) => void;
}

const RadioCard = ({
  station,
  isPlaying,
  onPlay,
  onPause,
  volume,
  onVolumeChange,
}: RadioCardProps) => {
  return (
    <div className={cn(
      "glass-card rounded-xl p-6",
      "flex flex-col space-y-4"
    )}>
      <div className="flex justify-between items-start">
        <div>
          <span className="px-3 py-1 text-xs rounded-full bg-white/20 text-white font-medium">
            {station.genre}
          </span>
          <h3 className="mt-3 text-2xl font-bold text-white">{station.name}</h3>
          <p className="text-sm text-white/70 mt-1">{station.frequency}</p>
        </div>
        <button
          onClick={isPlaying ? onPause : onPlay}
          className="p-4 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6" />
          ) : (
            <Play className="w-6 h-6" />
          )}
        </button>
      </div>
      {isPlaying && (
        <div className="flex items-center space-x-3 pt-2">
          <Volume2 className="w-4 h-4 text-white/70" />
          <Slider
            value={[volume]}
            onValueChange={onVolumeChange}
            max={100}
            step={1}
            className="w-full"
          />
        </div>
      )}
    </div>
  );
};

export default RadioCard;