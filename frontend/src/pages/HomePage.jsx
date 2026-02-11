import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Zap, 
  BarChart3, 
  Check, 
  ChevronRight, 
  Menu, 
  X,
  ArrowRight,
  Star,
  Store,
  Package,
  Settings,
  Phone,
  Wrench,
  Rocket
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from '../components/ui/carousel';

const CALENDLY_URL = "https://calendly.com/firelaunch/30min";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Fashion Boutique Owner",
    location: "Leeds",
    quote: "Fire Launch delivered exactly what they promised. My Shopify store was live in 12 days, and I made my first sale within 48 hours. The training was invaluable - I feel confident managing everything myself now.",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "James Harrison",
    role: "Electronics Retailer",
    location: "Bradford",
    quote: "I'd tried setting up my own eBay store twice before and failed. Fire Launch made it look easy. Professional listings, proper templates, everything integrated. My sales have tripled compared to my old setup.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Emma Thompson",
    role: "Handmade Crafts Seller",
    location: "Harrogate",
    quote: "As a small business owner, I was nervous about the investment. But Fire Launch paid for itself within the first month. The SEO setup alone has brought in so much organic traffic.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Michael Roberts",
    role: "Sports Equipment Seller",
    location: "Wakefield",
    quote: "The dual Shopify and eBay setup was exactly what I needed. Having both channels managed professionally has doubled my reach. Brilliant service from start to finish.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Lucy Palmer",
    role: "Home Decor Shop Owner",
    location: "York",
    quote: "Fire Launch understood my vision from day one. The store looks exactly how I imagined it - clean, professional, and easy to navigate. My customers love it!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "David Clarke",
    role: "Pet Supplies Retailer",
    location: "Huddersfield",
    quote: "From the initial call to launch day, everything was handled professionally. The product uploads were done perfectly, and the eBay listings are already outperforming my competition.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Sophie Williams",
    role: "Baby Products Seller",
    location: "Sheffield",
    quote: "I was worried about managing an online store with a newborn at home. Fire Launch set everything up so intuitively that I can run my business from my phone. Game changer!",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Tom Anderson",
    role: "Automotive Parts Seller",
    location: "Dewsbury",
    quote: "The variation and category setup for my car parts was complex, but Fire Launch nailed it. Every product is properly categorised and searchable. Exactly what I needed.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Rachel Green",
    role: "Vintage Clothing Seller",
    location: "Otley",
    quote: "My vintage store needed a unique feel, and Fire Launch delivered. The theme customisation perfectly captures my brand. I've had customers compliment the website design!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Chris Taylor",
    role: "Garden Supplies Owner",
    location: "Pontefract",
    quote: "Best investment I've made for my business. The store went live ahead of schedule, the training was thorough, and the support team actually responds when you need help.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
  }
];

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headlineAnimated, setHeadlineAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Trigger headline animation
    setTimeout(() => setHeadlineAnimated(true), 300);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav 
        className={`nav-sticky transition-all duration-300 ${isScrolled ? 'shadow-sm' : ''}`}
        data-testid="main-navigation"
      >
        <div className="container-main">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2" data-testid="logo">
              <div className="w-10 h-10 bg-[#D92D20] rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold font-['Space_Grotesk'] text-[#0F172A]">
                Fire Launch
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="link-hover text-[15px] font-medium">Services</a>
              <a href="#pricing" className="link-hover text-[15px] font-medium">Pricing</a>
              <Link to="/demos" className="link-hover text-[15px] font-medium">Demo Stores</Link>
              <a href="#testimonials" className="link-hover text-[15px] font-medium">Results</a>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <a 
                href={CALENDLY_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                data-testid="nav-book-call-btn"
              >
                <Button className="bg-[#D92D20] hover:bg-[#B91C1C] text-white px-6 py-2.5 font-semibold hover:shadow-[0_0_30px_rgba(217,45,32,0.25)] transition-all duration-300">
                  Book Free Call
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="mobile-menu-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <div className="container-main flex flex-col gap-4">
              <a href="#services" className="py-2 text-[15px] font-medium" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#pricing" className="py-2 text-[15px] font-medium" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
              <Link to="/demos" className="py-2 text-[15px] font-medium" onClick={() => setMobileMenuOpen(false)}>Demo Stores</Link>
              <a href="#testimonials" className="py-2 text-[15px] font-medium" onClick={() => setMobileMenuOpen(false)}>Results</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="section-padding pt-16 md:pt-24 relative overflow-hidden" data-testid="hero-section">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center">
            <div className="badge mb-6 animate-fade-in-up">
              <Zap className="w-4 h-4 mr-2" />
              UK's Founder-Led E-Commerce Launch Studio
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-6 leading-tight animate-fade-in-up delay-100">
              Launch Your{' '}
              <span className={`headline-underline ${headlineAnimated ? 'animate' : ''}`}>
                Shopify Website & eBay Store
              </span>{' '}
              in 14 Days — Built for UK Sellers
            </h1>
            
            <p className="text-lg text-[#1F2A37] mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
              Professional Shopify website development and eBay store setup for UK ecommerce sellers. 
              Get a conversion-optimised online store, ready to sell — delivered in just 14 days.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
              <a 
                href={CALENDLY_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                data-testid="hero-book-call-btn"
              >
                <Button className="btn-primary text-base px-8 py-6 w-full sm:w-auto">
                  Book Your Free Strategy Call
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <Link to="/demos">
                <Button variant="outline" className="btn-secondary text-base px-8 py-6 w-full sm:w-auto">
                  View Demo Stores
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 pt-8 border-t border-gray-100">
              <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#0F172A] font-['Space_Grotesk']">50+</p>
                  <p className="text-sm text-gray-500">Stores Launched</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#0F172A] font-['Space_Grotesk']">14</p>
                  <p className="text-sm text-gray-500">Days Average</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#0F172A] font-['Space_Grotesk']">£2M+</p>
                  <p className="text-sm text-gray-500">Client Revenue</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#0F172A] font-['Space_Grotesk']">100%</p>
                  <p className="text-sm text-gray-500">UK Based</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Bento Grid */}
      <section id="services" className="section-padding bg-[#F4F6F9]" data-testid="services-section">
        <div className="container-main">
          <div className="text-center mb-16">
            <span className="badge mb-4">What We Do</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
              Shopify Website Development & eBay Store Setup Services in the UK
            </h2>
            <p className="text-[#1F2A37] max-w-2xl mx-auto">
              Everything you need to go from idea to live store, selling products and generating revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="card col-span-1 lg:col-span-2 flex flex-col md:flex-row gap-6" data-testid="service-shopify">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-[#D92D20]/10 rounded-xl flex items-center justify-center">
                  <ShoppingCart className="w-7 h-7 text-[#D92D20]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0F172A] mb-3">Shopify Store Development</h3>
                <p className="text-[#1F2A37] mb-4">
                  Custom Shopify stores built for conversion. Premium themes, optimised checkout, 
                  and integrations that actually work. Ready to sell from day one.
                </p>
                <ul className="space-y-2 text-sm text-[#1F2A37]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D92D20]" />
                    Custom theme development
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D92D20]" />
                    Payment gateway setup
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D92D20]" />
                    Inventory management
                  </li>
                </ul>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="card" data-testid="service-ebay">
              <div className="w-14 h-14 bg-[#D92D20]/10 rounded-xl flex items-center justify-center mb-4">
                <Store className="w-7 h-7 text-[#D92D20]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0F172A] mb-3">eBay Store Setup</h3>
              <p className="text-[#1F2A37]">
                Professional eBay stores with optimised listings, templates, and automation. 
                Reach millions of buyers instantly.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="card" data-testid="service-product">
              <div className="w-14 h-14 bg-[#D92D20]/10 rounded-xl flex items-center justify-center mb-4">
                <Package className="w-7 h-7 text-[#D92D20]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0F172A] mb-3">Product Upload</h3>
              <p className="text-[#1F2A37]">
                Bulk product uploads with SEO-optimised titles, descriptions, and imagery. 
                Up to 100 products included.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="card" data-testid="service-analytics">
              <div className="w-14 h-14 bg-[#D92D20]/10 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-7 h-7 text-[#D92D20]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0F172A] mb-3">Analytics Setup</h3>
              <p className="text-[#1F2A37]">
                Google Analytics 4, Facebook Pixel, and conversion tracking configured 
                so you can measure what matters.
              </p>
            </div>

            {/* Service Card 5 */}
            <div className="card" data-testid="service-training">
              <div className="w-14 h-14 bg-[#D92D20]/10 rounded-xl flex items-center justify-center mb-4">
                <Settings className="w-7 h-7 text-[#D92D20]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0F172A] mb-3">Training & Handover</h3>
              <p className="text-[#1F2A37]">
                Complete training sessions and documentation so you can manage and scale 
                your store with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding" data-testid="how-it-works-section">
        <div className="container-main">
          <div className="text-center mb-16">
            <span className="badge mb-4">Our Process</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
              How It Works
            </h2>
            <p className="text-[#1F2A37] max-w-2xl mx-auto">
              From first call to live store in three simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="text-center" data-testid="step-1">
              <div className="w-16 h-16 bg-[#D92D20]/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <Phone className="w-8 h-8 text-[#D92D20]" />
              </div>
              <div className="text-sm font-semibold text-[#D92D20] mb-2">Step 1</div>
              <h3 className="text-xl font-semibold text-[#0F172A] mb-3">Strategy Call</h3>
              <p className="text-[#64748B] text-sm">
                We discuss your business, products, and goals. You'll get a clear plan and timeline for your store launch.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center" data-testid="step-2">
              <div className="w-16 h-16 bg-[#D92D20]/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <Wrench className="w-8 h-8 text-[#D92D20]" />
              </div>
              <div className="text-sm font-semibold text-[#D92D20] mb-2">Step 2</div>
              <h3 className="text-xl font-semibold text-[#0F172A] mb-3">Store Build</h3>
              <p className="text-[#64748B] text-sm">
                We build your Shopify website and eBay store. Products uploaded, payments configured, everything optimised.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center" data-testid="step-3">
              <div className="w-16 h-16 bg-[#D92D20]/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <Rocket className="w-8 h-8 text-[#D92D20]" />
              </div>
              <div className="text-sm font-semibold text-[#D92D20] mb-2">Step 3</div>
              <h3 className="text-xl font-semibold text-[#0F172A] mb-3">Launch & Handover</h3>
              <p className="text-[#64748B] text-sm">
                Your store goes live. We train you on everything and hand over full control. You're ready to sell.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-padding" data-testid="pricing-section">
        <div className="container-main">
          <div className="text-center mb-16">
            <span className="badge mb-4">Transparent Pricing</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
              Choose Your Launch Package
            </h2>
            <p className="text-[#1F2A37] max-w-2xl mx-auto">
              Simple pricing. No hidden fees. 50% deposit to begin, 50% before launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* START Package */}
            <div className="card relative" data-testid="pricing-start">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-[#D92D20]" />
                <h3 className="text-xl font-semibold text-[#0F172A]">START</h3>
              </div>
              <p className="text-sm text-gray-500 mb-6">Best for: New sellers launching their first professional online store</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[#0F172A] font-['Space_Grotesk']">£799</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start gap-3">
                  <Check className="check-icon mt-0.5" />
                  <span className="text-[#1F2A37]">Full Shopify website setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="check-icon mt-0.5" />
                  <span className="text-[#1F2A37]">Premium theme configuration</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="check-icon mt-0.5" />
                  <span className="text-[#1F2A37]">Up to 15 products uploaded</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="check-icon mt-0.5" />
                  <span className="text-[#1F2A37]">Up to 10 collections created</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="check-icon mt-0.5" />
                  <span className="text-[#1F2A37]">Professionally structured homepage</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="check-icon mt-0.5" />
                  <span className="text-[#1F2A37]">About, Contact & Policy pages</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="check-icon mt-0.5" />
                  <span className="text-[#1F2A37]">Payment gateway integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="check-icon mt-0.5" />
                  <span className="text-[#1F2A37]">Shipping settings configuration</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="check-icon mt-0.5" />
                  <span className="text-[#1F2A37]">Mobile optimisation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="check-icon mt-0.5" />
                  <span className="text-[#1F2A37]">Basic on-page SEO structure</span>
                </li>
              </ul>
              <a 
                href={CALENDLY_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="outline" className="w-full btn-secondary py-6">
                  Get Started
                </Button>
              </a>
              <p className="text-xs text-center text-gray-400 mt-4">
                £399.50 deposit • £399.50 before launch
              </p>
            </div>

            {/* SELLER Package - Highlighted */}
            <div className="card pricing-card-highlight relative" data-testid="pricing-seller">
              <div className="badge-popular">Most Popular</div>
              <div className="flex items-center gap-2 mb-2 mt-2">
                <Zap className="w-5 h-5 text-[#D92D20]" />
                <h3 className="text-xl font-semibold text-[#0F172A]">SELLER</h3>
              </div>
              <p className="text-sm text-gray-500 mb-6">Best for: Sellers who want marketplace exposure alongside their website</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[#0F172A] font-['Space_Grotesk']">£999</span>
              </div>
              <p className="text-xs font-medium text-[#D92D20] mb-4">Everything in START +</p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start gap-3">
                  <Check className="check-icon mt-0.5" />
                  <span className="text-[#1F2A37]">eBay seller account setup / optimisation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="check-icon mt-0.5" />
                  <span className="text-[#1F2A37]">eBay store configuration</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="check-icon mt-0.5" />
                  <span className="text-[#1F2A37]">10 eBay product listings created</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="check-icon mt-0.5" />
                  <span className="text-[#1F2A37]">Optimised titles & formatted descriptions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="check-icon mt-0.5" />
                  <span className="text-[#1F2A37]">Category & variation setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="check-icon mt-0.5" />
                  <span className="text-[#1F2A37]">Basic store banner setup</span>
                </li>
              </ul>
              <a 
                href={CALENDLY_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full btn-primary py-6">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <p className="text-xs text-center text-gray-400 mt-4">
                £499.50 deposit • £499.50 before launch
              </p>
            </div>

            {/* GROWTH Package */}
            <div className="card relative" data-testid="pricing-growth">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-[#D92D20]" />
                <h3 className="text-xl font-semibold text-[#0F172A]">GROWTH</h3>
              </div>
              <p className="text-sm text-gray-500 mb-6">Best for: Sellers serious about volume and structured scaling</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[#0F172A] font-['Space_Grotesk']">£1,199</span>
              </div>
              <p className="text-xs font-medium text-[#D92D20] mb-4">Everything in START +</p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start gap-3">
                  <Check className="check-icon mt-0.5" />
                  <span className="text-[#1F2A37]">25 website products uploaded</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="check-icon mt-0.5" />
                  <span className="text-[#1F2A37]">15 collections structured properly</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="check-icon mt-0.5" />
                  <span className="text-[#1F2A37]">Refined homepage layout structure</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="check-icon mt-0.5" />
                  <span className="text-[#1F2A37]">eBay account setup / optimisation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="check-icon mt-0.5" />
                  <span className="text-[#1F2A37]">20 eBay product listings created</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="check-icon mt-0.5" />
                  <span className="text-[#1F2A37]">Optimised titles & structured descriptions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="check-icon mt-0.5" />
                  <span className="text-[#1F2A37]">Variation & category configuration</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="check-icon mt-0.5" />
                  <span className="text-[#1F2A37]">Marketplace-ready formatting</span>
                </li>
              </ul>
              <a 
                href={CALENDLY_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="outline" className="w-full btn-secondary py-6">
                  Get Started
                </Button>
              </a>
              <p className="text-xs text-center text-gray-400 mt-4">
                £599.50 deposit • £599.50 before launch
              </p>
            </div>
          </div>

          {/* Additional Services */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-[#F4F6F9] rounded-xl p-6 text-center">
              <h4 className="font-semibold text-[#0F172A] mb-4">Additional Services</h4>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-sm text-[#1F2A37]">
                <div className="flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-[#D92D20]" />
                  <span>Extra Website Products (per 10) – <strong>£199</strong></span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-[#D92D20]" />
                  <span>Extra eBay Listings (per 10) – <strong>£199</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding" data-testid="testimonials-section">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="badge mb-4">Client Results</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
              Trusted by UK Ecommerce Sellers
            </h2>
            <p className="text-[#1F2A37] max-w-2xl mx-auto mb-6">
              Real feedback from UK business owners who launched with Fire Launch.
            </p>
            {/* Star Rating Summary */}
            <div className="flex items-center justify-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D92D20] text-[#D92D20]" />
                ))}
              </div>
              <span className="text-[#0F172A] font-semibold">5.0</span>
              <span className="text-[#64748B]">from 50+ reviews</span>
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
              data-testid="testimonials-carousel"
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                    <div className="testimonial-card h-full" data-testid={`testimonial-${index + 1}`}>
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-[#D92D20] text-[#D92D20]" />
                        ))}
                      </div>
                      <p className="text-[#1F2A37] mb-6 text-sm leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center gap-4">
                        <img 
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-[#0F172A]">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12 border-[#D92D20] text-[#D92D20] hover:bg-[#D92D20] hover:text-white" />
              <CarouselNext className="hidden md:flex -right-12 border-[#D92D20] text-[#D92D20] hover:bg-[#D92D20] hover:text-white" />
            </Carousel>
            
            {/* Mobile swipe indicator */}
            <p className="text-center text-sm text-gray-400 mt-6 md:hidden">
              Swipe to see more reviews
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-[#0F172A]" data-testid="cta-section">
        <div className="container-main text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Launch Your Store?
          </h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
            Book a free 30-minute strategy call. We'll discuss your business, 
            your goals, and create a clear roadmap to launch in 14 days.
          </p>
          <a 
            href={CALENDLY_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            data-testid="final-cta-btn"
          >
            <Button className="btn-primary text-lg px-10 py-7">
              Book Your Free Strategy Call
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
          <p className="text-gray-400 text-sm mt-6">
            No obligation. No hard sell. Just honest advice.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F172A] border-t border-gray-800 py-12" data-testid="footer">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-[#D92D20] rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold font-['Space_Grotesk'] text-white">
                  Fire Launch
                </span>
              </div>
              <p className="text-gray-400 max-w-sm mb-4">
                UK's founder-led e-commerce launch studio. Professional Shopify website setup UK and eBay store setup UK services for businesses ready to sell online.
              </p>
              <p className="text-gray-500 text-sm">
                Shopify Website Setup UK • eBay Store Setup UK • UK Ecommerce Launch Services
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="footer-link">Services</a></li>
                <li><a href="#pricing" className="footer-link">Pricing</a></li>
                <li><Link to="/demos" className="footer-link">Demo Stores</Link></li>
                <li><a href="#testimonials" className="footer-link">Results</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-white mb-4">Get in Touch</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href={CALENDLY_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    Book a Call
                  </a>
                </li>
                <li><a href="mailto:hello@firelaunch.co.uk" className="footer-link">hello@firelaunch.co.uk</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Fire Launch. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="footer-link text-sm">Privacy Policy</a>
              <a href="#" className="footer-link text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile CTA Bar */}
      <div className="mobile-cta-bar md:hidden" data-testid="mobile-cta-bar">
        <a 
          href={CALENDLY_URL} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          <Button className="w-full btn-primary py-4">
            Book Free Call
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </a>
      </div>
    </div>
  );
}
