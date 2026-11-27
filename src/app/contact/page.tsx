import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact · Sunday Market",
};

export default function ContactPage() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
      <section>
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-terracotta">
          Say hello
        </p>
        <h1 className="mt-2 font-serif text-4xl sm:text-5xl">
          We&apos;d love to hear from you.
        </h1>
        <p className="mt-4 text-lg text-ink-soft">
          Questions about an order, a product, or just want to chat about a
          find? Drop us a line and we&apos;ll get back to you within a day.
        </p>
      </section>

      <ContactForm />
    </div>
  );
}
