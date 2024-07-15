import { DemoCookieSettings } from "@/components/form-cookie-settings";
import { DemoPaymentMethod } from "@/components/form-payment-methods";
import { DemoReportAnIssue } from "@/components/form-report-issue";

export default function Form() {
  return (
    <section className="grid md:grid-cols-2 gap-8 pt-8 container mx-auto">
      <div>
        <DemoPaymentMethod />
      </div>
      <div>
        <DemoCookieSettings />
      </div>
      <div>
        <DemoReportAnIssue />
      </div>
    </section>
  );
}
