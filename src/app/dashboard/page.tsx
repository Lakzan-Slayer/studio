import { AppLayout } from "@/components/layout/app-layout";
import { MetricCard } from "@/components/dashboard/metric-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingUp, TrendingDown, FileDigit, PiggyBank, Plus, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  const recentTransactions = [
    { id: 1, description: "Salary", amount: 5000, type: "Income", date: "2024-07-15" },
    { id: 2, description: "Groceries", amount: -150, type: "Expense", date: "2024-07-14" },
    { id: 3, description: "Freelance Project", amount: 800, type: "Income", date: "2024-07-12" },
    { id: 4, description: "Rent", amount: -1200, type: "Expense", date: "2024-07-10" },
  ];
  
  return (
    <AppLayout pageTitle="Dashboard">
      <div className="grid gap-4 md:grid-cols-2">
        <MetricCard title="Total Income" value="₹5,800" icon={TrendingUp} change="+20.1%" changeColor="text-green-500" />
        <MetricCard title="Total Expenses" value="₹1,350" icon={TrendingDown} change="+5.2%" changeColor="text-red-500" />
        <MetricCard title="Tax Payable" value="₹250" icon={FileDigit} change="-2.1%" changeColor="text-green-500" />
        <MetricCard title="Total Savings" value="₹4,200" icon={PiggyBank} change="+15.8%" changeColor="text-green-500" />
      </div>

      <div className="mt-6 relative">
         <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Your latest financial activities.</CardDescription>
            </div>
            <Button variant="ghost" size="sm" asChild>
                <Link href="/transactions">
                    See All
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
                <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>Description</TableHead>
                    <TableHead className="hidden sm:table-cell">Type</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {recentTransactions.map((tx) => (
                    <TableRow key={tx.id}>
                        <TableCell className="font-medium">{tx.description}</TableCell>
                        <TableCell className="hidden sm:table-cell">
                        <Badge variant={tx.type === 'Income' ? 'income' : 'destructive'}>{tx.type}</Badge>
                        </TableCell>
                        <TableCell className={`text-right font-semibold ${tx.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {tx.amount > 0 ? '+' : '-'}₹{Math.abs(tx.amount).toFixed(2)}
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </div>
          </CardContent>
        </Card>
      </div>

      <Button asChild className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50">
          <Link href="/transactions/new">
            <Plus className="h-6 w-6" />
            <span className="sr-only">Add Transaction</span>
          </Link>
      </Button>

    </AppLayout>
  );
}
