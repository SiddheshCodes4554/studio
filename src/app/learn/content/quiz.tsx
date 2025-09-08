
'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { CheckCircle, XCircle } from 'lucide-react';

type Question = {
  question: string;
  options: string[];
  answer: string;
};

type QuizProps = {
  questions: Question[];
  onComplete: () => void;
};

export function Quiz({ questions, onComplete }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>(Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (option: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = option;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, selected, index) => {
      return selected === questions[index].answer ? score + 1 : score;
    }, 0);
  };

  if (showResults) {
    const score = calculateScore();
    const total = questions.length;
    const isPassing = (score / total) >= 0.7;

    return (
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-center mb-4">Quiz Results</h2>
          <p className="text-center text-xl mb-6">
            You scored {score} out of {total}.
          </p>
          {isPassing ? (
             <div className="text-center p-4 bg-success/10 text-success rounded-lg">
                <CheckCircle className="w-12 h-12 mx-auto mb-2" />
                <p className="font-semibold">Congratulations! You passed the quiz.</p>
             </div>
          ) : (
            <div className="text-center p-4 bg-destructive/10 text-destructive rounded-lg">
                <XCircle className="w-12 h-12 mx-auto mb-2" />
                <p className="font-semibold">Keep trying! You need to score at least 70% to pass.</p>
            </div>
          )}
           <div className="mt-6 space-y-4">
            {questions.map((q, index) => (
                <div key={index} className={`p-3 rounded-lg ${selectedAnswers[index] === q.answer ? 'bg-success/10' : 'bg-destructive/10'}`}>
                    <p className="font-semibold">{q.question}</p>
                    <p className="text-sm">Your answer: {selectedAnswers[index] || 'Not answered'}</p>
                    {selectedAnswers[index] !== q.answer && <p className="text-sm font-bold">Correct answer: {q.answer}</p>}
                </div>
            ))}
           </div>
           {isPassing ? (
            <Button onClick={onComplete} className="w-full mt-6">Complete Module Section</Button>
           ) : (
            <Button onClick={() => { setShowResults(false); setCurrentQuestionIndex(0); setSelectedAnswers(Array(questions.length).fill(null)); }} className="w-full mt-6">
                Try Again
            </Button>
           )}
        </CardContent>
      </Card>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const selectedOption = selectedAnswers[currentQuestionIndex];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{`Question ${currentQuestionIndex + 1} of ${questions.length}`}</h3>
        <div className="w-full bg-muted rounded-full h-2.5 max-w-xs">
            <div className="bg-primary h-2.5 rounded-full" style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}></div>
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <p className="text-xl font-semibold mb-6">{currentQuestion.question}</p>
          <RadioGroup value={selectedOption || ''} onValueChange={handleAnswerSelect} className="space-y-4">
            {currentQuestion.options.map((option, index) => (
              <Label
                key={index}
                className={`flex items-center p-4 rounded-lg border cursor-pointer transition-colors ${
                  selectedOption === option ? 'border-primary bg-primary/10' : 'border-border'
                }`}
              >
                <RadioGroupItem value={option} id={`q${currentQuestionIndex}-o${index}`} className="mr-4" />
                {option}
              </Label>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>
      
      <Button onClick={handleNext} disabled={!selectedOption} className="w-full">
        {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
      </Button>
    </div>
  );
}
