'use client';

import { useState, useMemo, useRef } from 'react';
import dates from '../data/dates.json';

interface DateIdea {
    id: number;
    title: string;
    description: string;
    budget: string;
    vibe: string;
}

export default function Randomizer() {
    const [currentDate, setCurrentDate] = useState<DateIdea | null>(null);
    const [isSpinning, setIsSpinning] = useState(false);
    const [selectedBudget, setSelectedBudget] = useState<string>('Wszystkie');
    const [selectedVibe, setSelectedVibe] = useState<string>('Wszystkie');

    // Extract unique values for filters

    const uniqueBudgets = useMemo(() => {
        // Enforce logical order: Free -> Low -> Medium -> High
        const order = ['Wszystkie', 'Darmowy', 'Niski', 'Średni', 'Wysoki'];
        const existingBudgets = new Set(dates.map(d => d.budget));
        // Filter the ordered list to only include budgets that actually exist in data (plus Wszystkie)
        return order.filter(b => b === 'Wszystkie' || existingBudgets.has(b));
    }, []);

    const uniqueVibes = useMemo(() => {
        const vibes = new Set(dates.map(d => d.vibe));
        return ['Wszystkie', ...Array.from(vibes).sort()];
    }, []);

    const filteredDates = useMemo(() => {
        return dates.filter(date => {
            const budgetMatch = selectedBudget === 'Wszystkie' || date.budget === selectedBudget;
            const vibeMatch = selectedVibe === 'Wszystkie' || date.vibe === selectedVibe;
            return budgetMatch && vibeMatch;
        });
    }, [selectedBudget, selectedVibe]);

    const randomizeDate = () => {
        if (filteredDates.length === 0) return;

        setIsSpinning(true);
        let counter = 0;
        const maxSpins = 20; // Number of quick flashes before stopping
        const speed = 100; // ms between flashes

        const intervalId = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * filteredDates.length);
            setCurrentDate(filteredDates[randomIndex]);
            counter++;

            if (counter >= maxSpins) {
                clearInterval(intervalId);
                setIsSpinning(false);
            }
        }, speed);
    };

    return (
        <div className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-xl max-w-md w-full border border-white/20">
            <h2 className="text-2xl font-bold mb-4 text-white drop-shadow-md">Randkowa Ruletka</h2>

            {/* Filters */}
            <div className="w-full flex gap-2 mb-6">
                <div className="flex-1">
                    <label className="block text-xs text-purple-200 mb-1 ml-1">Budżet</label>
                    <select
                        value={selectedBudget}
                        onChange={(e) => setSelectedBudget(e.target.value)}
                        className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                        disabled={isSpinning}
                    >
                        {uniqueBudgets.map(b => <option key={b} value={b} className="text-black">{b}</option>)}
                    </select>
                </div>
                <div className="flex-1">
                    <label className="block text-xs text-purple-200 mb-1 ml-1">Klimat (Vibe)</label>
                    <select
                        value={selectedVibe}
                        onChange={(e) => setSelectedVibe(e.target.value)}
                        className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                        disabled={isSpinning}
                    >
                        {uniqueVibes.map(v => <option key={v} value={v} className="text-black">{v}</option>)}
                    </select>
                </div>
            </div>

            {/* Result Area */}
            {currentDate ? (
                <div className={`text-center mb-6 w-full transition-opacity duration-200 ${isSpinning ? 'opacity-70 scale-95' : 'opacity-100 scale-100 animate-fade-in'}`}>
                    <h3 className="text-xl font-semibold text-pink-300 mb-2 min-h-[3.5rem] flex items-center justify-center">
                        {currentDate.title}
                    </h3>
                    <p className="text-gray-200 mb-4 text-sm leading-relaxed min-h-[4rem]">
                        {currentDate.description}
                    </p>
                    <div className="flex justify-center gap-3 text-xs font-medium">
                        <span className="bg-purple-500/30 px-3 py-1 rounded-full text-purple-200 border border-purple-500/50">
                            {currentDate.budget}
                        </span>
                        <span className="bg-teal-500/30 px-3 py-1 rounded-full text-teal-200 border border-teal-500/50">
                            {currentDate.vibe}
                        </span>
                    </div>
                </div>
            ) : (
                <div className="text-center mb-6 py-8">
                    {filteredDates.length > 0 ? (
                        <p className="text-gray-300 italic">Ustaw filtry i zakręć kołem! 🎰</p>
                    ) : (
                        <p className="text-red-300 font-semibold">Brak randek spełniających kryteria. Zmień filtry!</p>
                    )}
                </div>
            )}

            <button
                onClick={randomizeDate}
                disabled={isSpinning || filteredDates.length === 0}
                className={`px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg transform transition 
                    ${isSpinning || filteredDates.length === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:from-pink-600 hover:to-purple-700 active:scale-95 hover:shadow-pink-500/25'}
                `}
            >
                {isSpinning ? 'Losowanie...' : currentDate ? 'Kręć Jeszcze Raz ✨' : 'Wylosuj Pomysł 🎲'}
            </button>

            <p className="text-[10px] text-gray-400 mt-4">
                Dostępnych opcji: {filteredDates.length}
            </p>
        </div>
    );
}
