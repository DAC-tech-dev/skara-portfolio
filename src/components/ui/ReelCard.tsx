import { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import type { Reel } from '@/lib/site';
import { cn } from '@/lib/utils';

/**
 * A 9:16 reel player sized for the client's phone-shot footage.
 *
 * Video is never auto-fetched: `preload="none"` plus the poster frame means a
 * visitor downloads several MB only when they choose to watch. That keeps the
 * page light, which matters for both mobile data costs and AdSense page speed.
 */
export default function ReelCard({ reel, index = 0 }: { reel: Reel; index?: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isTargetReel = reel.blurb.includes('Sam Deep, Nia Pearl');
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (isTargetReel && videoRef.current) {
      const v = videoRef.current;
      v.volume = 0.2;
      v.muted = false;
      setMuted(false);
      
      const playPromise = v.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setPlaying(true))
          .catch(() => {
            // Autoplay with sound blocked by browser, fallback to muted
            v.muted = true;
            setMuted(true);
            void v.play().then(() => setPlaying(true)).catch(() => {});
          });
      }
    }
  }, [isTargetReel]);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      void v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  // Pause when scrolled out of view so audio never plays off-screen.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !v.paused) {
          v.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.35 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <article className="group relative">
      <div className="reel-frame relative overflow-hidden rounded-2xl border border-ink-600 bg-ink-900">
        <video
          ref={videoRef}
          src={reel.src}
          poster={reel.poster}
          muted={muted}
          loop
          playsInline
          preload={isTargetReel ? "auto" : "none"}
          aria-label={`${reel.title} — DJ Skara mix reel`}
          className="h-full w-full object-cover"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />

        {/* Legibility scrim */}
        <div
          className={cn(
            'pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/85 via-transparent to-ink-950/35 transition-opacity',
            playing ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
          )}
        />

        {/* Genre chip */}
        <span className="pointer-events-none absolute top-4 left-4 rounded-full border border-gold-600/45 bg-ink-950/70 px-3 py-1 text-[9px] font-bold tracking-[0.18em] text-gold-400 uppercase backdrop-blur-sm">
          {reel.genre}
        </span>

        {/* Play / pause */}
        <button
          onClick={toggle}
          aria-label={playing ? `Pause ${reel.title}` : `Play ${reel.title}`}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span
            className={cn(
              'flex h-16 w-16 items-center justify-center rounded-full border border-gold-400/50 bg-ink-950/60 text-gold-400 backdrop-blur-md transition-all duration-300',
              'group-hover:scale-110 group-hover:bg-gold-400 group-hover:text-ink-950',
              playing && 'scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100'
            )}
          >
            {playing ? (
              <Pause className="h-6 w-6" />
            ) : (
              <Play className="ml-0.5 h-6 w-6 fill-current" />
            )}
          </span>
        </button>

        {/* Mute toggle */}
        <button
          onClick={() => {
            const v = videoRef.current;
            if (!v) return;
            v.muted = !v.muted;
            setMuted(v.muted);
          }}
          aria-label={muted ? 'Unmute' : 'Mute'}
          className="absolute right-4 bottom-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-ink-600 bg-ink-950/70 text-chrome-300 backdrop-blur-sm transition hover:border-gold-600 hover:text-gold-400"
        >
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>

        {/* Caption */}
        <div
          className={cn(
            'pointer-events-none absolute inset-x-0 bottom-0 p-5 pr-16 transition-opacity duration-300',
            playing ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
          )}
        >
          <p className="text-[10px] font-semibold tracking-[0.2em] text-gold-400 uppercase">
            {String(index + 1).padStart(2, '0')} · {reel.duration}
          </p>
          <h3 className="display-xl mt-1.5 text-xl text-bone">{reel.title}</h3>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted">{reel.blurb}</p>
    </article>
  );
}
