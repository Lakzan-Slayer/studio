'use server';

/**
 * @fileOverview AI-powered tax-saving suggestions flow.
 *
 * - getTaxSavingSuggestions - A function that generates tax saving suggestions.
 * - TaxSavingSuggestionsInput - The input type for the getTaxSavingSuggestions function.
 * - TaxSavingSuggestionsOutput - The return type for the getTaxSavingSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TaxSavingSuggestionsInputSchema = z.object({
  financialData: z
    .string()
    .describe(
      'A detailed description of the user financial data, including income, expenses, investments, and tax payments.'
    ),
});
export type TaxSavingSuggestionsInput = z.infer<typeof TaxSavingSuggestionsInputSchema>;

const TaxSavingSuggestionsOutputSchema = z.object({
  suggestions: z
    .string()
    .describe(
      'Personalized tax-saving suggestions based on the user financial data.'
    ),
  overpaidTax: z
    .string()
    .optional()
    .describe(
      'Highlights any overpaid tax with clear explanations of why taxes might have been overpaid and steps to address the issue.'
    ),
});
export type TaxSavingSuggestionsOutput = z.infer<typeof TaxSavingSuggestionsOutputSchema>;

export async function getTaxSavingSuggestions(
  input: TaxSavingSuggestionsInput
): Promise<TaxSavingSuggestionsOutput> {
  return taxSavingSuggestionsFlow(input);
}

const taxSavingSuggestionsPrompt = ai.definePrompt({
  name: 'taxSavingSuggestionsPrompt',
  input: {schema: TaxSavingSuggestionsInputSchema},
  output: {schema: TaxSavingSuggestionsOutputSchema},
  prompt: `You are an AI-powered financial advisor specializing in tax optimization. Based on the user's financial data, provide personalized tax-saving suggestions, legal deductions, and investment opportunities to minimize their tax liability and maximize savings.

Financial Data: {{{financialData}}}

In addition, check for instances where taxes might have been overpaid. If you identify any, provide clear explanations of why this might have occurred and the steps the user can take to rectify the situation.
`,
});

const taxSavingSuggestionsFlow = ai.defineFlow(
  {
    name: 'taxSavingSuggestionsFlow',
    inputSchema: TaxSavingSuggestionsInputSchema,
    outputSchema: TaxSavingSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await taxSavingSuggestionsPrompt(input);
    return output!;
  }
);
