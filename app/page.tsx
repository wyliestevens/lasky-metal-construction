import Image from 'next/image';
import { SITE } from '@/lib/site-config';
import { reviews, aggregateRating } from '@/lib/reviews-data';
import { DemoForm } from '@/components/demo-form';

/* ──────────────────────────── SERVICES DATA ──────────────────────────── */
const services = [
  {
    title: 'Commercial Metal Buildings',
    description: 'Warehouses, retail spaces, workshops, and industrial facilities. Engineered for durability and built on your timeline.',
    image: '/img/commercial-1.jpg',
  },
  {
    title: 'Storage Unit Facilities',
    description: 'Complete self-storage construction from the ground up. Roll-up doors, interior units, and climate-ready designs.',
    image: '/img/storage-interior.jpg',
  },
  {
    title: 'Steel Frame Erection',
    description: 'Precision steel framing for any size project. Our crew handles everything from foundation bolts to the final purlin.',
    image: '/img/steel-frame-large.jpg',
  },
  {
    title: 'Metal Roofing & Panels',
    description: 'Standing seam, R-panel, and corrugated metal roofing. Installed with insulation and proper flashing for a watertight seal.',
    image: '/img/crew-on-roof.jpg',
  },
  {
    title: 'Barndominiums & Shops',
    description: 'Custom metal homes, workshops, and combination living/work spaces. The barndominium trend done right.',
    image: '/img/barndo-1.jpg',
  },
  {
    title: 'Car Washes & Specialty',
    description: 'Unique metal building projects including car washes, agricultural buildings, and custom commercial structures.',
    image: '/img/carwash-exterior.jpg',
  },
];

/* ──────────────────────────── GALLERY DATA ──────────────────────────── */
const galleryImages = [
  { src: '/img/commercial-5.jpg', label: 'Commercial Build' },
  { src: '/img/barn-red.jpg', label: 'Agricultural Building' },
  { src: '/img/carwash-angle.jpg', label: 'Car Wash' },
  { src: '/img/frame-autumn-1.jpg', label: 'Steel Framing' },
  { src: '/img/storage-units-red.jpg', label: 'Storage Facility' },
  { src: '/img/building-exterior.jpg', label: 'Industrial Interior' },
  { src: '/img/commercial-4.jpg', label: 'Metal Building' },
  { src: '/img/roof-vent-1.jpg', label: 'Roof Work' },
];

/* ──────────────────────────── WHY LASKY ──────────────────────────── */
const whyUs = [
  {
    icon: '🏗️',
    title: 'Full-Service Metal Construction',
    body: 'From steel erection and panel installation to concrete and finish work. One crew, one point of contact, start to finish.',
  },
  {
    icon: '⚡',
    title: 'On Time, On Budget',
    body: 'We show up when we say we will and finish when we promise. Our reputation is built on keeping our word.',
  },
  {
    icon: '🔩',
    title: 'Quality Craftsmanship',
    body: 'Every weld, every bolt, every panel is installed with precision. We build structures that stand for decades.',
  },
  {
    icon: '🤝',
    title: 'Owner on Every Job',
    body: 'Jose is on-site for every project. You deal directly with the owner, not a salesman who disappears after the contract is signed.',
  },
];

