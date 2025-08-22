import { AppLayout } from "@/components/layout/app-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


export default function ReportsPage() {
    return (
        <AppLayout pageTitle="Reports">
            <div className="grid gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Generate Financial Reports</CardTitle>
                        <CardDescription>Create reports suitable for tax filing or personal financial review.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium">Report Type</label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select report type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="tax-summary">IT Return Summary</SelectItem>
                                        <SelectItem value="pnl">Profit & Loss Statement</SelectItem>
                                        <SelectItem value="expense-breakdown">Expense Breakdown</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <label className="text-sm font-medium">Time Period</label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select time period" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="ytd">Year to Date</SelectItem>
                                        <SelectItem value="last-year">Last Financial Year</SelectItem>
                                        <SelectItem value="all-time">All Time</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <Button>
                            <Download className="mr-2 h-4 w-4" />
                            Generate Report
                        </Button>
                    </CardContent>
                </Card>

                 <Card>
                    <CardHeader>
                        <CardTitle>Latest Tax Information</CardTitle>
                        <CardDescription>Stay informed about the latest tax slab rates and rule changes.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex justify-between"><span>Latest Income Tax Slab Rates announced:</span> <Button variant="link" size="sm">View Details</Button></li>
                            <li className="flex justify-between"><span>GST Updates for Q3 2024:</span> <Button variant="link" size="sm">Read More</Button></li>
                            <li className="flex justify-between"><span>RBI Policy Changes - July 2024:</span> <Button variant="link" size="sm">Learn More</Button></li>
                            <li className="flex justify-between"><span>Tax filing deadline extended:</span> <Button variant="link" size="sm">Check New Date</Button></li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
