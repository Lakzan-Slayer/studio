
'use client';

import { AppLayout } from "@/components/layout/app-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Bot, Send, Lightbulb, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useState, useRef, useEffect } from "react";
import { chat } from "@/ai/flows/chat-flow";

interface ChatMessage {
    from: "ai" | "user";
    text: string;
}

export default function AiInsightsPage() {
    const [messages, setMessages] = useState<ChatMessage[]>([
        { from: "ai", text: "Hello! How can I help you with your tax questions today?" },
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: ChatMessage = { from: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const aiResponse = await chat(input);
            const aiMessage: ChatMessage = { from: 'ai', text: aiResponse };
            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            console.error("AI chat error:", error);
            const errorMessage: ChatMessage = { from: 'ai', text: "Sorry, I'm having trouble connecting. Please try again later." };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <AppLayout pageTitle="AI Tax Insights">
            <div className="grid gap-6 lg:grid-cols-2">
                {/* AI Advisor Card */}
                <Card className="flex flex-col">
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <Bot className="h-6 w-6 text-primary" />
                            <div>
                                <CardTitle>AI Tax Advisor</CardTitle>
                                <CardDescription>Ask me anything about taxes.</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent ref={chatContainerRef} className="flex-1 space-y-4 overflow-y-auto p-4 bg-muted/50 rounded-lg">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex items-start gap-3 ${msg.from === 'user' ? 'justify-end' : ''}`}>
                                {msg.from === 'ai' && <AvatarIcon />}
                                <div className={`rounded-lg px-4 py-2 max-w-[80%] ${msg.from === 'ai' ? 'bg-background' : 'bg-primary text-primary-foreground'}`}>
                                    <p className="text-sm">{msg.text}</p>
                                </div>
                                {msg.from === 'user' && <UserIcon />}
                            </div>
                        ))}
                         {isLoading && (
                            <div className="flex items-start gap-3">
                                <AvatarIcon />
                                <div className="rounded-lg px-4 py-2 max-w-[80%] bg-background flex items-center">
                                    <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                                </div>
                            </div>
                        )}
                    </CardContent>
                    <CardFooter className="pt-4">
                        <form onSubmit={handleSendMessage} className="relative w-full">
                            <Input 
                                placeholder="Type your question..." 
                                className="pr-12" 
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                disabled={isLoading}
                            />
                            <Button variant="ghost" size="icon" type="submit" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8" disabled={isLoading || !input.trim()}>
                                <Send className="h-4 w-4" />
                                <span className="sr-only">Send</span>
                            </Button>
                        </form>
                    </CardFooter>
                </Card>

                {/* AI Suggestions Card */}
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
            </div>
        </AppLayout>
    );
}

const AvatarIcon = () => (
    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
        <Bot className="h-5 w-5 text-primary" />
    </div>
);

const UserIcon = () => (
    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center shrink-0">
        <span className="font-semibold text-sm">U</span>
    </div>
);
