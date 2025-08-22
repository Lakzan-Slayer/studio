import { AppLayout } from "@/components/layout/app-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, Download, Save } from "lucide-react";
import { TaxPieChart } from "@/components/dashboard/tax-pie-chart";

const taxSlabs = {
  new: [
    { upTo: 300000, rate: 0 },
    { upTo: 600000, rate: 0.05 },
    { upTo: 900000, rate: 0.10 },
    { upTo: 1200000, rate: 0.15 },
    { upTo: 1500000, rate: 0.20 },
    { upTo: Infinity, rate: 0.30 },
  ],
  old: [
    { upTo: 250000, rate: 0 },
    { upTo: 500000, rate: 0.05 },
    { upTo: 1000000, rate: 0.20 },
    { upTo: Infinity, rate: 0.30 },
  ],
};

const calculateTax = (income: number, deductions: number, regime: 'old' | 'new') => {
  const taxableIncome = Math.max(0, income - deductions);
  const slabs = taxSlabs[regime];
  let tax = 0;
  let incomeRemaining = taxableIncome;
  let lastLimit = 0;

  for (const slab of slabs) {
    const taxableInSlab = Math.min(incomeRemaining, slab.upTo - lastLimit);
    tax += taxableInSlab * slab.rate;
    incomeRemaining -= taxableInSlab;
    lastLimit = slab.upTo;
    if (incomeRemaining <= 0) break;
  }
  return { taxableIncome, tax };
};


export default function TaxCalculatorPage() {
    // These would typically be state variables
    const annualIncome = 1200000;
    const deductions = 150000;
    const taxRegime = 'new';
    
    const { taxableIncome, tax } = calculateTax(annualIncome, deductions, taxRegime as 'old' | 'new');

    const chartData = [
        { name: 'Post-Tax Income', value: taxableIncome - tax },
        { name: 'Tax Payable', value: tax },
        { name: 'Deductions', value: deductions },
    ];

    return (
        <AppLayout pageTitle="Tax Calculator">
            <div className="grid gap-6 md:grid-cols-3">
                {/* Inputs Column */}
                <div className="md:col-span-2 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Income & Deductions</CardTitle>
                            <CardDescription>Enter your financial details to calculate your tax.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="annual-income">Annual Income (INR)</Label>
                                    <Input id="annual-income" type="number" placeholder="e.g., 1200000" defaultValue={annualIncome} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="deductions">Deductions (INR)</Label>
                                    <Input id="deductions" type="number" placeholder="e.g., 150000" defaultValue={deductions} />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="tax-regime">Tax Regime</Label>
                                <Select defaultValue={taxRegime}>
                                    <SelectTrigger id="tax-regime">
                                        <SelectValue placeholder="Select regime" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="new">New Tax Regime</SelectItem>
                                        <SelectItem value="old">Old Tax Regime</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </CardContent>
                        <CardFooter>
                           <Button>Calculate Tax</Button>
                        </CardFooter>
                    </Card>

                    <Alert>
                        <Info className="h-4 w-4" />
                        <AlertTitle>Tax Updates</AlertTitle>
                        <AlertDescription>
                            The latest tax laws for FY 2024-25 are now in effect. The new regime is the default, but you can opt for the old one.
                        </AlertDescription>
                    </Alert>
                </div>

                {/* Results Column */}
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Tax Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="text-center">
                                <Label className="text-sm text-muted-foreground">Tax Payable</Label>
                                <p className="text-3xl font-bold">₹{tax.toLocaleString('en-IN')}</p>
                            </div>
                             <div className="text-center">
                                <Label className="text-sm text-muted-foreground">Taxable Income</Label>
                                <p className="text-2xl font-semibold">₹{taxableIncome.toLocaleString('en-IN')}</p>
                            </div>
                           
                            <div className="h-64">
                                <TaxPieChart data={chartData} />
                            </div>
                        </CardContent>
                        <CardFooter className="flex gap-2">
                            <Button variant="outline" className="w-full">
                                <Save className="mr-2 h-4 w-4" /> Save
                            </Button>
                            <Button variant="outline" className="w-full">
                                <Download className="mr-2 h-4 w-4" /> Export
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}
