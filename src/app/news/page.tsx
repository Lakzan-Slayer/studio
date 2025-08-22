import { AppLayout } from "@/components/layout/app-layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const newsArticles = [
  {
    id: 1,
    title: "Major Changes to GST Rules Announced for E-commerce",
    description: "The GST Council has introduced new regulations that will impact online sellers and marketplaces...",
    category: "Taxation",
    date: "July 28, 2024",
    imageUrl: "https://images.unsplash.com/photo-1534951009808-766178b47a4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxGaW5hbmNlfGVufDB8fHx8MTc1NTg0MDA4OHww&ixlib=rb-4.1.0&q=80&w=1080",
    aiHint: "tax documents"
  },
  {
    id: 2,
    title: "Stock Market Hits Record High Amidst Positive Economic Indicators",
    description: "Investor confidence is soaring as key economic data suggests strong growth in the coming quarter.",
    category: "Markets",
    date: "July 27, 2024",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "stock market"
  },
  {
    id: 3,
    title: "RBI Holds Interest Rates Steady, Cites Inflation Concerns",
    description: "The Reserve Bank of India's monetary policy committee decided to maintain the current repo rate...",
    category: "Economy",
    date: "July 26, 2024",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "banking finance"
  },
];

export default function NewsPage() {
    return (
        <AppLayout pageTitle="Financial News">
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Latest News</CardTitle>
                        <CardDescription>Stay updated with the latest financial news and regulations.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                         {newsArticles.map(article => (
                            <Card key={article.id} className="flex flex-col overflow-hidden">
                                <Image src={article.imageUrl} alt={article.title} width={600} height={400} className="object-cover aspect-video" data-ai-hint={article.aiHint} />
                                <div className="p-4 flex flex-col flex-1">
                                    <Badge variant="secondary" className="mb-2 w-fit">{article.category}</Badge>
                                    <p className="text-lg font-bold mb-2 leading-snug flex-1">
                                        <Link href="#" className="hover:underline">
                                            {article.title}
                                        </Link>
                                    </p>
                                    <p className="text-sm text-muted-foreground mb-4">{article.description}</p>
                                    <p className="text-xs text-muted-foreground mt-auto">{article.date}</p>
                                </div>
                            </Card>
                        ))}
                    </CardContent>
                     <CardFooter>
                        <Button variant="outline">See More</Button>
                    </CardFooter>
                </Card>
            </div>
        </AppLayout>
    );
}
