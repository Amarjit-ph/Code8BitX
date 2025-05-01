'use client';

import { useEffect, useRef, useState } from 'react';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.loop = true;
      // Autoplay policy: user must interact before it plays
      const handleUserGesture = () => {
        audio.play().catch(console.error);
        setIsPlaying(true);
        window.removeEventListener('click', handleUserGesture);
      };
      window.addEventListener('click', handleUserGesture);
    }
  }, []);

  return (
    <audio ref={audioRef} src="/level-ix-211054.mp3" preload="auto" />
  );
}
