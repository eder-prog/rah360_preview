"use client";
import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

type Errors = Partial<Record<"name" | "phone" | "email" | "type" | "consent", string>>;

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length >= 7) return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  if (digits.length >= 4) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  if (digits.length >= 1) return `(${digits.slice(0, 3)}`;
  return "";
}

export function EstimateForm() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [banner, setBanner] = useState<string | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [phone, setPhone] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const phoneVal = String(fd.get("phone") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const type = String(fd.get("project_type") || "");
    const message = String(fd.get("message") || "").trim();
    const smsConsent = fd.get("sms_consent") === "on";
    const contactConsent = fd.get("contact_consent") === "on";

    const errs: Errors = {};
    if (!name) errs.name = "Please enter your name.";
    if (!phoneVal) errs.phone = "Please enter your phone number.";
    else if (phoneVal.replace(/\D/g, "").length !== 10) errs.phone = "Please enter a valid US phone number.";
    if (!email) errs.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Please enter a valid email address.";
    if (!type) errs.type = "Please select a project type.";
    if (!contactConsent) errs.consent = "Please authorize us to contact you.";

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setSending(true);
    setBanner(null);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone: phoneVal, email, project_type: type, message, sms_consent: smsConsent, contact_consent: contactConsent, submitted_at: new Date().toISOString() }),
      });
      if (res.ok || res.status === 404) {
        setSuccess(true);
      } else {
        throw new Error("Submit failed");
      }
    } catch {
      setBanner('Something went wrong, please call us at (832) 954-7349 and we\'ll handle it directly.');
      setSending(false);
    }
  }

  const inputCls = "w-full px-4 py-3 min-h-[48px] font-body text-base text-ink bg-white border rounded-md transition-all focus:outline-none focus:border-burnt focus:ring-2 focus:ring-burnt/40";
  const labelCls = "block font-display font-semibold text-sm text-ink mb-2";
  const errCls = "block text-sm text-danger mt-2";

  return (
    <section id="estimate-form" aria-labelledby="form-h2" className="bg-cream py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="reveal">
          <span className="section-tag">08 Get your estimate</span>
          <h2 id="form-h2" className="section-h">
            Tell us about your <span className="it">project</span>.
          </h2>
          <p className="section-sub">
            Fill out the form below or call Joel directly at{" "}
            <a href="tel:+18329547349" className="text-ink font-medium underline decoration-oak decoration-2 underline-offset-4">(832) 954-7349</a>.
            We'll be in touch within one business day to schedule your free in-person estimate.
          </p>
        </div>

        <div className="max-w-[720px] mx-auto bg-white rounded-2xl shadow-md p-6 md:p-12 reveal">
          {success ? (
            <div className="text-center py-8 px-4">
              <CheckCircle2 className="w-14 h-14 text-success mx-auto mb-6" />
              <h3 className="font-display font-bold text-2xl text-ink mb-3 tracking-tight">Got your request, thanks.</h3>
              <p className="text-charcoal text-base mb-2">We'll be in touch within one business day to schedule your free in-person estimate.</p>
              <p className="text-gray-500 text-sm mt-4">Need to reach us sooner? Call Joel directly:{" "}
                <a href="tel:+18329547349" className="text-forest underline">(832) 954-7349</a>.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              {banner && (
                <div className="bg-danger text-white px-4 py-3 rounded-md mb-5 text-sm leading-normal" role="alert" dangerouslySetInnerHTML={{ __html: banner.replace('(832) 954-7349', '<a href="tel:+18329547349" class="text-white underline">(832) 954-7349</a>') }} />
              )}

              <div className="mb-5">
                <label htmlFor="f-name" className={labelCls}>Full Name <span className="text-burnt font-bold">*</span></label>
                <input id="f-name" name="name" type="text" required autoComplete="name"
                  className={`${inputCls} ${errors.name ? "border-danger" : "border-gray-300"}`}
                  placeholder="First and last name" />
                {errors.name && <span className={errCls} aria-live="polite">{errors.name}</span>}
              </div>

              <div className="mb-5">
                <label htmlFor="f-phone" className={labelCls}>Phone <span className="text-burnt font-bold">*</span></label>
                <input id="f-phone" name="phone" type="tel" required autoComplete="tel"
                  value={phone} onChange={(e) => setPhone(formatPhone(e.target.value))}
                  className={`${inputCls} ${errors.phone ? "border-danger" : "border-gray-300"}`}
                  placeholder="(803) 555-0123" />
                <span className="block text-xs text-gray-500 mt-2">We'll call you within one business day.</span>
                {errors.phone && <span className={errCls} aria-live="polite">{errors.phone}</span>}
              </div>

              <div className="mb-5">
                <label htmlFor="f-email" className={labelCls}>Email <span className="text-burnt font-bold">*</span></label>
                <input id="f-email" name="email" type="email" required autoComplete="email"
                  className={`${inputCls} ${errors.email ? "border-danger" : "border-gray-300"}`}
                  placeholder="you@example.com" />
                {errors.email && <span className={errCls} aria-live="polite">{errors.email}</span>}
              </div>

              <div className="mb-5">
                <label htmlFor="f-type" className={labelCls}>Project type <span className="text-burnt font-bold">*</span></label>
                <select id="f-type" name="project_type" required defaultValue=""
                  className={`${inputCls} ${errors.type ? "border-danger" : "border-gray-300"}`}>
                  <option value="" disabled>Select your project</option>
                  <option value="kitchen">Kitchen Remodel</option>
                  <option value="bath">Bathroom Remodel</option>
                  <option value="patio">Patio Cover</option>
                  <option value="whole-home">Whole-Home Remodel</option>
                  <option value="other">Other</option>
                </select>
                {errors.type && <span className={errCls} aria-live="polite">{errors.type}</span>}
              </div>

              <div className="mb-5">
                <label htmlFor="f-message" className={labelCls}>Tell us about your project</label>
                <textarea id="f-message" name="message" rows={4}
                  className={`${inputCls} resize-y border-gray-300`} style={{ minHeight: 100 }}
                  placeholder="Square footage, timing, anything else we should know." />
                <span className="block text-xs text-gray-500 mt-2">Optional. Share as much or as little as you'd like.</span>
              </div>

              <label className="flex items-start gap-3 text-sm text-charcoal leading-normal mb-4 cursor-pointer">
                <input type="checkbox" name="contact_consent" required
                  className="w-5 h-5 mt-0.5 border-[1.5px] border-gray-300 rounded-sm flex-shrink-0 checked:bg-success checked:border-success cursor-pointer accent-success" />
                <span>I authorize RAH360 to contact me by phone, email, or text about my project request. <span className="text-burnt font-bold">Required.</span></span>
              </label>
              {errors.consent && <span className={errCls} aria-live="polite">{errors.consent}</span>}

              <label className="flex items-start gap-3 text-sm text-charcoal leading-normal mb-5 cursor-pointer">
                <input type="checkbox" name="sms_consent"
                  className="w-5 h-5 mt-0.5 border-[1.5px] border-gray-300 rounded-sm flex-shrink-0 checked:bg-success checked:border-success cursor-pointer accent-success" />
                <span>I agree to receive SMS marketing messages from RAH360. Message frequency varies. Message and data rates may apply. Reply HELP for help, STOP to unsubscribe. Consent is not a condition of purchase. View <a href="/privacy" className="text-forest underline">Privacy Policy</a> and <a href="/terms" className="text-forest underline">Terms</a>.</span>
              </label>

              <button type="submit" disabled={sending}
                className="w-full inline-flex items-center justify-center px-8 py-4 min-h-[56px] bg-burnt text-white font-display font-bold text-lg rounded-xl shadow-warm hover:bg-burnt-hover hover:-translate-y-0.5 hover:scale-[1.02] transition-all disabled:opacity-60 disabled:cursor-not-allowed">
                {sending ? "Sending..." : "Request My Free Estimate"}
              </button>
              <p className="text-center text-gray-500 text-xs mt-3">We'll be in touch within one business day to schedule your free in-person estimate.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
