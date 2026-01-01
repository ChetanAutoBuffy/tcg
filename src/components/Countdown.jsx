import { useState, useEffect, useRef, useCallback } from 'react';
import logoUrl from '../assets/TCG_logo.svg';
import autoBuffyLogo from "../assets/brands/AutoBuffy-Logo.svg";
import premiumShocksLogo from "../assets/brands/PremiumShocks-Logo.svg";
import rcAutoLogo from "../assets/brands/RCAuto-Logo.svg";
import westarLogo from "../assets/brands/Westar-Logo.svg";

// 2026 predictions with sources
const predictions = [
  "🤖 40% of enterprise apps will have AI agents by 2026 [Source: Gartner]",
  "⚡ Renewable energy overtakes coal as #1 power source [Source: IEA]",
  "🚀 NASA Artemis II: Humans orbit the Moon Feb 2026 [Source: NASA]",
  "🔴 SpaceX sending 5 Starships to Mars Dec 2026 [Source: SpaceX]",
  "💰 AI market reaches $1.8 trillion by 2030 [Source: Bloomberg]",
  "💼 70% of jobs require AI skills by 2027 [Source: World Economic Forum]",
  "⚽ FIFA World Cup 2026 generates $5B+ economic activity [Source: BCG]",
  "🛸 Global space tourism market hits $8B by 2030 [Source: Morgan Stanley]",
  "🚗 Electric vehicles reach price parity with gas cars [Source: BloombergNEF]",
  "🏔️ 2026 Winter Olympics in Milan-Cortina: Feb 6-22 [Source: IOC]",
  "🧠 80% of enterprises use GenAI in production by 2026 [Source: Gartner]",
  "🌱 Green economy reaches $5 trillion annually [Source: WEF]",
  "💻 TSMC 2nm chips in mass production - 35% more efficient [Source: TSMC]",
  "🌐 Metaverse economy hits $5 trillion by 2030 [Source: McKinsey]",
];

// Fun fortunes for users
const fortunes = [
  "✨ Your main character energy peaks in March 2026",
  "💸 Unexpected money coming in Q2 - trust your instincts",
  "🔥 A creative project will go viral in summer 2026",
  "☕ You'll meet someone important at a coffee shop in April",
  "🚀 Big career breakthrough happening in September 2026",
  "💼 Your side hustle becomes your main hustle by fall",
  "✈️ Travel plans in May will change your perspective",
  "📅 A random Tuesday in June becomes your favorite day",
  "📈 You'll learn a skill that doubles your income",
  "👋 Someone from your past returns with good news",
  "🎯 Your biggest risk in 2026 becomes your biggest win",
  "💎 Technology you invest in now pays off 10x",
  "💪 A health habit you start in January sticks all year",
  "🌟 You'll be featured or recognized publicly in Q3",
  "🤝 Your network expands in unexpected ways this spring",
];

// Brand data for footer
const brands = [
  { name: "Westar", logo: westarLogo, height: "h-5 md:h-6" },
  { name: "Premium Shocks", logo: premiumShocksLogo, height: "h-3 md:h-4" },
  { name: "RC Automotive", logo: rcAutoLogo, height: "h-3 md:h-4" },
  { name: "Auto Buffy", logo: autoBuffyLogo, height: "h-5 md:h-6" },
];

// Sound effects
const createPopSound = () => {
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(150, audioContext.currentTime + 0.15);
    gainNode.gain.setValueAtTime(0.25, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.15);
  } catch (e) {}
};

const createLevelUpSound = () => {
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      oscillator.frequency.setValueAtTime(freq, audioContext.currentTime + i * 0.1);
      gainNode.gain.setValueAtTime(0.15, audioContext.currentTime + i * 0.1);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + i * 0.1 + 0.2);
      oscillator.start(audioContext.currentTime + i * 0.1);
      oscillator.stop(audioContext.currentTime + i * 0.1 + 0.2);
    });
  } catch (e) {}
};

