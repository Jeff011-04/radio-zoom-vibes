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
    <div className="min-h-screen bg-background">
      <header className="p-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight fade-in">WaveRadio</h1>
        <p className="mt-2 text-muted-foreground fade-in">
          Your favorite stations, all in one place
        </p>
      </header>
      <main className="container mx-auto fade-in">
        <RadioGrid />
      </main>
    </div>
  );
};

export default Index;