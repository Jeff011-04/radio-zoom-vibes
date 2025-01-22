import { useState } from "react";
import RadioCard from "./RadioCard";

const RADIO_STATIONS = [
  {
    id: "1",
    name: "Classic FM",
    frequency: "89.9 MHz",
    streamUrl: "https://media-ssl.musicradio.com/ClassicFM",
    genre: "Classical"
  },
  {
    id: "2",
    name: "Jazz Cafe",
    frequency: "92.3 MHz",
    streamUrl: "https://strm112.1.fm/ajazz_mobile_mp3",
    genre: "Jazz"
  },
  {
    id: "3",
    name: "Rock Radio",
    frequency: "95.5 MHz",
    streamUrl: "https://stream.laut.fm/rockradio",
    genre: "Rock"
  },
  {
    id: "4",
    name: "Chill Lounge",
    frequency: "98.1 MHz",
    streamUrl: "https://strm112.1.fm/chilloutlounge_mobile_mp3",
    genre: "Lounge"
  },
  {
    id: "5",
    name: "Electronic Beats",
    frequency: "101.7 MHz",
    streamUrl: "https://strm112.1.fm/electronica_mobile_mp3",
    genre: "Electronic"
  },
  {
    id: "6",
    name: "World Music",
    frequency: "103.3 MHz",
    streamUrl: "https://strm112.1.fm/world_mobile_mp3",
    genre: "World"
  },
  {
    id: "7",
    name: "Hip Hop Nation",
    frequency: "105.5 MHz",
    streamUrl: "https://strm112.1.fm/hiphop_mobile_mp3",
    genre: "Hip Hop"
  },
  {
    id: "8",
    name: "Country Roads",
    frequency: "107.1 MHz",
    streamUrl: "https://strm112.1.fm/country_mobile_mp3",
    genre: "Country"
  },
  {
    id: "9",
    name: "Latin Vibes",
    frequency: "108.9 MHz",
    streamUrl: "https://strm112.1.fm/latin_mobile_mp3",
    genre: "Latin"
  },
  {
    id: "10",
    name: "Blues Corner",
    frequency: "91.1 MHz",
    streamUrl: "https://strm112.1.fm/blues_mobile_mp3",
    genre: "Blues"
  },
  {
    id: "11",
    name: "Reggae Roots",
    frequency: "93.7 MHz",
    streamUrl: "https://strm112.1.fm/reggae_mobile_mp3",
    genre: "Reggae"
  },
  {
    id: "12",
    name: "Indie Underground",
    frequency: "96.3 MHz",
    streamUrl: "https://strm112.1.fm/indie_mobile_mp3",
    genre: "Indie"
  }
];

const RadioGrid = () => {
  const [playing, setPlaying] = useState<string | null>(null);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [volume, setVolume] = useState(80);

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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {RADIO_STATIONS.map((station) => (
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
  );
};

export default RadioGrid;
