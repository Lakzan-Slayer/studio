import { AppLayout } from "@/components/layout/app-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PlusCircle, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// A simple form placeholder, in a real app this would be a full-fledged form component
const AddTransactionForm = () => (
    <div className="space-y-4 py-4">
        <div>
            <label htmlFor="description" className="text-sm font-medium">Description</label>
            <input id="description" className="w-full mt-1 p-2 border rounded-md" />
        </div>
        <div>
            <label htmlFor="amount" className="text-sm font-medium">Amount</label>
            <input id="amount" type="number" className="w-full mt-1 p-2 border rounded-md" />
        </div>
        <div>
            <label htmlFor="type" className="text-sm font-medium">Type</label>
            <select id="type" className="w-full mt-1 p-2 border rounded-md">
                <option>Income</option>
                <option>Expense</option>
                <option>Tax</option>
            </select>
        </div>
        <div className="flex items-center space-x-2">
            <input id="gst" type="checkbox" />
            <label htmlFor="gst" className="text-sm font-medium">Includes GST</label>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <Info className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>We try to automatically detect taxes based on category and keywords.</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
        <Button className="w-full">Save Transaction</Button>
    </div>
);


export default function TransactionsPage() {
    const transactions = [
        { id: 1, description: "Salary", amount: 5000, type: "Income", date: "2024-07-15", tax: null },
        { id: 2, description: "Office Supplies (incl. GST)", amount: -177, type: "Expense", date: "2024-07-14", tax: "GST" },
        { id: 3, description: "Freelance Project", amount: 800, type: "Income", date: "2024-07-12", tax: "TDS" },
        { id: 4, description: "Client Dinner", amount: -250, type: "Expense", date: "2024-07-11", tax: null },
        { id: 5, description: "Software Subscription", amount: -59, type: "Expense", date: "2024-07-10", tax: "GST" },
        { id: 6, description: "Rent", amount: -1200, type: "Expense", date: "2024-07-10", tax: null },
        { id: 7, description: "TDS Deduction by Client", amount: -80, type: "Tax", date: "2024-07-12", tax: "TDS" },
    ];

    return (
        <AppLayout pageTitle="Transactions">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle>Transaction History</CardTitle>
                        <CardDescription>Manage your income, expenses, and tax payments.</CardDescription>
                    </div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button>
                                <PlusCircle className="mr-2 h-4 w-4" />
                                Add Transaction
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Add a new transaction</DialogTitle>
                                <DialogDescription>
                                    Log your income and expenses to keep your finances up to date.
                                </DialogDescription>
                            </DialogHeader>
                            <AddTransactionForm />
                        </DialogContent>
                    </Dialog>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Description</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Tax</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                                <TableHead>Date</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {transactions.map((tx) => (
                                <TableRow key={tx.id}>
                                    <TableCell className="font-medium">{tx.description}</TableCell>
                                    <TableCell>
                                        <Badge variant={tx.type === 'Income' ? 'default' : tx.type === 'Expense' ? 'destructive' : 'secondary'}
                                               className={tx.type === 'Income' ? 'bg-green-100 text-green-800' : tx.type === 'Expense' ? 'bg-red-100 text-red-800' : ''}>
                                            {tx.type}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{tx.tax ? <Badge variant="outline">{tx.tax}</Badge> : '-'}</TableCell>
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
        </AppLayout>
    );
}
