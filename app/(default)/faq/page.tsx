import dynamic from "next/dynamic";

export const metadata = {
  title: "Faq - Creative",
  description: "Page description",
};

// Use dynamic imports for heavy components
const PageHeader = dynamic(() => import("@/components/page-header"), {
  ssr: false,
});
const Accordion = dynamic(() => import("@/components/accordion"), {
  ssr: false,
});
const Cta = dynamic(() => import("@/components/cta"), {
  ssr: false,
});

export default function Faq() {
  const faqs = [
    {
      title: "When will First Wave AI launch?",
      text: "We launch July 1. But join the waitlist for a chance to participate in the Beta program June 3.",
      active: false,
    },
    {
      title: "Are there any limits to the number of calls?",
      text: "We’re limiting the number of free accounts while we build and refine our product.",
      active: false,
    },
    {
      title: "What does the term “per phone line” mean in the License?",
      text: "Each phone line will forward to First Wave AI. From there we limit the amount of free calls before asking you to upgrade your account. When the free calls have exhausted we’ll remove the call forwarding so your phone line resumes as before. ",
      active: false,
    },
    {
      title: "How is Waitlist different from the beta?",
      text: "The beta is invite only from those on the waitlist. We’re looking for business owners who understand the rapid prototype development cycles.",
      active: true,
    },
    {
      title: "What happens if I don’t renew my license after one year?",
      text: "Your account will automatically renew at the rate that was initially signed up. Feel free to cancel at any time.",
      active: false,
    },
    {
      title: "How does billing work?",
      text: "We bill as soon as you sign up for the next 30 days. Then it continues to bill at your billing cycle you select when signing up. ",
      active: false,
    },
    {
      title: "What is your cancellation or refund policy?",
      text: "We stand behind the value of our product. If you’re not satisfied we’ll cancel immediately and refund the prorated amount for the rest of your billing cycle.",
      active: false,
    },
  ];

  return (
    <>
      <section>
        <div className="pt-32 pb-12 md:pt-44 md:pb-20">
          <div className="px-4 sm:px-6">
            <PageHeader
              className="mb-12 md:mb-20"
              title="Let's talk about software"
              description="Here we provide answers for the most common questions. From registering and accessing your account to payments and paid subscriptions."
            >
              Quick Answers
            </PageHeader>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-1">
                {faqs.map((faq, index) => (
                  <Accordion
                    key={index}
                    title={faq.title}
                    id={`faqs-${index}`}
                    active={faq.active}
                  >
                    {faq.text}
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
