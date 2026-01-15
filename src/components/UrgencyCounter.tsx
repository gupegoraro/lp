import { useState, useEffect } from "react";
import { Clock, Flame } from "lucide-react";

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

const UrgencyCounter = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ hours: 23, minutes: 59, seconds: 59 });
  const [kitsRemaining, setKitsRemaining] = useState(12);

  useEffect(() => {
    // Set initial time based on current time to reset at midnight
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    const diff = midnight.getTime() - now.getTime();
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    setTimeLeft({ hours, minutes, seconds });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        // Reset to 24 hours when it reaches 0
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="bg-gradient-to-r from-destructive/90 to-destructive rounded-2xl p-4 md:p-6 shadow-lg">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
        {/* Timer */}
        <div className="flex items-center gap-3">
          <Clock className="w-6 h-6 text-destructive-foreground animate-pulse" />
          <div className="text-center">
            <p className="text-destructive-foreground/80 text-xs md:text-sm font-medium mb-1">
              OFERTA EXPIRA EM
            </p>
            <div className="flex items-center gap-1 md:gap-2">
              <div className="bg-destructive-foreground/20 backdrop-blur rounded-lg px-2 md:px-3 py-1">
                <span className="text-xl md:text-2xl font-bold text-destructive-foreground">
                  {formatNumber(timeLeft.hours)}
                </span>
              </div>
              <span className="text-destructive-foreground text-xl font-bold">:</span>
              <div className="bg-destructive-foreground/20 backdrop-blur rounded-lg px-2 md:px-3 py-1">
                <span className="text-xl md:text-2xl font-bold text-destructive-foreground">
                  {formatNumber(timeLeft.minutes)}
                </span>
              </div>
              <span className="text-destructive-foreground text-xl font-bold">:</span>
              <div className="bg-destructive-foreground/20 backdrop-blur rounded-lg px-2 md:px-3 py-1">
                <span className="text-xl md:text-2xl font-bold text-destructive-foreground">
                  {formatNumber(timeLeft.seconds)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-12 bg-destructive-foreground/30" />

        {/* Stock Counter */}
        <div className="flex items-center gap-3">
          <Flame className="w-6 h-6 text-destructive-foreground animate-pulse" />
          <div className="text-center">
            <p className="text-destructive-foreground/80 text-xs md:text-sm font-medium mb-1">
              KITS DISPONÍVEIS
            </p>
            <div className="bg-destructive-foreground/20 backdrop-blur rounded-lg px-4 py-1">
              <span className="text-xl md:text-2xl font-bold text-destructive-foreground">
                Apenas {kitsRemaining} restantes!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgencyCounter;
