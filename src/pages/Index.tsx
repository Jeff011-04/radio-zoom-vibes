import { useState, useEffect } from "react";
import Preloader from "@/components/Preloader";
import RadioGrid from "@/components/RadioGrid";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen bg-transparent">
      <header className="p-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight fade-in text-white mb-4">
          WaveRadio
        </h1>
        <p className="mt-2 text-xl text-white/80 fade-in max-w-2xl mx-auto">
          Your favorite stations, all in one place. Discover the perfect soundtrack for every moment.
        </p>
      </header>
      <main className="container mx-auto px-4 fade-in">
        <RadioGrid />
      </main>
    </div>
  );
};

export default Index;