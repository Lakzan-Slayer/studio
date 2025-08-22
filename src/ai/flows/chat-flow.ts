
'use server';

/**
 * @fileoverview A simple AI chat flow.
 *
 * This file defines a Genkit flow that takes a user's message as input
 * and returns a response from an AI model.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const ChatInputSchema = z.string();
const ChatOutputSchema = z.string();

export async function chat(prompt: string): Promise<string> {
    return chatFlow(prompt);
}

const chatPrompt = ai.definePrompt({
    name: 'chatPrompt',
    input: { schema: ChatInputSchema },
    output: { schema: ChatOutputSchema },
    prompt: `You are a friendly and helpful AI tax advisor. Your goal is to provide accurate and easy-to-understand information about Indian tax regulations.

    User's question: {{{prompt}}}
    
    Your answer:`,
});

const chatFlow = ai.defineFlow(
    {
        name: 'chatFlow',
        inputSchema: ChatInputSchema,
        outputSchema: ChatOutputSchema,
    },
    async (prompt) => {
        const llmResponse = await chatPrompt(prompt);
        return llmResponse.output!;
    }
);
