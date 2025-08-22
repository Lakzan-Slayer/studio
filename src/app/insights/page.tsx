import { AppLayout } from "@/components/layout/app-layout";
import { TaxInsights } from "@/components/insights/tax-insights";

export default function InsightsPage() {
    return (
        <AppLayout pageTitle="AI Tax Insights">
            <TaxInsights />
        </AppLayout>
    );
}
