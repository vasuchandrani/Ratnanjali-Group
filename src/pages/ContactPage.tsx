import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/RevealOnScroll";
import { Mail, Phone, MapPin } from "lucide-react";
import { contactData } from "@/data/contact";
import { ShlokaKicker } from "@/components/heritage/ShlokaKicker";
import { HeritageDivider } from "@/components/heritage/HeritageDivider";
import { ScrollIndicator } from "@/components/site/ScrollIndicator";

export function ContactPage() {
  const { hero, form, office } = contactData;

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-basalt text-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://cdn.sanity.io/images/e4hmmdtc/production/4c15fc83a23a9dfe34aa28432000899eb5223c4b-622x350.jpg"
            alt="Cover background"
            className="h-full w-full object-cover opacity-60 blur-[5px] scale-105"
          />
          {/* Dark overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-basalt/60 via-basalt/30 to-basalt/80" />
          <div className="absolute inset-0 bg-grain-dark pointer-events-none" />
          <div className="absolute inset-0 bg-jali-dark pointer-events-none opacity-15" />
        </div>

        <div className="container-x relative z-10 mx-auto max-w-[1400px] flex flex-col items-center justify-center text-center">
          <div className="flex flex-col items-center justify-center">
            <div className="opacity-0 animate-[fade-up_0.8s_ease-out_.5s_forwards] w-full flex justify-center">
              <ShlokaKicker light className="mb-6">
                Open to every visitor,<br className="sm:hidden" /> every question, every dream
              </ShlokaKicker>
            </div>
            <h1 className="max-w-4xl font-display text-3xl leading-[1.02] sm:text-6xl lg:text-7xl tracking-wide text-gold-soft font-semibold opacity-0 animate-[fade-up_1s_ease-out_.6s_forwards]">
              Connect With Us
            </h1>
            <p className="mt-6 max-w-xl mx-auto font-body text-base leading-[1.7] text-gold-soft/60 sm:text-lg opacity-0 animate-[fade-up_0.8s_ease-out_.9s_forwards]">
              Begin a conversation with our relationship managers<br className="sm:hidden" /> or visit our head office in Ahmedabad.
            </p>
          </div>
          <div className="mt-12 w-full max-w-md mx-auto opacity-0 animate-[fade-in_1.2s_ease-out_1.2s_forwards]">
            <HeritageDivider variant="chakra" />
          </div>
        </div>
        <ScrollIndicator />
      </section>

      {/* Form + Office */}
      <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-jali pointer-events-none opacity-30" />

        <div className="container-x relative mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-12">
          {/* Form */}
          <Reveal className="lg:col-span-7">
            <form className="grid gap-6" onSubmit={(e) => { e.preventDefault(); }}>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Full Name" name="name" />
                <Field label="Phone" name="phone" type="tel" />
              </div>
              <Field label="Email" name="email" type="email" />
              <div>
                <label className="mb-2 block font-label text-[10px] uppercase tracking-[0.25em] text-gold/60">
                  Interested In
                </label>
                <select className="w-full border-b border-gold/20 bg-transparent px-0 py-3 font-body text-base text-foreground outline-none focus:border-gold transition-colors">
                  {form.interestedOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block font-label text-[10px] uppercase tracking-[0.25em] text-gold/60">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full border-b border-gold/20 bg-transparent px-0 py-3 font-body text-base text-foreground outline-none focus:border-gold transition-colors"
                />
              </div>
              <button
                type="submit"
                className="mt-4 w-full sm:w-fit justify-center border border-gold/40 bg-gold/10 px-10 py-4 font-label text-[11px] uppercase tracking-[0.24em] text-gold-soft transition-all gold-shimmer hover:bg-gold/20 hover:border-gold/60 text-center"
              >
                Send Enquiry
              </button>
            </form>
          </Reveal>

          {/* Office info */}
          <Reveal delay={1} className="lg:col-span-5">
            <div className="relative border border-gold/15 bg-stone-soft p-10 overflow-hidden">
              <div className="absolute inset-0 bg-jali pointer-events-none opacity-30" />
              <div className="absolute inset-0 bg-grain pointer-events-none" />

              <div className="relative">
                <div className="font-label text-[10px] uppercase tracking-[0.3em] text-gold mb-6">
                  {office.eyebrow}
                </div>
                <div className="space-y-6 text-sm">
                  <div className="flex gap-4">
                    <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
                    <p className="font-body leading-relaxed text-foreground/80">
                      {office.address.map((line, i) => (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <Phone size={18} className="mt-0.5 shrink-0 text-gold" />
                    <p className="font-body text-foreground/80">{office.phone}</p>
                  </div>
                  <div className="flex gap-4">
                    <Mail size={18} className="mt-0.5 shrink-0 text-gold" />
                    <p className="font-body text-foreground/80">{office.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder — light sandstone themed */}
            <div className="mt-6 aspect-[4/3] w-full overflow-hidden border border-gold/15 bg-stone-soft relative">
              <div className="absolute inset-0 bg-grain pointer-events-none" />
              <div className="flex h-full w-full items-center justify-center">
                <span className="font-label text-[10px] uppercase tracking-[0.28em] text-gold/60">
                  {office.mapPlaceholder}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block font-label text-[10px] uppercase tracking-[0.25em] text-gold/60"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="w-full border-b border-gold/20 bg-transparent px-0 py-3 font-body text-base text-foreground outline-none transition-colors focus:border-gold"
      />
    </div>
  );
}
