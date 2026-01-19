import Randomizer from '@/components/Randomizer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex flex-col gap-8">
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 text-center drop-shadow-2xl">
          Randkowa Ruletka 💘
        </h1>
        <p className="text-lg text-purple-200 text-center max-w-2xl">
          Brakuje Ci pomysłu na randkę? Niech los zadecyduje o Waszej kolejnej romantycznej przygodzie!
        </p>

        <div className="mt-8 w-full flex justify-center">
          <Randomizer />
        </div>
      </div>
    </main>
  );
}
