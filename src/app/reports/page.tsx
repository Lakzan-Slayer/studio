import { AppLayout } from "@/components/layout/app-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Download, ChevronsUpDown, ArrowRight } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Link from "next/link";

export default function ReportsPage() {
    return (
        <AppLayout pageTitle="Reports">
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Generate Financial Reports</CardTitle>
                        <CardDescription>Create and download reports for tax filing or personal review.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid sm:grid-cols-2 gap-4">
                       <div className="flex flex-col gap-4">
                           <Button variant="outline" className="w-full justify-start">
                                IT Return Summary
                                <Download className="ml-auto h-4 w-4" />
                            </Button>
                           <Button variant="outline" className="w-full justify-start">
                                Profit & Loss Statement
                                <Download className="ml-auto h-4 w-4" />
                            </Button>
                           <Button variant="outline" className="w-full justify-start">
                                Expense Breakdown
                                <Download className="ml-auto h-4 w-4" />
                            </Button>
                       </div>
                    </CardContent>
                </Card>

                <Collapsible>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                             <div>
                                <CardTitle>Latest Tax Information</CardTitle>
                                <CardDescription>Key updates on tax rules and deadlines.</CardDescription>
                            </div>
                            <CollapsibleTrigger asChild>
                                <Button variant="ghost" size="sm">
                                    <ChevronsUpDown className="h-4 w-4" />
                                    <span className="sr-only">Toggle</span>
                                </Button>
                            </CollapsibleTrigger>
                        </CardHeader>
                        <CollapsibleContent>
                            <CardContent>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-center justify-between">
                                        <span>Latest Income Tax Slab Rates announced</span>
                                        <Button variant="link" size="sm" asChild>
                                            <Link href="#">View Details <ArrowRight className="ml-1 h-3 w-3" /></Link>
                                        </Button>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span>GST Updates for Q3 2024</span>
                                        <Button variant="link" size="sm" asChild>
                                            <Link href="#">Read More <ArrowRight className="ml-1 h-3 w-3" /></Link>
                                        </Button>
                                    </li>
                                </ul>
                            </CardContent>
                        </CollapsibleContent>
                    </Card>
                </Collapsible>
            </div>
        </AppLayout>
    );
}
