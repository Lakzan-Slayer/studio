
'use client';

import { AppLayout } from "@/components/layout/app-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Lightbulb, Bot, User } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AiInsightsPage() {
    return (
        <AppLayout pageTitle="AI Tax Insights">
            <div className="grid lg:grid-cols-2 gap-6 items-start">
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

                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <Bot className="h-6 w-6 text-primary" />
                            <div>
                                <CardTitle>AI Tax Advisor</CardTitle>
                                <CardDescription>Example of a chat with our AI assistant.</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Avatar className="h-8 w-8">
                                    <AvatarFallback>U</AvatarFallback>
                                </Avatar>
                                <div className="bg-muted p-3 rounded-lg w-fit max-w-[80%]">
                                    <p className="font-semibold text-sm">You</p>
                                    <p className="text-sm">Is the interest on my home loan fully deductible under the old tax regime?</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 justify-end">
                                <div className="bg-primary text-primary-foreground p-3 rounded-lg w-fit max-w-[80%]">
                                    <p className="font-semibold text-sm">AI Advisor</p>
                                    <p className="text-sm">Under the old tax regime, you can claim a deduction of up to ₹2,00,000 on home loan interest under Section 24(b). Additionally, you can claim a deduction on the principal repayment under Section 80C, up to the limit of ₹1,50,000.</p>
                                </div>
                                 <Avatar className="h-8 w-8 bg-primary text-primary-foreground">
                                    <AvatarFallback><Sparkles className="h-4 w-4" /></AvatarFallback>
                                </Avatar>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
