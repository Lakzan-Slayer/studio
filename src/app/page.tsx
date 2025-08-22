import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MountainIcon, BotIcon, TrendingUpIcon, FileTextIcon, NewspaperIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="h-6 w-6 text-primary" />
          <span className="sr-only">FinTrackr</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/login" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Sign In
          </Link>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    Intelligent Finance Tracking for Modern Times
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    FinTrackr helps you manage your finances with ease, from transaction logging to tax-saving insights.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/signup">Get Started</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/login">Sign In</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="https://placehold.co/600x400.png"
                width="600"
                height="400"
                alt="FinTrackr Dashboard"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                data-ai-hint="finance dashboard"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Everything you need to manage your finances</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform offers a comprehensive suite of tools to help you stay on top of your financial life.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none mt-12">
              <div className="grid gap-1 text-center">
                <TrendingUpIcon className="h-10 w-10 mx-auto text-primary" />
                <h3 className="text-lg font-bold">Metrics Dashboard</h3>
                <p className="text-sm text-muted-foreground">Visualize your income, expenses, and savings with our intuitive dashboard.</p>
              </div>
              <div className="grid gap-1 text-center">
                <FileTextIcon className="h-10 w-10 mx-auto text-primary" />
                <h3 className="text-lg font-bold">Easy Reporting</h3>
                <p className="text-sm text-muted-foreground">Generate reports for tax filing and financial planning with a single click.</p>
              </div>
              <div className="grid gap-1 text-center">
                <NewspaperIcon className="h-10 w-10 mx-auto text-primary" />
                <h3 className="text-lg font-bold">Financial News</h3>
                <p className="text-sm text-muted-foreground">Stay updated with the latest financial news and changes in tax regulations.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 FinTrackr. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
