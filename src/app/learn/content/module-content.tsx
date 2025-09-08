
"use client";

import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { CheckCircle, Lock, PlayCircle } from 'lucide-react';
import { type LearningModule } from '@/lib/modules-data';
import { Quiz } from './quiz';
import { CarbonFootprintCalculator } from './carbon-footprint-calculator';
import { WasteSortingGame } from './waste-sorting-game';

type ModuleContentProps = {
  module: LearningModule;
};

const activityComponents: { [key: string]: React.ComponentType<{ onComplete: () => void }> } = {
  'CarbonFootprintCalculator': CarbonFootprintCalculator,
  'WasteSortingGame': WasteSortingGame,
};

export function ModuleContent({ module }: ModuleContentProps) {
  const [completedItems, setCompletedItems] = useState<string[]>([]);
  const [activeItem, setActiveItem] = useState(module.content[0]?.title || '');

  const handleComplete = (title: string) => {
    if (!completedItems.includes(title)) {
      const newCompletedItems = [...completedItems, title];
      setCompletedItems(newCompletedItems);

      const currentIndex = module.content.findIndex(item => item.title === title);
      const nextItem = module.content[currentIndex + 1];
      if (nextItem) {
        setActiveItem(nextItem.title);
      }
    }
  };
  
  const isItemLocked = (index: number): boolean => {
    if (index === 0) return false;
    const prevItem = module.content[index - 1];
    return !completedItems.includes(prevItem.title);
  }

  return (
    <div>
      <h3 className="text-xl font-semibold text-primary mb-4">Module Content</h3>
      <Accordion type="single" collapsible defaultValue={activeItem} value={activeItem} onValueChange={setActiveItem} className="w-full">
        {module.content.map((item, index) => {
          const isCompleted = completedItems.includes(item.title);
          const isLocked = isItemLocked(index);
          const Icon = isCompleted ? CheckCircle : isLocked ? Lock : PlayCircle;
          
          return (
            <AccordionItem key={item.title} value={item.title} disabled={isLocked}>
              <AccordionTrigger disabled={isLocked} className="text-left disabled:cursor-not-allowed disabled:opacity-50 disabled:no-underline">
                <div className="flex items-center gap-4">
                  <Icon className={`w-6 h-6 shrink-0 ${isCompleted ? 'text-success' : isLocked ? 'text-muted-foreground' : 'text-primary'}`} />
                  <span className="flex-1 font-semibold">{item.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="prose dark:prose-invert max-w-none p-4 border-l-4 border-primary/20 ml-5">
                {item.type === 'reading' && (
                    <>
                        <div dangerouslySetInnerHTML={{ __html: item.content as string }} />
                        <Button onClick={() => handleComplete(item.title)} className="mt-6" disabled={isCompleted}>
                            {isCompleted ? 'Completed' : 'Mark as Complete'}
                        </Button>
                    </>
                )}
                
                {item.type === 'activity' && typeof item.content === 'string' && activityComponents[item.content] && (
                    React.createElement(activityComponents[item.content], { onComplete: () => handleComplete(item.title) })
                )}

                {item.type === 'quiz' && Array.isArray(item.content) && (
                    <Quiz questions={item.content} onComplete={() => handleComplete(item.title)} />
                )}

              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
