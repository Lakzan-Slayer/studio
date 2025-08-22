
'use client';

import { AppLayout } from "@/components/layout/app-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { User, Calendar, BadgeInfo, Mail, Phone, Home, Landmark, Edit, Save } from "lucide-react";
import { useState } from "react";

const maskSensitiveInfo = (value: string) => {
    if (value.length <= 4) return value;
    return '•'.repeat(value.length - 4) + value.slice(-4);
};

export default function PersonalDetailsPage() {
    const [isEditing, setIsEditing] = useState(false);
    
    // Dummy data for display
    const [details, setDetails] = useState({
        fullName: "John Doe",
        dob: "1990-01-01",
        pan: "ABCDE1234F",
        aadhaar: "123456789012",
        email: "john.doe@example.com",
        phone: "9876543210",
        address: "123, Financial Street, Moneyville, 110001",
        bankAccount: "1234567890123456",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setDetails(prev => ({ ...prev, [id]: value }));
    };

    return (
        <AppLayout pageTitle="Personal Details">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle>Your Information</CardTitle>
                        <CardDescription>Manage your personal and bank details.</CardDescription>
                    </div>
                    <Button variant="outline" size="icon" onClick={() => setIsEditing(!isEditing)}>
                        {isEditing ? <Save className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
                        <span className="sr-only">{isEditing ? 'Save' : 'Edit'}</span>
                    </Button>
                </CardHeader>
                <CardContent>
                    <form className="grid md:grid-cols-2 gap-6">
                        {/* Personal Info Column */}
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="fullName">Full Name</Label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input id="fullName" value={details.fullName} disabled={!isEditing} onChange={handleInputChange} className="pl-10" />
                                </div>
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="dob">Date of Birth</Label>
                                 <div className="relative">
                                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input id="dob" type="date" value={details.dob} disabled={!isEditing} onChange={handleInputChange} className="pl-10" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="pan">PAN Number</Label>
                                <div className="relative">
                                    <BadgeInfo className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input id="pan" value={isEditing ? details.pan : maskSensitiveInfo(details.pan)} disabled={!isEditing} onChange={handleInputChange} className="pl-10" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="aadhaar">Aadhaar Number</Label>
                                <div className="relative">
                                    <BadgeInfo className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input id="aadhaar" value={isEditing ? details.aadhaar : maskSensitiveInfo(details.aadhaar)} disabled={!isEditing} onChange={handleInputChange} className="pl-10" />
                                </div>
                            </div>
                        </div>

                        {/* Contact & Bank Info Column */}
                         <div className="space-y-4">
                             <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input id="email" type="email" value={details.email} disabled={!isEditing} onChange={handleInputChange} className="pl-10" />
                                </div>
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input id="phone" type="tel" value={details.phone} disabled={!isEditing} onChange={handleInputChange} className="pl-10" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="address">Address</Label>
                                 <div className="relative">
                                    <Home className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Textarea id="address" value={details.address} disabled={!isEditing} onChange={handleInputChange} className="pl-10" />
                                </div>
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="bankAccount">Bank Account Number</Label>
                                <div className="relative">
                                    <Landmark className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input id="bankAccount" value={isEditing ? details.bankAccount : maskSensitiveInfo(details.bankAccount)} disabled={!isEditing} onChange={handleInputChange} className="pl-10" />
                                </div>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
             {isEditing && (
                <Button className="fixed bottom-6 right-6 h-12 shadow-lg z-50">
                    <Save className="mr-2 h-5 w-5" />
                    Save Changes
                </Button>
            )}
        </AppLayout>
    );
}
