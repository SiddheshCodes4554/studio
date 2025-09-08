
'use client'

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Info, Recycle, Trash2, Leaf, X, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';


const items = [
    { name: 'Plastic Bottle', type: 'recycling', icon: '💧' },
    { name: 'Apple Core', type: 'compost', icon: '🍎' },
    { name: 'Newspaper', type: 'recycling', icon: '📰' },
    { name: 'Chips Bag', type: 'landfill', icon: '🥔' },
    { name: 'Glass Jar', type: 'recycling', icon: '🫙' },
    { name: 'Banana Peel', type: 'compost', icon: '🍌' },
    { name: 'Cardboard Box', type: 'recycling', icon: '📦' },
    { name: 'Coffee Grounds', type: 'compost', icon: '☕' },
    { name: 'Styrofoam Cup', type: 'landfill', icon: '🥤' },
    { name: 'Aluminum Can', type: 'recycling', icon: '🥫' },
    { name: 'Egg Shells', type: 'compost', icon: '🥚' },
    { name: 'Plastic Bag', type: 'landfill', icon: '🛍️' },
].sort(() => Math.random() - 0.5);

const bins = {
    recycling: { icon: Recycle, color: 'bg-blue-500', name: 'Recycling' },
    compost: { icon: Leaf, color: 'bg-green-600', name: 'Compost' },
    landfill: { icon: Trash2, color: 'bg-gray-700', name: 'Landfill' },
};

type BinType = keyof typeof bins;

interface WasteSortingGameProps {
  onComplete: () => void;
}

export function WasteSortingGame({ onComplete }: WasteSortingGameProps) {
    const [currentItemIndex, setCurrentItemIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
    const [isFinished, setIsFinished] = useState(false);
    
    const currentItem = items[currentItemIndex];

    const handleSort = (bin: BinType) => {
        if (feedback) return;

        if (currentItem.type === bin) {
            setFeedback('correct');
            setScore(prev => prev + 1);
        } else {
            setFeedback('incorrect');
        }

        setTimeout(() => {
            setFeedback(null);
            if (currentItemIndex < items.length - 1) {
                setCurrentItemIndex(prev => prev + 1);
            } else {
                setIsFinished(true);
            }
        }, 1200);
    };

    if (isFinished) {
        return (
            <Card className="bg-muted/30 text-center">
                <CardHeader>
                    <div className="flex items-center justify-center gap-2">
                        <Award className="w-8 h-8 text-accent" />
                        <CardTitle>Challenge Complete!</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-2xl font-bold">Your Score: {score} / {items.length}</p>
                    <p className="text-muted-foreground">You're a true Waste Warrior! You've learned how to properly sort common household items.</p>
                    <Button onClick={onComplete}>
                        <Check className="mr-2" /> Continue to Next Section
                    </Button>
                </CardContent>
            </Card>
        );
    }
    
    return (
        <Card className="bg-muted/30 overflow-hidden">
            <CardHeader>
                <div className="flex items-center gap-2">
                    <Recycle className="w-6 h-6 text-primary" />
                    <CardTitle>Waste Sorting Challenge</CardTitle>
                </div>
                <CardDescription>Click the correct bin for each item to sort it.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
                <div className="text-center space-y-4 relative h-32 flex flex-col items-center justify-center">
                    <AnimatePresence>
                        {currentItem && (
                             <motion.div
                                key={currentItemIndex}
                                initial={{ opacity: 0, y: 50, scale: 0.5 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -100, scale: 0.5 }}
                                transition={{ duration: 0.5 }}
                                className="p-6 rounded-2xl bg-background shadow-lg border-2 border-primary/20"
                            >
                                <span className="text-5xl">{currentItem.icon}</span>
                                <p className="font-bold text-2xl mt-2 text-primary">{currentItem.name}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {feedback === 'correct' && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1.2 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                            >
                                <Check className="w-24 h-24 text-success/80 bg-background rounded-full p-2" />
                            </motion.div>
                        )}
                         {feedback === 'incorrect' && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                                animate={{ opacity: 1, scale: 1.2, rotate: 0 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                            >
                                <X className="w-24 h-24 text-destructive/80 bg-background rounded-full p-2" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                
                <div>
                     <div className="flex justify-between items-center mb-2">
                        <p className="font-semibold text-primary">Score: {score}</p>
                        <p className="text-sm text-muted-foreground">Item {currentItemIndex + 1} of {items.length}</p>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                        <motion.div 
                            className="bg-primary h-2.5 rounded-full" 
                            initial={{ width: `${(currentItemIndex / items.length) * 100}%` }}
                            animate={{ width: `${((currentItemIndex + 1) / items.length) * 100}%` }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    {(Object.keys(bins) as BinType[]).map(key => {
                        const bin = bins[key];
                        const Icon = bin.icon;
                        return (
                            <motion.div key={key} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button 
                                    onClick={() => handleSort(key)}
                                    className={cn("w-full h-24 flex-col text-lg gap-2", bin.color)}
                                    disabled={!!feedback}
                                >
                                    <Icon className="w-8 h-8" />
                                    {bin.name}
                                </Button>
                            </motion.div>
                        )
                    })}
                </div>
            </CardContent>
        </Card>
    );
}

