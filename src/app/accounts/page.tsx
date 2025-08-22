import { AppLayout } from "@/components/layout/app-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Landmark, PlusCircle, Trash2 } from "lucide-react";
import Image from "next/image";

const linkedAccounts = [
  { id: 1, bankName: "City Bank", accountNumber: "******1234", logoUrl: "https://placehold.co/40x40.png", aiHint: "bank logo" },
  { id: 2, bankName: "National Bank", accountNumber: "******5678", logoUrl: "https://placehold.co/40x40.png", aiHint: "bank logo" },
];

export default function AccountsPage() {
    return (
        <AppLayout pageTitle="Linked Accounts">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle>Bank Accounts</CardTitle>
                        <CardDescription>Manage your linked bank and UPI accounts.</CardDescription>
                    </div>
                    <Button>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add New Account
                    </Button>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {linkedAccounts.map(account => (
                            <div key={account.id} className="flex items-center justify-between p-4 border rounded-lg bg-secondary/30">
                                <div className="flex items-center gap-4">
                                    <Image src={account.logoUrl} alt={account.bankName} width={40} height={40} data-ai-hint={account.aiHint} className="rounded-full" />
                                    <div>
                                        <p className="font-semibold">{account.bankName}</p>
                                        <p className="text-sm text-muted-foreground">{account.accountNumber}</p>
                                    </div>
                                </div>
                                <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive/80">
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                        ))}
                         {linkedAccounts.length === 0 && (
                            <div className="text-center py-12 text-muted-foreground">
                                <Landmark className="mx-auto h-12 w-12" />
                                <p className="mt-4">No bank accounts linked yet.</p>
                                <p>Add an account to start tracking transactions automatically.</p>
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </AppLayout>
    );
}