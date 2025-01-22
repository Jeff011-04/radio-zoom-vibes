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
    language: string;
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
      "glass-card rounded-xl p-6 transition-all duration-300",
      "hover:shadow-lg hover:scale-[1.02]",
      "flex flex-col space-y-4"
    )}>
      <div className="flex justify-between items-start">
        <div>
          <div className="flex gap-2">
            <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
              {station.genre}
            </span>
            <span className="px-2 py-1 text-xs rounded-full bg-secondary/80 text-secondary-foreground">
              {station.language}
            </span>
          </div>
          <h3 className="mt-2 text-xl font-semibold">{station.name}</h3>
          <p className="text-sm text-muted-foreground">{station.frequency}</p>
        </div>
        <button
          onClick={isPlaying ? onPause : onPlay}
          className="p-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5" />
          )}
        </button>
      </div>
      {isPlaying && (
        <div className="flex items-center space-x-2">
          <Volume2 className="w-4 h-4 text-muted-foreground" />
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