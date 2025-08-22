import { AppLayout } from "@/components/layout/app-layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

const newsArticles = [
  {
    id: 1,
    title: "Major Changes to GST Rules Announced for E-commerce",
    description: "The GST Council has introduced new regulations that will impact online sellers and marketplaces. Here's what you need to know.",
    category: "Taxation",
    date: "July 28, 2024",
    imageUrl: "https://placehold.co/600x400.png",
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
    description: "The Reserve Bank of India's monetary policy committee decided to maintain the current repo rate, balancing growth and inflation.",
    category: "Economy",
    date: "July 26, 2024",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "banking finance"
  },
  {
    id: 4,
    title: "A Guide to Investing in Small-Cap Funds in 2024",
    description: "Experts weigh in on the potential risks and rewards of adding small-cap funds to your investment portfolio this year.",
    category: "Investing",
    date: "July 25, 2024",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "investment chart"
  }
];

export default function NewsPage() {
    return (
        <AppLayout pageTitle="Financial News">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {newsArticles.map(article => (
                    <Card key={article.id} className="flex flex-col">
                        <CardHeader className="p-0">
                           <Image src={article.imageUrl} alt={article.title} width={600} height={400} className="rounded-t-lg object-cover aspect-video" data-ai-hint={article.aiHint} />
                        </CardHeader>
                        <CardContent className="p-6 flex-1">
                            <Badge variant="secondary" className="mb-2">{article.category}</Badge>
                            <CardTitle className="text-lg font-bold mb-2 leading-snug">
                                <Link href="#" className="hover:underline">
                                    {article.title}
                                </Link>
                            </CardTitle>
                            <CardDescription>{article.description}</CardDescription>
                        </CardContent>
                        <CardFooter className="p-6 pt-0 text-sm text-muted-foreground">
                            {article.date}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </AppLayout>
    );
}
