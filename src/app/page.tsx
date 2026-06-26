export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
        Myth and Mayhem
      </p>

      <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-zinc-50 sm:text-6xl">
        Eric Deloach
      </h1>

      <p className="mt-6 max-w-xl text-balance text-lg leading-8 text-zinc-400">
        Where mythology and mayhem collide. Two worlds, one relentless
        imagination — the <span className="text-zinc-200">Rage of Angels</span>{" "}
        universe and <span className="text-zinc-200">In Harm&apos;s Way</span>.
      </p>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <span className="rounded-full border border-zinc-700 px-5 py-2 text-sm text-zinc-300">
          Epic Mythological Fantasy
        </span>
        <span className="rounded-full border border-zinc-700 px-5 py-2 text-sm text-zinc-300">
          Grounded Action &amp; Military Thrillers
        </span>
      </div>

      <p className="mt-16 text-xs uppercase tracking-widest text-zinc-600">
        Site under construction
      </p>
    </main>
  );
}
