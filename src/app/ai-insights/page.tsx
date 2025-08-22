
'use client';

import { AppLayout } from "@/components/layout/app-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Lightbulb } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AiInsightsPage() {
    return (
        <AppLayout pageTitle="AI Tax Insights">
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                         <div className="flex items-center gap-3">
                            <Lightbulb className="h-6 w-6 text-yellow-500" />
                            <div>
                                <CardTitle>AI-Powered Suggestions</CardTitle>
                                <CardDescription>Optimize your tax savings based on your data.</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                         <Alert>
                            <Sparkles className="h-4 w-4" />
                            <AlertTitle>Optimal Tax Regime</AlertTitle>
                            <AlertDescription>
                                Based on your income of ₹1,200,000 and deductions of ₹150,000, the <strong>New Tax Regime</strong> appears to be more beneficial, potentially saving you up to <strong>₹15,600</strong>.
                            </AlertDescription>
                        </Alert>
                         <Alert variant="destructive">
                            <Sparkles className="h-4 w-4" />
                            <AlertTitle>Missed Deduction Opportunity</AlertTitle>
                            <AlertDescription>
                                You have an expense of ₹12,000 for 'Software Subscription' but haven't claimed it. This could be a potential business expense if you are a freelancer.
                            </AlertDescription>
                        </Alert>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
