import { useState } from "react";
import RadioCard from "./RadioCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const RADIO_STATIONS = [
  {
    id: "1",
    name: "Classic FM",
    frequency: "89.9 MHz",
    streamUrl: "https://media-ssl.musicradio.com/ClassicFM",
    genre: "Classical",
    language: "English"
  },
  {
    id: "2",
    name: "Jazz Cafe",
    frequency: "92.3 MHz",
    streamUrl: "https://strm112.1.fm/ajazz_mobile_mp3",
    genre: "Jazz",
    language: "English"
  },
  {
    id: "3",
    name: "Radio France",
    frequency: "95.5 MHz",
    streamUrl: "https://strm112.1.fm/francemusic_mobile_mp3",
    genre: "Various",
    language: "French"
  },
  {
    id: "4",
    name: "Deutsche Welle",
    frequency: "98.1 MHz",
    streamUrl: "https://strm112.1.fm/deutschewelle_mobile_mp3",
    genre: "Various",
    language: "German"
  },
  {
    id: "5",
    name: "Radio Italia",
    frequency: "101.7 MHz",
    streamUrl: "https://strm112.1.fm/italianradio_mobile_mp3",
    genre: "Various",
    language: "Italian"
  },
  {
    id: "6",
    name: "Radio España",
    frequency: "103.3 MHz",
    streamUrl: "https://strm112.1.fm/spanishmusic_mobile_mp3",
    genre: "Various",
    language: "Spanish"
  },
  {
    id: "7",
    name: "J-Pop Radio",
    frequency: "105.5 MHz",
    streamUrl: "https://strm112.1.fm/jpop_mobile_mp3",
    genre: "Pop",
    language: "Japanese"
  },
  {
    id: "8",
    name: "K-Pop Hits",
    frequency: "107.1 MHz",
    streamUrl: "https://strm112.1.fm/kpop_mobile_mp3",
    genre: "Pop",
    language: "Korean"
  }
];

const LANGUAGES = ["All", "English", "French", "German", "Italian", "Spanish", "Japanese", "Korean"];

const RadioGrid = () => {
  const [playing, setPlaying] = useState<string | null>(null);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [volume, setVolume] = useState(80);
  const [selectedLanguage, setSelectedLanguage] = useState("All");

  const handlePlay = (station: typeof RADIO_STATIONS[0]) => {
    if (audio) {
      audio.pause();
    }
    const newAudio = new Audio(station.streamUrl);
    newAudio.volume = volume / 100;
    newAudio.play().catch(console.error);
    setAudio(newAudio);
    setPlaying(station.id);
  };

  const handlePause = () => {
    if (audio) {
      audio.pause();
    }
    setPlaying(null);
    setAudio(null);
  };

  const handleVolumeChange = (station: typeof RADIO_STATIONS[0]) => (value: number[]) => {
    setVolume(value[0]);
    if (audio && playing === station.id) {
      audio.volume = value[0] / 100;
    }
  };

  const filteredStations = selectedLanguage === "All" 
    ? RADIO_STATIONS 
    : RADIO_STATIONS.filter(station => station.language === selectedLanguage);

  return (
    <div className="space-y-6">
      <div className="flex justify-end px-6">
        <Select
          value={selectedLanguage}
          onValueChange={setSelectedLanguage}
        >
          <SelectTrigger className="w-[180px] glass-card">
            <SelectValue placeholder="Select Language" />
          </SelectTrigger>
          <SelectContent>
            {LANGUAGES.map((language) => (
              <SelectItem key={language} value={language}>
                {language}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {filteredStations.map((station) => (
          <RadioCard
            key={station.id}
            station={station}
            isPlaying={playing === station.id}
            onPlay={() => handlePlay(station)}
            onPause={handlePause}
            volume={volume}
            onVolumeChange={handleVolumeChange(station)}
          />
        ))}
      </div>
    </div>
  );
};

export default RadioGrid;