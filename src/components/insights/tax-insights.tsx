"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { getTaxSavingSuggestions, type TaxSavingSuggestionsOutput } from "@/ai/flows/tax-saving-suggestions";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { BotIcon, Lightbulb, Loader2, FileWarning } from "lucide-react";

const formSchema = z.object({
  financialData: z.string().min(50, {
    message: "Please provide a more detailed description of your financial data.",
  }),
});

export function TaxInsights() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<TaxSavingSuggestionsOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      financialData: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setResult(null);
    setError(null);
    startTransition(async () => {
      try {
        const res = await getTaxSavingSuggestions(values);
        setResult(res);
      } catch (e) {
        setError("An error occurred while generating insights. Please try again.");
        console.error(e);
      }
    });
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <BotIcon className="h-6 w-6 text-primary" />
            <CardTitle>Your AI Tax Advisor</CardTitle>
          </div>
          <CardDescription>
            Describe your financial situation, and our AI will provide personalized tax-saving suggestions. Include details about your income, major expenses, investments, and any tax already paid.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="financialData"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Financial Data</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., I'm a salaried software engineer with an annual income of $120,000. I invest in 401k, have a mortgage of $2,500/month, and do some freelance work on the side..."
                        className="min-h-[200px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isPending} className="w-full">
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  "Get Suggestions"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {isPending && (
          <Card className="flex flex-col items-center justify-center p-8">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <p className="mt-4 text-muted-foreground">Analyzing your data...</p>
          </Card>
        )}
        {error && <Card className="p-4 bg-destructive text-destructive-foreground">{error}</Card>}
        {result && (
          <>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                    <Lightbulb className="h-6 w-6 text-yellow-500" />
                    <CardTitle>Tax-Saving Suggestions</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none text-card-foreground">
                  <p>{result.suggestions}</p>
              </CardContent>
            </Card>
            {result.overpaidTax && (
              <Card className="border-yellow-500/50">
                <CardHeader>
                   <div className="flex items-center gap-2">
                     <FileWarning className="h-6 w-6 text-yellow-500" />
                     <CardTitle>Potential Overpaid Tax</CardTitle>
                   </div>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none text-card-foreground">
                    <p>{result.overpaidTax}</p>
                </CardContent>
              </Card>
            )}
          </>
        )}
      </div>
    </div>
  );
}
