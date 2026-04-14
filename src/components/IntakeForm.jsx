import { useState } from "react";

export default function IntakeForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    package: "",
    website: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const packages = [
    { value: "", label: "Select a package..." },
    { value: "starter", label: "Starter ($1,500)" },
    { value: "business", label: "Business ($3,500)" },
    { value: "pro", label: "Pro ($7,000)" },
    { value: "custom", label: "Custom Project" },
    { value: "not-sure", label: "Not sure yet" },
  ];

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for field on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // FormSubmit.co will handle the actual submission via the form action
    // After a brief delay, show success message
    setTimeout(() => {
      setIsSuccess(true);
      setIsSubmitting(false);
    }, 1000);
  };

  if (isSuccess) {
    return (
      <section
        id="intake-form"
        className="relative py-24 overflow-hidden bg-transparent"
      >
        <div className="container-bleed relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 backdrop-blur-sm text-center">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                Got it!
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                We'll be in touch within 24 hours with next steps.
              </p>
              <button
                onClick={() => {
                  setIsSuccess(false);
                  setFormData({
                    name: "",
                    email: "",
                    package: "",
                    website: "",
                    description: "",
                  });
                }}
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black min-h-[44px]"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="intake-form"
      className="relative py-24 overflow-hidden bg-transparent"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-purple-600/10 via-pink-600/5 to-transparent blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-blue-600/10 via-cyan-600/5 to-transparent blur-3xl" />
      </div>

      <div className="container-bleed relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              Start Your Project
            </h2>
            <p className="text-lg text-gray-400">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          {/* Form */}
          <form
            action="https://formsubmit.co/chetan@autobuffy.com"
            method="POST"
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm"
            noValidate
          >
            {/* Hidden FormSubmit Fields */}
            <input
              type="hidden"
              name="_subject"
              value="New Project Inquiry from TCG Website"
            />
            <input type="hidden" name="_template" value="table" />

            {/* Name Field */}
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-white mb-2"
              >
                Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full bg-white/5 border ${
                  errors.name ? "border-red-500" : "border-white/10"
                } rounded-xl px-4 py-3 text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 min-h-[48px]`}
                placeholder="Your name"
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p
                  id="name-error"
                  className="mt-2 text-sm text-red-400 flex items-center gap-1"
                  role="alert"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-white mb-2"
              >
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full bg-white/5 border ${
                  errors.email ? "border-red-500" : "border-white/10"
                } rounded-xl px-4 py-3 text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 min-h-[48px]`}
                placeholder="you@example.com"
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p
                  id="email-error"
                  className="mt-2 text-sm text-red-400 flex items-center gap-1"
                  role="alert"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Package Dropdown */}
            <div className="mb-6">
              <label
                htmlFor="package"
                className="block text-sm font-semibold text-white mb-2"
              >
                Which package?
              </label>
              <div className="relative">
                <select
                  id="package"
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-4 pr-12 py-3 text-base text-white appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 min-h-[48px] cursor-pointer"
                  style={{
                    colorScheme: "dark",
                  }}
                >
                  {packages.map((pkg) => (
                    <option
                      key={pkg.value}
                      value={pkg.value}
                      className="bg-gray-900 text-white"
                      disabled={pkg.value === ""}
                    >
                      {pkg.label}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Website URL Field */}
            <div className="mb-6">
              <label
                htmlFor="website"
                className="block text-sm font-semibold text-white mb-2"
              >
                Current website URL{" "}
                <span className="text-gray-500 font-normal text-xs">
                  (optional)
                </span>
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 min-h-[48px]"
                placeholder="https://yourwebsite.com"
              />
            </div>

            {/* Description Textarea */}
            <div className="mb-8">
              <label
                htmlFor="description"
                className="block text-sm font-semibold text-white mb-2"
              >
                Brief description of what you need
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-y min-h-[120px]"
                placeholder="Tell us about your project in 2-3 sentences..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_100%] text-white font-bold px-8 py-4 text-base sm:text-lg transition-all duration-300 hover:bg-[position:100%_0] hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 min-h-[56px] overflow-hidden"
              aria-label={
                isSubmitting ? "Submitting project request" : "Start my project"
              }
            >
              {isSubmitting ? (
                <span className="flex items-center gap-3">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                <span className="relative z-10 flex items-center gap-2">
                  Start My Project
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