/* ──────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    q: 'What types of metal buildings do you construct?',
    a: 'We build commercial warehouses, storage unit facilities, barndominiums, agricultural buildings, car washes, workshops, and custom metal structures of all sizes.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve Northwest Arkansas, Northeast Oklahoma, and Southwest Missouri. This includes Siloam Springs, Fayetteville, Rogers, Bentonville, Springdale, Fort Smith, Tulsa, and surrounding areas.',
  },
  {
    q: 'How long does a typical metal building project take?',
    a: 'Timelines vary by project size. A standard commercial building typically takes 4-8 weeks from foundation to completion. Larger or more complex projects may take longer. We provide a detailed timeline before work begins.',
  },
  {
    q: 'Do you handle the entire project or just the metal work?',
    a: 'We handle the complete metal building construction including steel erection, panel and trim installation, doors, insulation, and roofing. We coordinate with foundation contractors and other trades as needed.',
  },
  {
    q: 'Do you provide free estimates?',
    a: 'Yes. Contact us with your project details and we will provide a detailed estimate at no cost. We can also visit your site to assess conditions and discuss your vision.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. Lasky Metal Construction LLC is fully licensed and insured for commercial and residential metal construction in Arkansas and Oklahoma.',
  },
];

/* ──────────────────────────── PAGE ──────────────────────────── */
export default function Home() {
  return (
    <>
      {/* ===== HEADER / NAV ===== */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3">
            <Image src="/img/logo.jpg" alt="Lasky Metal Construction" width={48} height={48} className="rounded" />
            <span className="text-lg font-bold tracking-tight text-steel">
              Lasky Metal<span className="text-forge-red"> Construction</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#services" className="transition-colors hover:text-forge-red">Services</a>
            <a href="#gallery" className="transition-colors hover:text-forge-red">Our Work</a>
            <a href="#about" className="transition-colors hover:text-forge-red">About</a>
            <a href="#reviews" className="transition-colors hover:text-forge-red">Reviews</a>
            <a href="#contact" className="transition-colors hover:text-forge-red">Contact</a>
          </nav>
          <a
            href="#contact"
            className="hidden rounded-lg bg-forge-red px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-forge-dk md:inline-block"
          >
            Get a Free Estimate
          </a>
          <a href="#contact" className="rounded-lg bg-forge-red px-4 py-2 text-sm font-bold text-white md:hidden">
            Contact
          </a>
        </div>
      </header>

      <main id="main-content">
        {/* ===== HERO (Two-column: headline left, form right) ===== */}
        <section className="relative overflow-hidden bg-steel px-6 py-16 md:py-24">
          <div className="absolute inset-0 opacity-15">
            <Image src="/img/commercial-2.jpg" alt="" fill className="object-cover" priority />
          </div>
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
            {/* Left column: headline & copy */}
            <div>
              <Image
                src="/img/logo.jpg"
                alt="Lasky Metal Construction"
                width={160}
                height={160}
                className="mb-6 h-auto w-32 rounded-lg md:w-40"
                priority
              />
              <h1 className="text-3xl font-extrabold leading-tight text-white md:text-5xl md:leading-tight">
                Metal Buildings Built to Last
              </h1>
              <p className="mt-6 max-w-lg text-lg text-gray-300 md:text-xl">
                Commercial, agricultural, and residential steel construction across Arkansas and Oklahoma. Quality craftsmanship from a crew that takes pride in every build.
              </p>
              <a
                href="#services"
                className="mt-8 inline-block rounded-lg bg-forge-red px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-forge-dk hover:shadow-xl"
              >
                See Our Services
              </a>
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                  <span>{aggregateRating.value} / 5.0</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-forge-red font-bold">&#9670;</span>
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-forge-red font-bold">&#9670;</span>
                  <span>Free Estimates</span>
                </div>
              </div>
            </div>

            {/* Right column: demo form */}
            <DemoForm source="hero" />
          </div>
        </section>

        {/* ===== TRUST BAR ===== */}
        <section className="bg-steel-light px-6 py-6">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-6 text-sm text-gray-300 md:gap-10">
            <span>Commercial Buildings</span>
            <span className="hidden text-gray-600 sm:inline">|</span>
            <span>Storage Facilities</span>
            <span className="hidden text-gray-600 sm:inline">|</span>
            <span>Steel Framing</span>
            <span className="hidden text-gray-600 sm:inline">|</span>
            <span>Metal Roofing</span>
            <span className="hidden text-gray-600 sm:inline">|</span>
            <span>Barndominiums</span>
            <span className="hidden text-gray-600 sm:inline">|</span>
            <span>Car Washes</span>
          </div>
        </section>

        {/* ===== SERVICES ===== */}
        <section id="services" className="bg-cream px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl font-bold text-steel md:text-4xl">
              What We Build
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
              From massive commercial warehouses to custom barndominiums, we handle metal building projects of every size.
            </p>
            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="group overflow-hidden rounded-2xl bg-white shadow-soft transition hover:shadow-lift"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-steel">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FULL-WIDTH PHOTO BAND ===== */}
        <section className="relative h-64 md:h-96">
          <Image
            src="/img/frame-autumn-2.jpg"
            alt="Steel frame construction in progress"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-steel/70 to-transparent" />
        </section>

        {/* ===== WHY LASKY ===== */}
        <section className="bg-white px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl font-bold text-steel md:text-4xl">
              Why Choose Lasky Metal Construction
            </h2>
            <div className="mt-14 grid gap-8 sm:grid-cols-2">
              {whyUs.map((item) => (
                <div key={item.title} className="rounded-2xl border border-gray-100 bg-cream p-8">
                  <span className="text-3xl">{item.icon}</span>
                  <h3 className="mt-4 text-xl font-bold text-steel">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-gray-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== GALLERY ===== */}
        <section id="gallery" className="bg-cream px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl font-bold text-steel md:text-4xl">
              Recent Projects
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-gray-600">
              A look at some of our completed metal building projects across Arkansas and Oklahoma.
            </p>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {galleryImages.map((img) => (
                <div key={img.src} className="gallery-card group relative overflow-hidden rounded-xl">
                  <div className="relative aspect-square">
                    <Image
                      src={img.src}
                      alt={img.label}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <span className="text-sm font-medium text-white">{img.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== MID-PAGE CTA + FORM ===== */}
        <section className="bg-steel px-6 py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Ready to Talk About Your Project?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-300">
                Fill out the form and our AI assistant will call you in about 60 seconds to discuss your metal building project. No waiting on hold, no phone tag.
              </p>
              <ul className="mt-6 space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-forge-red text-xs font-bold text-white">&#10003;</span>
                  Free estimates on all projects
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-forge-red text-xs font-bold text-white">&#10003;</span>
                  Owner on every job site
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-forge-red text-xs font-bold text-white">&#10003;</span>
                  Serving AR, OK & SW Missouri
                </li>
              </ul>
            </div>
            <DemoForm source="mid-page" />
          </div>
        </section>

        {/* ===== ABOUT ===== */}
        <section id="about" className="bg-white px-6 py-20 md:py-28">
          <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-steel md:text-4xl">
                Meet Jose
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Jose Gonzalez Rosas founded Lasky Metal Construction with a simple mission: build metal structures the right way, every time. With hands-on experience in every aspect of steel construction, Jose leads his crew from the front, not from behind a desk.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                From commercial warehouses and storage facilities to barndominiums and specialty buildings like car washes, Jose and his team have earned a reputation for quality work, honest timelines, and fair pricing across Northwest Arkansas and Northeast Oklahoma.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                When you work with Lasky Metal Construction, you work directly with the owner. No middlemen, no runaround.
              </p>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src="/img/roof-vent-2.jpg"
                alt="Jose and crew at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* ===== REVIEWS ===== */}
        <section id="reviews" className="bg-cream px-6 py-20 md:py-28">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-3xl font-bold text-steel md:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-center text-gray-600">
              {aggregateRating.value} out of 5 stars from {aggregateRating.count} Google reviews
            </p>
            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {reviews.map((r) => (
                <div key={r.name} className="rounded-2xl bg-white p-8 shadow-soft">
                  <div className="flex items-center gap-1 text-yellow-500">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <span key={i}>&#9733;</span>
                    ))}
                  </div>
                  <p className="mt-4 leading-relaxed text-gray-700">&ldquo;{r.body}&rdquo;</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forge-red text-sm font-bold text-white">
                      {r.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-steel">{r.name}</p>
                      <p className="text-xs text-gray-500">Google Review</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SERVICE AREAS ===== */}
        <section className="bg-white px-6 py-20 md:py-28">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-3xl font-bold text-steel md:text-4xl">
              Areas We Serve
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-gray-600">
              Proudly serving communities across Northwest Arkansas, Northeast Oklahoma, and Southwest Missouri.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {SITE.serviceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-gray-200 bg-cream px-5 py-2.5 text-sm font-medium text-steel"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="bg-cream px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-bold text-steel md:text-4xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-14 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-xl bg-white p-6 shadow-soft [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between font-semibold text-steel">
                    {faq.q}
                    <span className="ml-4 text-forge-red transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-gray-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CONTACT / FINAL CTA ===== */}
        <section id="contact" className="bg-steel px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Ready to Build?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-gray-300">
              Tell us about your project and get a free estimate. Whether it is a warehouse, storage facility, barndominium, or something custom, we are ready to make it happen.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`mailto:${SITE.email}`}
                className="inline-block rounded-lg bg-forge-red px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-forge-dk hover:shadow-xl"
              >
                Email Us for a Free Estimate
              </a>
            </div>
            <div className="mt-8 flex flex-col items-center gap-2 text-gray-400">
              <p className="text-sm">
                <span className="font-medium text-gray-300">Email:</span>{' '}
                <a href={`mailto:${SITE.email}`} className="transition hover:text-white">{SITE.email}</a>
              </p>
              <p className="text-sm">
                <span className="font-medium text-gray-300">Serving:</span> NW Arkansas, NE Oklahoma & SW Missouri
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="bg-steel-light px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <a href="/" className="flex items-center gap-3">
                <Image src="/img/logo.jpg" alt="Lasky Metal Construction" width={40} height={40} className="rounded" />
                <span className="text-lg font-bold text-white">
                  Lasky Metal<span className="text-forge-red"> Construction</span>
                </span>
              </a>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                {SITE.tagline}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white">Services</h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                <li>Commercial Metal Buildings</li>
                <li>Storage Unit Facilities</li>
                <li>Steel Frame Erection</li>
                <li>Metal Roofing & Panels</li>
                <li>Barndominiums & Shops</li>
                <li>Car Washes & Specialty</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white">Contact</h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                <li>
                  <a href={`mailto:${SITE.email}`} className="transition hover:text-white">{SITE.email}</a>
                </li>
                <li>{SITE.address.city}, {SITE.address.state}</li>
                <li>{SITE.hours}</li>
                <li className="pt-2">
                  <a
                    href={SITE.socials.facebook}
                    target="_blank"
                    rel="noopener"
                    className="transition hover:text-white"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
            </p>
            <p className="text-xs text-gray-600">
              Website by{' '}
              <a href="https://www.aipeakbiz.com" target="_blank" rel="noopener" className="text-gray-400 transition hover:text-white">
                AI Peak Biz
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
