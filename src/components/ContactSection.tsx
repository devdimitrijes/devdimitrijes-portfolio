import { useState } from "react";
import { Github, Mail } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  lastName: z.string().trim().min(1, "Last name is required").max(100, "Last name is too long"),
  email: z.string().trim().min(1, "Email is required").email("Please enter a valid email address").max(255, "Email is too long"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be under 1000 characters"),
});

type FormData = z.infer<typeof contactSchema>;
type FormErrors = Partial<Record<keyof FormData, string>>;

// Official Fiverr logo SVG
const FiverrIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M42.94 17.07h-8.6a8.59 8.59 0 0 0-8.59 8.59v1.03h-4.3v7.52h4.3V49h8.59V34.21h6.45v-7.52h-6.45v-1.03a1.08 1.08 0 0 1 1.07-1.07h5.38v-7.52zM53.87 26.69a3.76 3.76 0 1 0 0-7.52 3.76 3.76 0 0 0 0 7.52zm-4.3 7.52h8.6V49h-8.6V34.21z" />
  </svg>
);

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormData;
        if (!fieldErrors[field]) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitted(true);
    setErrors({});
  };

  const handleReset = () => {
    setFormData({ name: "", lastName: "", email: "", message: "" });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section id="contact" className="bg-secondary text-secondary-foreground py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Socials */}
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-3xl font-bold text-primary">Socials</h2>
          <div className="flex flex-col gap-6 items-center">
            <a
              href="https://github.com/devdimitrijes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-12 h-12" />
            </a>
            <a
              href="mailto:dimitrije.itdev@gmail.com"
              className="text-secondary-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-12 h-12" />
            </a>
            <div className="flex flex-col items-center gap-1 text-secondary-foreground">
              <DiscordIcon />
              <span className="text-sm opacity-80">dimi_35</span>
            </div>
            <a
              href="https://www.fiverr.com/devdimitrijes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-foreground hover:text-primary transition-colors"
              aria-label="Fiverr"
            >
              <FiverrIcon />
            </a>
          </div>
        </div>

        {/* Contact form */}
        <div className="flex-1 flex flex-col items-center gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary mb-2">
              You need a developer?
            </h2>
            <h3 className="text-2xl font-semibold text-primary">Contact me!</h3>
          </div>

          {submitted ? (
            <div className="text-center py-12 animate-fade-in">
              <p className="text-xl font-semibold text-primary">Thank you for your message!</p>
              <p className="text-muted-foreground mt-2">I'll get back to you soon.</p>
              <button
                onClick={handleReset}
                className="mt-6 px-6 py-3 bg-accent text-accent-foreground rounded-2xl font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4" noValidate>
              <div>
                <label htmlFor="name" className="block text-primary font-bold text-sm mb-1">
                  Name <span className="text-destructive">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className={`w-full h-12 rounded-md bg-background text-foreground px-3 text-base border-2 ${
                    errors.name ? "border-destructive" : "border-transparent"
                  } focus:outline-none focus:border-primary transition-colors`}
                />
                {errors.name && <p className="form-error">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-primary font-bold text-sm mb-1">
                  Last name <span className="text-destructive">*</span>
                </label>
                <input
                  id="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  className={`w-full h-12 rounded-md bg-background text-foreground px-3 text-base border-2 ${
                    errors.lastName ? "border-destructive" : "border-transparent"
                  } focus:outline-none focus:border-primary transition-colors`}
                />
                {errors.lastName && <p className="form-error">{errors.lastName}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-primary font-bold text-sm mb-1">
                  Email <span className="text-destructive">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={`w-full h-12 rounded-md bg-background text-foreground px-3 text-base border-2 ${
                    errors.email ? "border-destructive" : "border-transparent"
                  } focus:outline-none focus:border-primary transition-colors`}
                />
                {errors.email && <p className="form-error">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-primary font-bold text-sm mb-1">
                  Message <span className="text-destructive">*</span>
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  rows={4}
                  className={`w-full rounded-md bg-background text-foreground px-3 py-2 text-base border-2 ${
                    errors.message ? "border-destructive" : "border-transparent"
                  } focus:outline-none focus:border-primary transition-colors resize-none`}
                />
                {errors.message && <p className="form-error">{errors.message}</p>}
              </div>

              <div className="flex justify-center gap-4 pt-2">
                <button
                  type="submit"
                  className="px-8 py-3 bg-accent text-accent-foreground rounded-2xl font-semibold border-[3px] border-secondary-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary-dark transition-all duration-300"
                >
                  Send
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-8 py-3 bg-accent text-accent-foreground rounded-2xl font-semibold border-[3px] border-secondary-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary-dark transition-all duration-300"
                >
                  Reset
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
