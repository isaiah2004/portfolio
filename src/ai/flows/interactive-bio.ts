'use server';

/**
 * @fileOverview An AI agent that answers questions about Paul Isaiah based on the information on the portfolio website.
 *
 * - getInteractiveBio - A function that handles the question answering process.
 * - GetInteractiveBioInput - The input type for the getInteractiveBio function.
 * - GetInteractiveBioOutput - The return type for the getInteractiveBio function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GetInteractiveBioInputSchema = z.object({
  question: z.string().describe('The question about Paul Isaiah.'),
});
export type GetInteractiveBioInput = z.infer<typeof GetInteractiveBioInputSchema>;

const GetInteractiveBioOutputSchema = z.object({
  answer: z.string().describe('The answer to the question about Paul Isaiah.'),
});
export type GetInteractiveBioOutput = z.infer<typeof GetInteractiveBioOutputSchema>;

export async function getInteractiveBio(input: GetInteractiveBioInput): Promise<GetInteractiveBioOutput> {
  return interactiveBioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'interactiveBioPrompt',
  input: {schema: GetInteractiveBioInputSchema},
  output: {schema: GetInteractiveBioOutputSchema},
  prompt: `You are an AI assistant that answers questions about Paul Isaiah based on the information provided.

  Here is some information about Paul Isaiah:

  I am a final-year Computer Science and Engineering student at Karunya Institute of Technology and Sciences, set to graduate in June 2025. My journey in technology is driven by a deep fascination with artificial intelligence, machine learning, and robotics.

My experience includes an AI/ML internship at Odyssey Therapeia, where I built a Generative AI-powered RAG system, and leading the IoT and Robotics Club at my university, where I mentored over 150 students. I thrive on challenges, whether it's winning a national hackathon like the Smart India Hackathon 2024 or developing a custom terminal-based IDE from scratch just to improve my workflow.

I am proficient in Python, JavaScript, and various AI frameworks like LangChain and TensorFlow. I'm always eager to learn and apply new technologies to solve complex problems.

I led a team to build a universal programming kit for Police Radios at Smart India Hackathon (SIH-2024).

I built a six-legged robot featuring a 3D-printed body and 18 degrees of freedom and integrated multi-modal capabilities by combining computer vision with Large Language Models (LLMs).

I designed and built a personal IDE using the Textual framework in Python to enhance productivity on the Linux terminal.

I built a fully interactive Rubik's Cube simulation built with the Ursina game engine, including auto-scramble and auto-solve functions.

  Question: {{{question}}}

  Answer:`, 
});

const interactiveBioFlow = ai.defineFlow(
  {
    name: 'interactiveBioFlow',
    inputSchema: GetInteractiveBioInputSchema,
    outputSchema: GetInteractiveBioOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
