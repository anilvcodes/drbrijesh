import React, { useState } from "react";

/* =========================================================
   EASY TO EDIT — IMAGES
========================================================= */

const IMAGES = {
  doctor:
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1400&q=90",

  doctorSecondary:
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1400&q=90",

  doctorConsult:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=90",

  homeCare:
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=90",

  clinic:
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=90",

  consultation:
    "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1400&q=90",
};


/* =========================================================
   EASY TO EDIT — CONTACT DETAILS
========================================================= */

const CONTACT = {
  phone: "+91 XXXXXXXXXX",
  whatsapp: "91XXXXXXXXXX",
  email: "hello@example.com",
  address: "Your verified clinic address",
};


/* =========================================================
   NAVIGATION
========================================================= */

const navItems = [
  ["About", "#about"],
  ["Home Care", "#home-care"],
  ["Services", "#services"],
  ["Journey", "#journey"],
  ["Gallery", "#gallery"],
  ["Contact", "#contact"],
];


/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    number: "01",
    icon: "⌂",
    title: "Doctor at Your Doorstep",
    description:
      "Professional doctor consultation from the comfort and privacy of your home.",
    tag: "Home Visit",
  },
  {
    number: "02",
    icon: "◉",
    title: "Online Consultation",
    description:
      "Connect with the doctor through convenient video or phone consultation.",
    tag: "Digital Care",
  },
  {
    number: "03",
    icon: "＋",
    title: "Home Health Check-up",
    description:
      "Routine health assessment and vital monitoring without leaving your home.",
    tag: "Preventive Care",
  },
  {
    number: "04",
    icon: "◇",
    title: "Lab Tests at Home",
    description:
      "Convenient sample collection and diagnostic support at your doorstep.",
    tag: "Diagnostics",
  },
  {
    number: "05",
    icon: "♡",
    title: "Nursing & Wound Care",
    description:
      "Personalized nursing support and basic wound-care assistance at home.",
    tag: "Nursing",
  },
  {
    number: "06",
    icon: "↗",
    title: "Physiotherapy at Home",
    description:
      "Personalized physiotherapy and mobility support in your home.",
    tag: "Recovery",
  },
  {
    number: "07",
    icon: "○",
    title: "Elderly Care",
    description:
      "Thoughtful healthcare support for parents and senior family members.",
    tag: "Family Care",
  },
  {
    number: "08",
    icon: "▣",
    title: "Medicine & Follow-up",
    description:
      "Prescription guidance, follow-up coordination and ongoing care support.",
    tag: "Continuity",
  },
];


/* =========================================================
   JOURNEY
========================================================= */

const journey = [
  {
    year: "01",
    title: "Dental Education",
    text:
      "Building a strong clinical foundation through professional dental education and practical learning.",
  },
  {
    year: "02",
    title: "Clinical Practice",
    text:
      "Developing hands-on experience with a patient-first approach to diagnosis, treatment and communication.",
  },
  {
    year: "03",
    title: "Advanced Learning",
    text:
      "Continuously expanding clinical knowledge and adopting modern approaches to patient care.",
  },
  {
    year: "04",
    title: "Beyond the Clinic",
    text:
      "Bringing convenient healthcare closer to families through home consultation and coordinated care.",
  },
];


/* =========================================================
   TESTIMONIALS
========================================================= */

const testimonials = [
  {
    quote:
      "Very professional consultation and excellent communication. The experience felt comfortable from start to finish.",
    name: "Patient Review",
    detail: "Replace with verified patient information",
  },
  {
    quote:
      "The home consultation made healthcare much more convenient for our family.",
    name: "Family Patient",
    detail: "Replace with verified patient information",
  },
  {
    quote:
      "Clear explanation, thoughtful guidance and a very patient-first experience.",
    name: "Patient Review",
    detail: "Replace with verified patient information",
  },
];


/* =========================================================
   ARROW COMPONENT
========================================================= */

function Arrow() {
  return (
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      ↗
    </span>
  );
}


/* =========================================================
   SECTION LABEL
========================================================= */

