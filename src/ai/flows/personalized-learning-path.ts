'use server';

/**
 * @fileOverview An AI agent that provides personalized learning path suggestions based on user interests and progress.
 *
 * - personalizedLearningPath - A function that suggests learning modules and action challenges.
 * - PersonalizedLearningPathInput - The input type for the personalizedLearningPath function.
 * - PersonalizedLearningPathOutput - The return type for the personalizedLearningPath function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedLearningPathInputSchema = z.object({
  interests: z
    .string()
    .describe('The student’s interests, such as specific environmental topics.'),
  progress: z
    .string()
    .describe(
      'The student’s current progress in the learning modules and action challenges.'
    ),
});
export type PersonalizedLearningPathInput = z.infer<
  typeof PersonalizedLearningPathInputSchema
>;

const PersonalizedLearningPathOutputSchema = z.object({
  suggestedModules: z
    .string()
    .describe('List of suggested learning module names, tailored to interests.'),
  suggestedChallenges: z
    .string()
    .describe(
      'List of suggested action challenge names, tailored to interests.'
    ),
  reasoning: z
    .string()
    .describe('Reasoning behind the suggested modules and challenges.'),
});
export type PersonalizedLearningPathOutput = z.infer<
  typeof PersonalizedLearningPathOutputSchema
>;

export async function personalizedLearningPath(
  input: PersonalizedLearningPathInput
): Promise<PersonalizedLearningPathOutput> {
  return personalizedLearningPathFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedLearningPathPrompt',
  input: {schema: PersonalizedLearningPathInputSchema},
  output: {schema: PersonalizedLearningPathOutputSchema},
  prompt: `You are an AI assistant designed to suggest personalized learning paths for students based on their interests and progress.

  Consider the student's interests and current progress to suggest relevant learning modules and action challenges.
  Explain the reasoning behind each suggestion.

  Student Interests: {{{interests}}}
  Student Progress: {{{progress}}}

  Output the list of suggested learning modules and action challenges, along with the reasoning for each suggestion.  The suggested modules and challenges should be comma separated values.
`,
});

const personalizedLearningPathFlow = ai.defineFlow(
  {
    name: 'personalizedLearningPathFlow',
    inputSchema: PersonalizedLearningPathInputSchema,
    outputSchema: PersonalizedLearningPathOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
