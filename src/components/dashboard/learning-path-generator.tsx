"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Wand2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  PersonalizedLearningPathInput,
  PersonalizedLearningPathOutput,
  personalizedLearningPath,
} from "@/ai/flows/personalized-learning-path";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "../ui/skeleton";
import { Badge } from "../ui/badge";

const formSchema = z.object({
  interests: z.string().min(10, "Please tell us a bit more about your interests."),
  progress: z.string().min(10, "Please describe your current progress."),
});

export function LearningPathGenerator() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PersonalizedLearningPathOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interests: "",
      progress: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const output = await personalizedLearningPath(values as PersonalizedLearningPathInput);
      setResult(output);
    } catch (e) {
      setError("Failed to generate learning path. Please try again.");
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
            <Wand2 className="w-6 h-6 text-accent"/>
            <CardTitle className="font-headline">Personalized Learning Path</CardTitle>
        </div>
        <CardDescription>
          Let our AI suggest the next steps in your eco-journey.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="interests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Interests</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., 'I'm passionate about marine life, reducing plastic waste, and sustainable agriculture.'"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="progress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Progress</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., 'Completed the 'Intro to Recycling' module and the 'Beach Cleanup' challenge.'"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={loading}>
                {loading ? "Generating..." : "Generate My Path"}
              </Button>
            </form>
          </Form>

          <div>
            <h3 className="font-semibold mb-4 text-primary">Your Suggested Path:</h3>
            {loading && <LoadingState />}
            {error && <p className="text-destructive">{error}</p>}
            {result && <ResultDisplay result={result} />}
            {!loading && !result && !error && (
              <div className="p-8 border-2 border-dashed rounded-lg text-center text-muted-foreground">
                Your personalized path will appear here.
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function LoadingState() {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-1/2" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-3/4" />
         <Skeleton className="h-8 w-1/3 mt-4" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-2/3" />
      </div>
    );
  }

function ResultDisplay({ result }: { result: PersonalizedLearningPathOutput }) {
    const modules = result.suggestedModules.split(',').map(s => s.trim()).filter(Boolean);
    const challenges = result.suggestedChallenges.split(',').map(s => s.trim()).filter(Boolean);

    return (
      <div className="space-y-6">
        <div>
          <h4 className="font-semibold text-lg text-primary mb-2">Suggested Modules</h4>
          <div className="flex flex-wrap gap-2">
            {modules.map((module, i) => <Badge key={i} variant="secondary" className="text-base py-1 px-3">{module}</Badge>)}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-lg text-primary mb-2">Suggested Challenges</h4>
          <div className="flex flex-wrap gap-2">
            {challenges.map((challenge, i) => <Badge key={i} variant="default" className="bg-success hover:bg-success/90 text-base py-1 px-3">{challenge}</Badge>)}
          </div>
        </div>
        <div>
            <h4 className="font-semibold text-lg text-primary mb-2">Reasoning</h4>
            <p className="text-sm text-foreground/80">{result.reasoning}</p>
        </div>
      </div>
    );
  }