function SectionLabel({ number, children, light = false }) {
  return (
    <div
      className={`mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.25em] ${
        light ? "text-white/60" : "text-stone-500"
      }`}
    >
      <span>{number}</span>

      <span
        className={`h-px w-8 ${
          light ? "bg-white/30" : "bg-stone-300"
        }`}
      />

      <span>{children}</span>
    </div>
  );
}


/* =========================================================
   MAIN APP
========================================================= */

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [testimonial, setTestimonial] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const nextTestimonial = () => {
    setTestimonial((current) => (current + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setTestimonial(
      (current) =>
        (current - 1 + testimonials.length) % testimonials.length
    );
  };

  const submitForm = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f2ec] text-[#20201d] selection:bg-[#20201d] selection:text-white">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-7">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-black/10 bg-[#f7f4ee]/90 px-5 py-3 shadow-sm backdrop-blur-xl">

          <a
            href="#"
            className="flex items-center gap-3"
            onClick={() => setMenuOpen(false)}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#20201d] text-sm font-semibold text-white">
              BV
            </div>

            <div className="hidden sm:block">
              <p className="font-serif text-lg leading-none">
                Dr. Briject Verma
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-stone-500">
                Healthcare • Dentistry • Home Care
              </p>
            </div>
          </a>


          {/* Desktop Navigation */}

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-[12px] font-medium text-stone-600 transition hover:text-black"
              >
                {label}
              </a>
            ))}
          </div>


          <a
            href="#contact"
            className="hidden rounded-full bg-[#20201d] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5 hover:bg-black sm:block"
          >
            Book Home Visit
          </a>


          {/* Mobile Menu Button */}

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 lg:hidden"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </nav>


        {/* Mobile Navigation */}

        {menuOpen && (
          <div className="mx-4 mt-2 rounded-3xl border border-black/10 bg-[#f7f4ee] p-5 shadow-xl lg:hidden">
            <div className="flex flex-col gap-4">

              {navItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-black/5 pb-3 text-sm"
                >
                  {label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="rounded-full bg-[#20201d] px-5 py-3 text-center text-xs font-semibold uppercase tracking-widest text-white"
              >
                Book Home Visit
              </a>

            </div>
          </div>
        )}
      </header>


      <main>

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="relative min-h-screen overflow-hidden px-5 pb-16 pt-32 md:px-10 md:pt-40">

          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

            <div className="relative z-10">

              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/50 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-600">
                <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                Healthcare • Dentistry • Home Care
              </div>


              <h1 className="max-w-3xl font-serif text-[clamp(4rem,8vw,8.5rem)] leading-[0.84] tracking-[-0.055em]">
                Care
                <br />

                <span className="ml-[8vw] italic text-stone-500">
                  comes
                </span>

                <br />

                home.
              </h1>


              <p className="mt-9 max-w-xl text-base leading-7 text-stone-600 md:text-lg">
                Meet{" "}
                <strong className="text-[#20201d]">
                  Dr. Briject Verma
                </strong>{" "}
                — a patient-focused healthcare professional bringing thoughtful
                consultation, dental care and convenient home healthcare services
                closer to families.
              </p>


              <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#20201d] px-7 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:-translate-y-1"
                >
                  Book Doctor at Home
                  <Arrow />
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-black/15 px-7 py-4 text-xs font-semibold uppercase tracking-[0.12em] transition hover:bg-white"
                >
                  Explore Services
                </a>

              </div>


              <div className="mt-12 grid max-w-lg grid-cols-3 gap-5 border-t border-black/10 pt-7">

                <div>
                  <p className="font-serif text-3xl">10+</p>
                  <p className="mt-1 text-[10px] uppercase tracking-widest text-stone-500">
                    Years Experience*
                  </p>
                </div>

                <div>
                  <p className="font-serif text-3xl">5K+</p>
                  <p className="mt-1 text-[10px] uppercase tracking-widest text-stone-500">
                    Patients*
                  </p>
                </div>

                <div>
                  <p className="font-serif text-3xl">24/7</p>
                  <p className="mt-1 text-[10px] uppercase tracking-widest text-stone-500">
                    Care Support
                  </p>
                </div>

              </div>

            </div>


            {/* Hero Image */}

            <div className="relative">

              <div className="absolute -right-10 top-10 h-72 w-72 rounded-full bg-[#d9d0c1] blur-3xl" />

              <div className="relative ml-auto max-w-[600px] overflow-hidden rounded-[2.5rem] bg-stone-200">

                <img
                  src={IMAGES.doctor}
                  alt="Dr. Briject Verma"
                  className="aspect-[4/5] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                      Doctor & Healthcare Professional
                    </p>

                    <p className="mt-2 font-serif text-2xl">
                      Dr. Briject Verma
                    </p>
                  </div>

                  <div className="hidden rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[10px] uppercase tracking-widest backdrop-blur-md sm:block">
                    Patient First
                  </div>

                </div>

              </div>


              {/* Floating Home Care Card */}

              <div className="absolute -bottom-7 -left-3 max-w-[270px] rounded-3xl border border-black/10 bg-[#f7f4ee] p-5 shadow-xl sm:-left-8">

                <div className="flex items-start gap-3">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#20201d] text-lg text-white">
                    ⌂
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest">
                      Doctor at Home
                    </p>

                    <p className="mt-1 text-xs leading-5 text-stone-500">
                      Healthcare support at your doorstep.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            TRUST STRIP
        ===================================================== */}

        <section className="border-y border-black/10 bg-[#ebe6dd] px-5 py-6 md:px-10">

          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5">

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500">
              Designed around your convenience
            </p>

            <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs font-medium text-stone-600">
              <span>Home Consultation</span>
              <span>Digital Care</span>
              <span>Diagnostics</span>
              <span>Family Care</span>
              <span>Follow-up Support</span>
            </div>

          </div>

        </section>


        {/* =====================================================
            ABOUT
        ===================================================== */}

        <section id="about" className="px-5 py-24 md:px-10 md:py-36">

          <div className="mx-auto max-w-7xl">

            <SectionLabel number="01">
              About the Doctor
            </SectionLabel>

            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

              <div>
                <p className="font-serif text-4xl leading-tight md:text-6xl">
                  “Good healthcare begins with understanding the person behind
                  the patient.”
                </p>
              </div>


              <div>

                <h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-tight md:text-6xl">
                  Dentistry is clinical.
                  <br />

                  <span className="italic text-stone-500">
                    Care is personal.
                  </span>
                </h2>

                <div className="mt-8 grid gap-7 text-sm leading-7 text-stone-600 md:grid-cols-2">

                  <p>
                    Dr. Briject Verma’s approach is built around clear
                    communication, thoughtful diagnosis and making patients feel
                    comfortable throughout their healthcare journey.
                  </p>

                  <p>
                    The vision extends beyond the traditional clinic — bringing
                    convenient healthcare services to homes and making professional
                    care easier for individuals and families.
                  </p>

                </div>

                <a
                  href="#journey"
                  className="group mt-9 inline-flex items-center gap-3 border-b border-black pb-2 text-xs font-semibold uppercase tracking-widest"
                >
                  Discover the journey
                  <Arrow />
                </a>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            DOCTOR AT HOME
        ===================================================== */}

        <section
          id="home-care"
          className="bg-[#20201d] px-5 py-24 text-white md:px-10 md:py-32"
        >

          <div className="mx-auto max-w-7xl">

            <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">

              <div>

                <SectionLabel number="02" light>
                  Doctor at Your Doorstep
                </SectionLabel>

                <h2 className="max-w-3xl font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
                  Healthcare,
                  <br />

                  <span className="italic text-white/50">
                    without the journey.
                  </span>
                </h2>

                <p className="mt-8 max-w-xl text-sm leading-7 text-white/60 md:text-base">
                  When visiting a clinic is difficult, professional care can
                  come to you. Request a home visit for consultation, basic
                  health assessment and coordinated follow-up care.
                </p>


                <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                  <a
                    href="#contact"
                    className="rounded-full bg-white px-7 py-4 text-center text-xs font-semibold uppercase tracking-widest text-[#20201d] transition hover:-translate-y-1"
                  >
                    Request Home Visit
                  </a>

                  <a
                    href={`https://wa.me/${CONTACT.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/20 px-7 py-4 text-center text-xs font-semibold uppercase tracking-widest transition hover:bg-white/10"
                  >
                    WhatsApp Us
                  </a>

                </div>


                <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">

                  {[
                    ["01", "Convenient"],
                    ["02", "Personal"],
                    ["03", "Coordinated"],
                    ["04", "Follow-up"],
                  ].map(([number, label]) => (
                    <div
                      key={number}
                      className="border-t border-white/15 pt-4"
                    >
                      <p className="text-[10px] text-white/40">
                        {number}
                      </p>

                      <p className="mt-2 text-xs uppercase tracking-widest">
                        {label}
                      </p>
                    </div>
                  ))}

                </div>

              </div>


              <div className="relative">

                <div className="overflow-hidden rounded-[2rem]">
                  <img
                    src={IMAGES.homeCare}
                    alt="Home healthcare"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-5 -left-5 rounded-3xl bg-[#f5f2ec] p-5 text-[#20201d] shadow-xl">

                  <p className="text-[9px] font-semibold uppercase tracking-widest text-stone-500">
                    Simple process
                  </p>

                  <p className="mt-2 font-serif text-xl">
                    Call → Visit → Care
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            SERVICES
        ===================================================== */}

        <section
          id="services"
          className="px-5 py-24 md:px-10 md:py-36"
        >

          <div className="mx-auto max-w-7xl">

            <SectionLabel number="03">
              Healthcare Services
            </SectionLabel>

            <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end">

              <h2 className="max-w-3xl font-serif text-5xl leading-none tracking-tight md:text-7xl">
                One trusted
                <br />

                <span className="italic text-stone-400">
                  point of care.
                </span>
              </h2>

              <p className="max-w-sm text-sm leading-6 text-stone-500">
                A coordinated set of services designed around convenience,
                continuity and patient comfort.
              </p>

            </div>


            <div className="grid gap-px overflow-hidden rounded-[2rem] border border-black/10 bg-black/10 md:grid-cols-2">

              {services.map((service) => (
                <div
                  key={service.number}
                  className="group bg-[#f5f2ec] p-7 transition duration-300 hover:bg-[#ebe6dd] md:p-9"
                >

                  <div className="flex items-start justify-between">

                    <span className="text-[10px] font-semibold tracking-[0.2em] text-stone-400">
                      {service.number}
                    </span>

                    <span className="text-2xl text-stone-400 transition group-hover:scale-110 group-hover:text-black">
                      {service.icon}
                    </span>

                  </div>


                  <div className="mt-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

                    <div>

                      <span className="rounded-full border border-black/10 px-3 py-1 text-[9px] font-semibold uppercase tracking-widest text-stone-500">
                        {service.tag}
                      </span>

                      <h3 className="mt-4 font-serif text-3xl leading-tight">
                        {service.title}
                      </h3>

                      <p className="mt-3 max-w-md text-sm leading-6 text-stone-500">
                        {service.description}
                      </p>

                    </div>

                    <span className="text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            QUICK BOOKING
        ===================================================== */}

        <section className="px-5 pb-24 md:px-10 md:pb-36">

          <div className="mx-auto max-w-7xl">

            <div className="overflow-hidden rounded-[2rem] bg-[#dcd4c7]">

              <div className="grid items-center lg:grid-cols-2">

                <div className="p-8 md:p-14">

                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500">
                    Need care today?
                  </p>

                  <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight md:text-6xl">
                    Tell us what you need.
                  </h2>

                  <p className="mt-5 max-w-lg text-sm leading-6 text-stone-600">
                    Choose a convenient consultation option and our team can
                    coordinate the next step.
                  </p>

                  <a
                    href="#contact"
                    className="mt-8 inline-flex rounded-full bg-[#20201d] px-7 py-4 text-xs font-semibold uppercase tracking-widest text-white"
                  >
                    Start a Booking
                  </a>

                </div>

                <img
                  src={IMAGES.doctorConsult}
                  alt="Doctor consultation"
                  className="h-full min-h-[380px] w-full object-cover"
                />

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            CREDENTIALS
        ===================================================== */}

        <section className="bg-[#ebe6dd] px-5 py-24 md:px-10 md:py-32">

          <div className="mx-auto max-w-7xl">

            <div className="grid gap-10 md:grid-cols-3">

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-stone-500">
                  Qualification
                </p>

                <p className="mt-4 font-serif text-4xl">
                  BDS
                </p>

                <p className="mt-2 text-sm text-stone-500">
                  Replace with verified qualification details.
                </p>
              </div>


              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-stone-500">
                  Practice
                </p>

                <p className="mt-4 font-serif text-4xl">
                  Clinical Care
                </p>

                <p className="mt-2 text-sm text-stone-500">
                  Replace with verified specialty and practice details.
                </p>
              </div>


              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-stone-500">
                  Philosophy
                </p>

                <p className="mt-4 font-serif text-4xl">
                  Care + Precision
                </p>

                <p className="mt-2 text-sm text-stone-500">
                  Thoughtful treatment with a human approach.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            JOURNEY
        ===================================================== */}

        <section
          id="journey"
          className="px-5 py-24 md:px-10 md:py-36"
        >

          <div className="mx-auto max-w-7xl">

            <SectionLabel number="04">
              Professional Journey
            </SectionLabel>

            <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

              <div>

                <h2 className="font-serif text-5xl leading-none md:text-7xl">
                  A journey
                  <br />

                  <span className="italic text-stone-400">
                    of growth.
                  </span>
                </h2>

              </div>


              <div>

                {journey.map((item, index) => (
                  <div
                    key={item.year}
                    className={`grid gap-6 py-8 sm:grid-cols-[80px_1fr] ${
                      index !== journey.length - 1
                        ? "border-b border-black/10"
                        : ""
                    }`}
                  >

                    <div className="font-serif text-2xl text-stone-400">
                      {item.year}
                    </div>

                    <div>

                      <h3 className="font-serif text-3xl">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-xl text-sm leading-6 text-stone-500">
                        {item.text}
                      </p>

                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            PHILOSOPHY
        ===================================================== */}

        <section className="px-5 pb-24 md:px-10 md:pb-36">

          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-[#d8d0c3] lg:grid-cols-2">

            <img
              src={IMAGES.doctorSecondary}
              alt="Doctor"
              className="h-full min-h-[500px] w-full object-cover"
            />

            <div className="flex flex-col justify-center p-9 md:p-14">

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500">
                Philosophy
              </p>

              <p className="mt-7 font-serif text-4xl leading-tight md:text-5xl">
                “Precision is important.
                <br />

                <span className="italic text-stone-500">
                  But so is the human connection behind it.”
                </span>
              </p>

              <p className="mt-7 max-w-md text-sm leading-7 text-stone-600">
                Every interaction should leave a patient feeling heard,
                informed and cared for.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            GALLERY
        ===================================================== */}

        <section
          id="gallery"
          className="px-5 pb-24 md:px-10 md:pb-36"
        >

          <div className="mx-auto max-w-7xl">

            <SectionLabel number="05">
              Visual Story
            </SectionLabel>

            <div className="grid gap-5 md:grid-cols-12">

              <div className="overflow-hidden rounded-[2rem] md:col-span-7">

                <img
                  src={IMAGES.clinic}
                  alt="Clinic"
                  className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
                />

              </div>


              <div className="overflow-hidden rounded-[2rem] md:col-span-5">

                <img
                  src={IMAGES.consultation}
                  alt="Consultation"
                  className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
                />

              </div>


              <div className="rounded-[2rem] bg-[#20201d] p-8 text-white md:col-span-12 md:p-12">

                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                  The promise
                </p>

                <p className="mt-6 max-w-5xl font-serif text-4xl leading-tight md:text-6xl">
                  “Make professional healthcare feel more{" "}
                  <span className="italic text-white/50">
                    accessible, personal and human.
                  </span>
                  ”
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            TESTIMONIALS
        ===================================================== */}

        <section className="bg-[#20201d] px-5 py-24 text-white md:px-10 md:py-32">

          <div className="mx-auto max-w-5xl text-center">

            <SectionLabel number="06" light>
              Patient Experience
            </SectionLabel>

            <div className="text-2xl tracking-[0.2em] text-white/50">
              ★★★★★
            </div>

            <blockquote className="mt-8 font-serif text-3xl leading-tight md:text-5xl">
              “{testimonials[testimonial].quote}”
            </blockquote>

            <div className="mt-8">

              <p className="text-sm font-semibold">
                {testimonials[testimonial].name}
              </p>

              <p className="mt-1 text-xs text-white/40">
                {testimonials[testimonial].detail}
              </p>

            </div>


            <div className="mt-10 flex justify-center gap-3">

              <button
                type="button"
                onClick={previousTestimonial}
                aria-label="Previous testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 transition hover:bg-white/10"
              >
                ←
              </button>

              <button
                type="button"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 transition hover:bg-white/10"
              >
                →
              </button>

            </div>

          </div>

        </section>


        {/* =====================================================
            CONTACT / APPOINTMENT
        ===================================================== */}

        <section
          id="contact"
          className="px-5 py-24 md:px-10 md:py-36"
        >

          <div className="mx-auto max-w-7xl">

            <SectionLabel number="07">
              Contact & Appointment
            </SectionLabel>

            <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

              <div>

                <h2 className="font-serif text-5xl leading-none md:text-7xl">
                  Let’s take
                  <br />

                  <span className="italic text-stone-400">
                    care of it.
                  </span>
                </h2>

                <p className="mt-7 max-w-md text-sm leading-7 text-stone-500">
                  Book a consultation, request a home visit or ask about
                  available healthcare services.
                </p>


                <div className="mt-10 space-y-5">

                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="block border-b border-black/10 pb-4"
                  >
                    <span className="text-[9px] uppercase tracking-widest text-stone-400">
                      Phone
                    </span>

                    <span className="mt-1 block text-sm">
                      {CONTACT.phone}
                    </span>
                  </a>


                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="block border-b border-black/10 pb-4"
                  >
                    <span className="text-[9px] uppercase tracking-widest text-stone-400">
                      Email
                    </span>

                    <span className="mt-1 block text-sm">
                      {CONTACT.email}
                    </span>
                  </a>


                  <div className="border-b border-black/10 pb-4">

                    <span className="text-[9px] uppercase tracking-widest text-stone-400">
                      Address
                    </span>

                    <span className="mt-1 block text-sm">
                      {CONTACT.address}
                    </span>

                  </div>

                </div>

              </div>


              {/* Appointment Form */}

              <form
                onSubmit={submitForm}
                className="rounded-[2rem] border border-black/10 bg-[#ebe6dd] p-7 md:p-10"
              >

                {submitted ? (

                  <div className="flex min-h-[500px] flex-col items-center justify-center text-center">

                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#20201d] text-2xl text-white">
                      ✓
                    </div>

                    <h3 className="mt-6 font-serif text-4xl">
                      Request received.
                    </h3>

                    <p className="mt-4 max-w-sm text-sm leading-6 text-stone-500">
                      This demo form is front-end only. Connect it to WhatsApp,
                      email, CRM or your backend for real bookings.
                    </p>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-7 rounded-full border border-black/10 px-6 py-3 text-xs font-semibold uppercase tracking-widest"
                    >
                      Send another request
                    </button>

                  </div>

                ) : (

                  <>

                    <div className="mb-8">

                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500">
                        Appointment Request
                      </p>

                      <h3 className="mt-3 font-serif text-3xl md:text-4xl">
                        How can we help?
                      </h3>

                    </div>


                    <div className="grid gap-5 sm:grid-cols-2">

                      <label className="block">

                        <span className="text-[9px] font-semibold uppercase tracking-widest text-stone-500">
                          Your Name
                        </span>

                        <input
                          required
                          type="text"
                          placeholder="Enter your name"
                          className="mt-2 w-full rounded-2xl border border-black/10 bg-[#f7f4ee] px-4 py-4 text-sm outline-none transition focus:border-black"
                        />

                      </label>


                      <label className="block">

                        <span className="text-[9px] font-semibold uppercase tracking-widest text-stone-500">
                          Phone
                        </span>

                        <input
                          required
                          type="tel"
                          placeholder="+91"
                          className="mt-2 w-full rounded-2xl border border-black/10 bg-[#f7f4ee] px-4 py-4 text-sm outline-none transition focus:border-black"
                        />

                      </label>


                      <label className="block">

                        <span className="text-[9px] font-semibold uppercase tracking-widest text-stone-500">
                          Email
                        </span>

                        <input
                          type="email"
                          placeholder="you@example.com"
                          className="mt-2 w-full rounded-2xl border border-black/10 bg-[#f7f4ee] px-4 py-4 text-sm outline-none transition focus:border-black"
                        />

                      </label>


                      <label className="block">

                        <span className="text-[9px] font-semibold uppercase tracking-widest text-stone-500">
                          Service
                        </span>

                        <select
                          defaultValue="Doctor at Home"
                          className="mt-2 w-full rounded-2xl border border-black/10 bg-[#f7f4ee] px-4 py-4 text-sm outline-none"
                        >
                          <option>Doctor at Home</option>
                          <option>Online Consultation</option>
                          <option>Home Health Check-up</option>
                          <option>Lab Test at Home</option>
                          <option>Nursing Care</option>
                          <option>Physiotherapy</option>
                          <option>Elderly Care</option>
                          <option>Dental Consultation</option>
                        </select>

                      </label>

                    </div>


                    <label className="mt-5 block">

                      <span className="text-[9px] font-semibold uppercase tracking-widest text-stone-500">
                        Message
                      </span>

                      <textarea
                        rows={5}
                        placeholder="Tell us briefly what you need..."
                        className="mt-2 w-full resize-none rounded-2xl border border-black/10 bg-[#f7f4ee] px-4 py-4 text-sm outline-none transition focus:border-black"
                      />

                    </label>


                    <button
                      type="submit"
                      className="group mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-[#20201d] px-7 py-4 text-xs font-semibold uppercase tracking-widest text-white transition hover:-translate-y-1"
                    >
                      Request Appointment
                      <Arrow />
                    </button>


                    <p className="mt-4 text-center text-[10px] leading-5 text-stone-400">
                      This website does not replace emergency medical services.
                      For emergencies, contact your local emergency service.
                    </p>

                  </>

                )}

              </form>

            </div>

          </div>

        </section>


        {/* =====================================================
            FOOTER
        ===================================================== */}

        <footer className="border-t border-black/10 px-5 py-8 md:px-10">

          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">

            <div>

              <p className="font-serif text-xl">
                Dr. Briject Verma
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-widest text-stone-400">
                Healthcare • Dentistry • Home Care
              </p>

            </div>


            <div className="flex flex-wrap gap-5 text-[10px] uppercase tracking-widest text-stone-500">

              <a href="#about" className="hover:text-black">
                About
              </a>

              <a href="#home-care" className="hover:text-black">
                Home Care
              </a>

              <a href="#services" className="hover:text-black">
                Services
              </a>

              <a href="#contact" className="hover:text-black">
                Contact
              </a>

            </div>


            <p className="text-[10px] text-stone-400">
              © {new Date().getFullYear()} Dr. Briject Verma
            </p>

          </div>

        </footer>

      </main>


      {/* =====================================================
          FLOATING WHATSAPP
      ===================================================== */}

      <a
        href={`https://wa.me/${CONTACT.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#20201d] text-xl text-white shadow-2xl transition hover:-translate-y-1 hover:scale-105"
      >
        <span>◉</span>
      </a>


      {/* =====================================================
          DISCLAIMER
      ===================================================== */}

      <div className="bg-[#f5f2ec] px-5 pb-5 text-center text-[9px] uppercase tracking-widest text-stone-400">
        * Replace placeholder statistics, qualifications, testimonials and
        contact information with verified details before publishing.
      </div>

    </div>
  );
}