import { AppLayout } from "@/components/layout/app-layout";
import { MetricCard } from "@/components/dashboard/metric-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingUp, TrendingDown, FileDigit, PiggyBank, PlusCircle } from "lucide-react";

export default function DashboardPage() {
  const recentTransactions = [
    { id: 1, description: "Salary", amount: 5000, type: "Income", date: "2024-07-15" },
    { id: 2, description: "Groceries", amount: -150, type: "Expense", date: "2024-07-14" },
    { id: 3, description: "Freelance Project", amount: 800, type: "Income", date: "2024-07-12" },
    { id: 4, description: "Rent", amount: -1200, type: "Expense", date: "2024-07-10" },
    { id: 5, description: "TDS Deduction", amount: -250, type: "Tax", date: "2024-07-15" },
  ];
  
  return (
    <AppLayout pageTitle="Dashboard">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard title="Total Income" value="$5,800" icon={TrendingUp} color="text-green-600" />
        <MetricCard title="Total Expenses" value="$1,350" icon={TrendingDown} color="text-red-600" />
        <MetricCard title="Tax Payable" value="$250" icon={FileDigit} color="text-red-600" />
        <MetricCard title="Total Savings" value="$4,200" icon={PiggyBank} color="text-green-600" />
      </div>

      <div className="mt-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Here's a list of your recent financial activities.</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <PlusCircle className="mr-2 h-4 w-4" />
              Quick Add
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Description</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentTransactions.map((tx) => (
                  <TableRow key={tx.id}>
                    <TableCell className="font-medium">{tx.description}</TableCell>
                    <TableCell>{tx.type}</TableCell>
                    <TableCell className={`text-right font-semibold ${tx.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      ${Math.abs(tx.amount).toFixed(2)}
                    </TableCell>
                    <TableCell>{tx.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