// Confetti
function ConfettiPiece({ x, delay, color }) {
  const shapes = ['rounded-full', 'rounded-sm', 'rounded-none'];
  return (
    <div className="fixed pointer-events-none z-[100]" style={{ left: `${x}%`, top: '-20px' }}>
      <div className={`w-2 h-2 ${shapes[Math.floor(Math.random() * 3)]} animate-confetti-fall`} style={{ backgroundColor: color, animationDelay: `${delay}ms` }} />
    </div>
  );
}

// Background sparkle
function BackgroundSparkle({ x, y, delay }) {
  return (
    <div className="absolute w-1 h-1 rounded-full bg-white/20 animate-sparkle" style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${delay}s` }} />
  );
}

// Floating orb
function FloatingOrb({ size, x, y, color, delay, duration }) {
  return (
    <div className="absolute rounded-full blur-3xl opacity-20 animate-float-slow" style={{ width: `${size}px`, height: `${size}px`, left: `${x}%`, top: `${y}%`, background: color, animationDelay: `${delay}s`, animationDuration: `${duration}s` }} />
  );
}

export default function Countdown() {
  const [time, setTime] = useState({
    nyc: { hours: 0, minutes: 0, seconds: 0, celebrating: false },
    texas: { hours: 0, minutes: 0, seconds: 0, celebrating: false },
    cali: { hours: 0, minutes: 0, seconds: 0, celebrating: false },
  });
  const [logoProgress, setLogoProgress] = useState({ T: false, C: false, G: false });
  const [gameActive, setGameActive] = useState(false);
  const [balloons, setBalloons] = useState([]);
  const [poppedCount, setPoppedCount] = useState(0);
  const [fortune, setFortune] = useState('');
  const [showFortune, setShowFortune] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const [level, setLevel] = useState(1);
  const [totalBalloons, setTotalBalloons] = useState(10);
  const [gameSpeed, setGameSpeed] = useState(3);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [levelTimer, setLevelTimer] = useState(0);
  const [orbs, setOrbs] = useState([]);
  const [sparkles, setSparkles] = useState([]);
  const [popEffects, setPopEffects] = useState([]);
  const tickerRef = useRef(null);

  const confettiColors = ['#FFD700', '#C0C0C0', '#9333EA', '#FFFFFF', '#EC4899', '#2563EB'];
  const balloonColors = [
    'bg-gradient-to-br from-yellow-400 to-yellow-600',
    'bg-gradient-to-br from-purple-500 to-purple-700',
    'bg-gradient-to-br from-gray-200 to-gray-400',
    'bg-gradient-to-br from-gray-700 to-gray-900',
    'bg-gradient-to-br from-white to-gray-200',
  ];

  const spawnConfetti = useCallback((count = 30) => {
    const newConfetti = Array.from({ length: count }, (_, i) => ({
      id: Date.now() + i, x: Math.random() * 100, delay: Math.random() * 500,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
    }));
    setConfetti(prev => [...prev, ...newConfetti]);
    setTimeout(() => setConfetti(prev => prev.filter(c => !newConfetti.find(nc => nc.id === c.id))), 3000);
  }, []);

  useEffect(() => {
    const orbColors = [
      'radial-gradient(circle, rgba(147,51,234,0.4) 0%, transparent 70%)',
      'radial-gradient(circle, rgba(255,215,0,0.3) 0%, transparent 70%)',
      'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
      'radial-gradient(circle, rgba(236,72,153,0.3) 0%, transparent 70%)',
    ];
    setOrbs(Array.from({ length: 8 }, (_, i) => ({
      id: i, size: Math.random() * 400 + 200, x: Math.random() * 100, y: Math.random() * 100,
      color: orbColors[i % orbColors.length], delay: Math.random() * 5, duration: Math.random() * 10 + 15,
    })));
    setSparkles(Array.from({ length: 50 }, (_, i) => ({
      id: i, x: Math.random() * 100, y: Math.random() * 100, delay: Math.random() * 5,
    })));
  }, []);

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const targetYear = now.getFullYear() >= 2026 ? now.getFullYear() + 1 : 2026;
      const calculateForTimezone = (timezone) => {
        const options = { timeZone: timezone, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
        const nowStr = now.toLocaleString('en-US', options);
        const [datePart, timePart] = nowStr.split(', ');
        const [month, day, year] = datePart.split('/');
        const [hours, minutes, seconds] = timePart.split(':');
        const nowInTz = new Date(year, month - 1, day, hours, minutes, seconds);
        const targetInTz = new Date(targetYear, 0, 1, 0, 0, 0);
        const diff = targetInTz - nowInTz;
        if (diff <= 0) return { hours: 0, minutes: 0, seconds: 0, celebrating: true };
        return { hours: Math.floor(diff / (1000 * 60 * 60)), minutes: Math.floor((diff / 1000 / 60) % 60), seconds: Math.floor((diff / 1000) % 60), celebrating: false };
      };
      const nycTime = calculateForTimezone('America/New_York');
      const texasTime = calculateForTimezone('America/Chicago');
      const caliTime = calculateForTimezone('America/Los_Angeles');
      setTime({ nyc: nycTime, texas: texasTime, cali: caliTime });
      setLogoProgress({ T: nycTime.celebrating, C: texasTime.celebrating, G: caliTime.celebrating });
    };
    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // 5 levels - more balloons, faster fall speed each level
  const getLevelConfig = (lvl) => ({
    1: { balloons: 10, fallSpeed: 3, spawnRate: 800, name: "Warm Up" },
    2: { balloons: 15, fallSpeed: 4, spawnRate: 600, name: "Getting Faster" },
    3: { balloons: 20, fallSpeed: 5, spawnRate: 450, name: "Speed Demon" },
    4: { balloons: 25, fallSpeed: 6, spawnRate: 350, name: "Chaos Mode" },
    5: { balloons: 30, fallSpeed: 8, spawnRate: 250, name: "THE FINAL BOSS" },
  }[lvl] || { balloons: 30, fallSpeed: 8, spawnRate: 250, name: "THE FINAL BOSS" });

  const balloonIdRef = useRef(0);
  const spawnIntervalRef = useRef(null);
  const fallIntervalRef = useRef(null);
  const spawnedCountRef = useRef(0);

  const startGame = () => {
    setLevel(1);
    setGameComplete(false);
    setGameOver(false);
    balloonIdRef.current = 0;
    startLevel(1);
  };

  const startLevel = (lvl) => {
    const config = getLevelConfig(lvl);
    setBalloons([]);
    setPoppedCount(0);
    setTotalBalloons(config.balloons);
    spawnedCountRef.current = 0;
    setGameActive(true);
    setShowFortune(false);
    setShowLevelUp(false);
    setGameOver(false);
    setGameSpeed(config.fallSpeed);
  };

  // Spawn balloons from top
  useEffect(() => {
    if (!gameActive || showLevelUp || gameComplete || gameOver) {
      if (spawnIntervalRef.current) clearInterval(spawnIntervalRef.current);
      return;
    }

    const config = getLevelConfig(level);

    spawnIntervalRef.current = setInterval(() => {
      if (spawnedCountRef.current >= config.balloons) {
        clearInterval(spawnIntervalRef.current);
        return;
      }

      const newBalloon = {
        id: balloonIdRef.current++,
        x: Math.random() * 85 + 5,
        y: -10,
        color: balloonColors[Math.floor(Math.random() * balloonColors.length)],
        popped: false,
        escaped: false,
        size: Math.random() * 20 + 45,
      };

      setBalloons(prev => [...prev, newBalloon]);
      spawnedCountRef.current++;
    }, config.spawnRate);

    return () => {
      if (spawnIntervalRef.current) clearInterval(spawnIntervalRef.current);
    };
  }, [gameActive, level, showLevelUp, gameComplete, gameOver]);

  // Move balloons down
  useEffect(() => {
    if (!gameActive || showLevelUp || gameComplete || gameOver) {
      if (fallIntervalRef.current) clearInterval(fallIntervalRef.current);
      return;
    }

    const config = getLevelConfig(level);

    fallIntervalRef.current = setInterval(() => {
      setBalloons(prev => {
        const updated = prev.map(b => {
          if (b.popped || b.escaped) return b;
          const newY = b.y + config.fallSpeed * 0.5;
          if (newY > 100) {
            return { ...b, escaped: true };
          }
          return { ...b, y: newY };
        });

        // Check for escaped balloons = game over
        const escaped = updated.filter(b => b.escaped && !b.popped).length;
        if (escaped > 0) {
          setGameOver(true);
        }

        return updated;
      });
    }, 50);

    return () => {
      if (fallIntervalRef.current) clearInterval(fallIntervalRef.current);
    };
  }, [gameActive, level, showLevelUp, gameComplete, gameOver]);

  // Spawn pop effect
  const spawnPopEffect = (x, y) => {
    const id = Date.now() + Math.random();
    setPopEffects(prev => [...prev, { id, x, y }]);
    setTimeout(() => setPopEffects(prev => prev.filter(p => p.id !== id)), 500);
  };

  const popBalloon = (id) => {
    const balloon = balloons.find(b => b.id === id);
    if (balloon && !balloon.popped && !balloon.escaped) {
      createPopSound();
      spawnConfetti(8);
      spawnPopEffect(balloon.x, balloon.y);

      setBalloons(prev => prev.map(b => b.id === id ? { ...b, popped: true } : b));
      const newPoppedCount = poppedCount + 1;
      setPoppedCount(newPoppedCount);

      if (newPoppedCount >= totalBalloons) {
        if (level >= 5) {
          createLevelUpSound(); spawnConfetti(100); setGameComplete(true);
          setFortune(fortunes[Math.floor(Math.random() * fortunes.length)]);
          setTimeout(() => setShowFortune(true), 500);
        } else {
          createLevelUpSound(); spawnConfetti(50); setShowLevelUp(true);
          setTimeout(() => { setLevel(prev => prev + 1); startLevel(level + 1); }, 1500);
        }
      }
    }
  };

  const allCelebrating = time.nyc.celebrating && time.texas.celebrating && time.cali.celebrating;
  const levelConfig = getLevelConfig(level);

  return (
    <div className="min-h-screen text-white overflow-hidden relative bg-[#050508] flex flex-col">
      {/* Animated gradient background */}
      <div className="fixed inset-0 animate-gradient-shift" style={{
        background: 'linear-gradient(135deg, #050508 0%, #0a0a15 25%, #080810 50%, #100810 75%, #050508 100%)',
        backgroundSize: '400% 400%',
      }} />

      {/* Floating orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {orbs.map(orb => <FloatingOrb key={orb.id} {...orb} />)}
      </div>

      {/* Background sparkles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {sparkles.map(s => <BackgroundSparkle key={s.id} {...s} />)}
      </div>

      {/* Confetti */}
      {confetti.map(c => <ConfettiPiece key={c.id} {...c} />)}

      {/* Color-changing line at top */}
      <div className="relative z-20 h-[2px] w-full bg-[linear-gradient(90deg,#2563EB,#9333EA,#EC4899,#F59E0B,#10B981,#2563EB)] animate-flow bg-[length:200%_100%]" />

      {/* Ticker with Wizard pill on left */}
      <div className="relative z-10 bg-black/70 backdrop-blur-md border-b border-white/5 overflow-hidden">
        <div className="flex items-center">
          {/* Wizard Magic Ball Pill - Fixed on left */}
          <div className="flex-shrink-0 bg-gradient-to-r from-purple-600/90 to-blue-600/90 backdrop-blur-md px-4 py-2 flex items-center gap-2 border-r border-white/10 z-10">
            <span className="text-xl animate-bounce-slow">🔮</span>
            <span className="text-[10px] font-medium tracking-wider uppercase text-white/90 animate-pulse">Predicting...</span>
          </div>

          {/* Scrolling ticker */}
          <div className="flex-1 overflow-hidden py-2">
            <div ref={tickerRef} className="flex animate-ticker-fast whitespace-nowrap">
              {[...predictions, ...predictions, ...predictions].map((pred, i) => (
                <span key={i} className="inline-block mx-10 text-xs font-light tracking-wide text-white/50">
                  {pred}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PLAY CHALLENGE - Prominent at top */}
      <div className="relative z-10 flex justify-center py-4 bg-gradient-to-b from-black/30 to-transparent">
        <button
          onClick={startGame}
          className="group relative px-8 py-3 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95"
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#2563EB,#9333EA,#EC4899,#F59E0B,#10B981,#2563EB)] bg-[length:200%_100%] animate-flow" />
          {/* Glow pulse */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#2563EB,#9333EA,#EC4899,#F59E0B,#10B981,#2563EB)] bg-[length:200%_100%] animate-flow blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
          {/* Inner dark overlay */}
          <div className="absolute inset-[2px] rounded-full bg-black/60 group-hover:bg-black/40 transition-colors" />
          {/* Text */}
          <span className="relative z-10 text-sm md:text-base font-semibold tracking-widest uppercase text-white flex items-center gap-2">
            <span className="text-lg">🎮</span> Play Challenge
          </span>
        </button>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 container mx-auto px-4 py-6 md:py-10">
        {/* IN ROUTE TO 2026 header */}
        <div className="text-center mb-4">
          <p className="text-[10px] tracking-[0.4em] uppercase font-light">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 via-pink-400 via-yellow-400 to-green-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient-text">
              ✨ In Route To 2026 ✨
            </span>
          </p>
        </div>

        {/* TCG Logo */}
        <div className="flex justify-center mb-6 md:mb-10">
          <div className="relative">
            <img
              src={logoUrl}
              alt="The Chadha Group"
              className={`h-12 md:h-16 w-auto transition-all duration-1000 ${allCelebrating ? 'filter drop-shadow-[0_0_40px_rgba(255,215,0,0.6)]' : 'opacity-90'}`}
            />
            {/* Color-changing line under logo */}
            <div className="mt-3 h-[1px] w-full bg-[linear-gradient(90deg,#2563EB,#9333EA,#EC4899,#F59E0B,#10B981,#2563EB)] animate-flow bg-[length:200%_100%] opacity-60" />
            {/* Progress dots */}
            <div className="flex justify-center gap-3 mt-3">
              {['🗽', '🤠', '🌴'].map((emoji, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div className={`w-1.5 h-1.5 rounded-full transition-all duration-700 ${
                    [logoProgress.T, logoProgress.C, logoProgress.G][i]
                      ? 'bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.8)]' : 'bg-white/15'
                  }`} />
                  <span className="text-[10px]">{emoji}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mega celebration */}
        {allCelebrating && (
          <div className="text-center mb-6">
            <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-3">
              <span className="bg-gradient-to-r from-yellow-400 via-white to-yellow-400 bg-clip-text text-transparent">🎉 2026 🎉</span>
            </h1>
            <p className="text-base md:text-lg font-light text-white/40 tracking-widest uppercase">Happy New Year</p>
          </div>
        )}

        {/* Three timezone countdowns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
          <TimezoneCard emoji="🗽" name="New York" timezone="EST" time={time.nyc} celebrating={time.nyc.celebrating} index={0} />
          <TimezoneCard emoji="🤠" name="Texas" timezone="CST" time={time.texas} celebrating={time.texas.celebrating} index={1} />
          <TimezoneCard emoji="🌴" name="California" timezone="PST" time={time.cali} celebrating={time.cali.celebrating} index={2} />
        </div>
      </div>

      {/* Glass Footer with Brands */}
      <footer className="relative z-10 mt-auto">
        <div className="bg-white/[0.02] backdrop-blur-md border-t border-white/5 py-4 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center items-center gap-6 md:gap-10 mb-2 flex-wrap">
              {brands.map((brand) => (
                <img key={brand.name} src={brand.logo} alt={brand.name} className={`${brand.height} w-auto opacity-25 hover:opacity-40 transition-opacity duration-300 grayscale`} />
              ))}
            </div>
            <div className="text-center">
              <a href="https://thechadhagroup.com" target="_blank" rel="noopener noreferrer"
                className="text-[9px] font-light tracking-widest uppercase text-white/15 hover:text-white/30 transition-colors duration-300 hover-gradient-text">
                visit us
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Game overlay */}
      {gameActive && (
        <div className="fixed inset-0 z-50 bg-[#050508]">
          <div className="absolute inset-0 animate-gradient-shift" style={{
            background: 'linear-gradient(135deg, #050508 0%, #0a0815 25%, #080a10 50%, #100a08 75%, #050508 100%)',
            backgroundSize: '400% 400%',
          }} />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {orbs.map(orb => <FloatingOrb key={orb.id} {...orb} />)}
          </div>

          {/* HUD */}
          <div className="absolute top-0 left-0 right-0 p-3 flex justify-between items-center bg-black/60 backdrop-blur-md z-10 border-b border-white/5">
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent">Level {level}/5</span>
              <span className="text-xs font-light text-white/30">{levelConfig.name}</span>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white/90 tabular-nums">
                {poppedCount} / {totalBalloons}
              </div>
              <div className="text-[10px] text-white/40 uppercase tracking-widest">Don't let any escape!</div>
            </div>
            <button onClick={() => { setGameActive(false); setGameOver(false); }} className="text-white/30 hover:text-white/60 transition-colors p-2 text-xs tracking-widest uppercase">Exit</button>
          </div>

          {/* Progress bar */}
          <div className="absolute top-14 left-4 right-4 h-[4px] bg-white/5 overflow-hidden rounded-full">
            <div
              className="h-full bg-[linear-gradient(90deg,#10B981,#2563EB,#9333EA,#EC4899)] bg-[length:200%_100%] animate-flow transition-all duration-300"
              style={{ width: `${(poppedCount / totalBalloons) * 100}%` }}
            />
          </div>

          {/* Level up */}
          {showLevelUp && (
            <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/80 backdrop-blur-sm">
              <div className="text-center">
                <h2 className="text-5xl md:text-7xl font-extralight tracking-tight bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  Level {level + 1}
                </h2>
                <p className="text-lg text-white/30 font-light tracking-widest">{getLevelConfig(level + 1).name}</p>
                <p className="text-sm text-yellow-400/60 mt-2">Pop {getLevelConfig(level + 1).balloons} balloons - FASTER!</p>
              </div>
            </div>
          )}

          {/* Pop effects */}
          {popEffects.map(effect => (
            <div
              key={effect.id}
              className="absolute pointer-events-none z-30 animate-pop-burst"
              style={{ left: `${effect.x}%`, top: `${effect.y}%` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 animate-pop-text">POP!</div>
            </div>
          ))}

          {/* Balloons */}
          <div className="absolute inset-0 pt-20">
            {balloons.map(balloon => (
              !balloon.popped && (
                <button
                  key={balloon.id}
                  onClick={() => popBalloon(balloon.id)}
                  className={`absolute ${balloon.color} cursor-pointer hover:scale-110 transition-all duration-200 focus:outline-none balloon-premium`}
                  style={{
                    left: `${balloon.x}%`, top: `${balloon.y}%`,
                    width: `${balloon.size}px`, height: `${balloon.size * 1.3}px`,
                    borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%',
                    animationDuration: `${2 + Math.random()}s`, animationDelay: `${balloon.id * 0.05}s`,
                    boxShadow: '0 10px 40px rgba(0,0,0,0.4), inset 0 -5px 20px rgba(0,0,0,0.3), inset 0 5px 20px rgba(255,255,255,0.15)',
                  }}
                >
                  <div className="absolute top-3 left-3 w-3 h-3 bg-white/30 rounded-full blur-sm" />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                    <div className="w-2.5 h-2.5 bg-inherit rotate-45 opacity-70" style={{ borderRadius: '0 0 2px 2px' }} />
                  </div>
                </button>
              )
            ))}
          </div>

          {/* Game Over */}
          {gameOver && (
            <div className="absolute inset-0 flex items-center justify-center z-30 bg-black/90 backdrop-blur-md">
              <div className="bg-white/[0.03] backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-red-500/20 max-w-xl text-center mx-4">
                <div className="text-5xl mb-4">💥</div>
                <h2 className="text-2xl md:text-3xl font-extralight tracking-wide mb-2 text-red-400">Time's Up!</h2>
                <p className="text-white/40 text-sm mb-2">You got to Level {level}</p>
                <p className="text-white/30 text-xs mb-6">Popped {poppedCount} of {totalBalloons} balloons</p>
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent mx-auto mb-6" />
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={startGame}
                    className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-full font-light text-sm tracking-widest uppercase transition-all duration-300"
                  >
                    Try Again
                  </button>
                  <button
                    onClick={() => { setGameActive(false); setGameOver(false); }}
                    className="px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/15 rounded-full font-light text-xs tracking-widest uppercase transition-all duration-300"
                  >
                    Exit
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Fortune */}
          {showFortune && gameComplete && (
            <div className="absolute inset-0 flex items-center justify-center z-30 bg-black/90 backdrop-blur-md">
              <div className="bg-white/[0.03] backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 max-w-xl text-center mx-4">
                <div className="text-4xl mb-4">🏆</div>
                <h2 className="text-xl md:text-2xl font-extralight tracking-wide mb-2 bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent">Champion</h2>
                <p className="text-white/30 text-xs mb-6 tracking-widest uppercase">All 5 Levels Complete</p>
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent mx-auto mb-6" />
                <p className="text-lg md:text-xl font-light text-white/70 leading-relaxed mb-8">{fortune}</p>
                <button
                  onClick={() => { setShowFortune(false); setGameActive(false); setGameComplete(false); }}
                  className="px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/15 rounded-full font-light text-xs tracking-widest uppercase transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* CSS */}
      <style>{`
        @keyframes ticker-fast { 0% { transform: translateX(0); } 100% { transform: translateX(-33.33%); } }
        @keyframes gradient-shift { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes float-slow { 0%, 100% { transform: translate(0, 0) scale(1); } 25% { transform: translate(10px, -20px) scale(1.05); } 50% { transform: translate(-5px, -40px) scale(1); } 75% { transform: translate(-15px, -20px) scale(0.95); } }
        @keyframes balloon-float { 0%, 100% { transform: translateY(0) rotate(-2deg); } 50% { transform: translateY(-20px) rotate(2deg); } }
        @keyframes confetti-fall { 0% { transform: translateY(0) rotate(0deg); opacity: 1; } 100% { transform: translateY(100vh) rotate(720deg); opacity: 0; } }
        @keyframes flow { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
        @keyframes sparkle { 0%, 100% { opacity: 0; transform: scale(0); } 50% { opacity: 1; transform: scale(1); } }
        @keyframes gradient-text { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
        @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
        @keyframes pop-burst { 0% { transform: scale(0.5); opacity: 1; } 100% { transform: scale(2); opacity: 0; } }
        @keyframes pop-text { 0% { transform: scale(0.5) translateY(0); opacity: 1; } 100% { transform: scale(1.5) translateY(-30px); opacity: 0; } }

        .animate-ticker-fast { animation: ticker-fast 25s linear infinite; }
        .animate-gradient-shift { animation: gradient-shift 20s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow ease-in-out infinite; }
        .balloon-premium { animation: balloon-float ease-in-out infinite; }
        .animate-confetti-fall { animation: confetti-fall 3s ease-out forwards; }
        .animate-flow { animation: flow 3s linear infinite; }
        .animate-sparkle { animation: sparkle 3s ease-in-out infinite; }
        .animate-gradient-text { animation: gradient-text 3s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .animate-pop-burst { animation: pop-burst 0.4s ease-out forwards; }
        .animate-pop-text { animation: pop-text 0.5s ease-out forwards; }

        .hover-gradient-text:hover {
          background: linear-gradient(90deg,#2563EB,#9333EA,#EC4899,#F59E0B,#10B981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 100%;
          animation: gradient-text 2s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-ticker-fast, .animate-gradient-shift, .animate-float-slow, .balloon-premium, .animate-confetti-fall, .animate-flow, .animate-sparkle, .animate-gradient-text, .animate-bounce-slow { animation: none; }
        }
      `}</style>
    </div>
  );
}

// Timezone card - each has different urgency colors based on how close
function TimezoneCard({ emoji, name, timezone, time, celebrating, index }) {
  const progress = celebrating ? 100 : Math.max(0, 100 - (time.hours / 5) * 100); // More sensitive progress

  // Different border colors based on closeness
  const urgencyColors = [
    'from-green-500 to-emerald-500', // NYC - closest
    'from-yellow-500 to-orange-500', // Texas - middle
    'from-blue-500 to-purple-500',   // Cali - furthest
  ];

  const gradientId = `grad-${index}`;

  return (
    <div className={`relative bg-white/[0.02] backdrop-blur-md rounded-xl p-4 border transition-all duration-700 overflow-hidden ${
      celebrating ? 'border-yellow-400/30 bg-yellow-400/[0.05]' : 'border-white/[0.05] hover:border-white/[0.1]'
    }`}>
      {/* Urgency glow at bottom */}
      {!celebrating && (
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${urgencyColors[index]} opacity-40`} />
      )}

      {/* Loader ring */}
      <div className="absolute -top-1 -right-1 w-8 h-8">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
          <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
          <circle
            cx="18" cy="18" r="15" fill="none"
            stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round"
            strokeDasharray={`${progress}, 100`}
            className="transition-all duration-1000"
          />
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="25%" stopColor="#9333EA" />
              <stop offset="50%" stopColor="#EC4899" />
              <stop offset="75%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="text-center mb-3">
        <span className="text-2xl">{emoji}</span>
        <h3 className="text-sm font-light text-white/70 mt-1 hover-gradient-text cursor-default">{name}</h3>
        <p className="text-[9px] text-white/20 tracking-widest">{timezone}</p>
      </div>

      {celebrating ? (
        <div className="text-center py-2">
          <span className="text-xl font-extralight text-yellow-400/90">🎉 2026 🎉</span>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-1.5">
          <TimeUnit value={time.hours} label="H" />
          <TimeUnit value={time.minutes} label="M" />
          <TimeUnit value={time.seconds} label="S" />
        </div>
      )}
    </div>
  );
}

function TimeUnit({ value, label }) {
  return (
    <div className="text-center">
      <div className="bg-white/[0.04] rounded-lg py-2 mb-0.5">
        <span className="text-xl md:text-2xl font-extralight tabular-nums text-white/90">{String(value).padStart(2, '0')}</span>
      </div>
      <span className="text-[8px] text-white/20 font-light tracking-widest">{label}</span>
    </div>
  );
}
