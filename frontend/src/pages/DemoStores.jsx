import { Link } from 'react-router-dom';
import { 
  Zap, 
  ArrowRight, 
  ArrowLeft,
  ExternalLink,
  ShoppingBag,
  Laptop,
  Home as HomeIcon
} from 'lucide-react';
import { Button } from '../components/ui/button';

const CALENDLY_URL = "https://calendly.com/firelaunch/30min";

const demoStores = [
  {
    id: 1,
    name: "StyleHaven Boutique",
    category: "Fashion & Apparel",
    platform: "Shopify",
    description: "A premium fashion store with curated collections, size guides, and seamless checkout. Built for a London-based clothing brand.",
    image: "https://images.unsplash.com/photo-1666358062771-c806651d3bf7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwyfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMHN0b3JlJTIwd2Vic2l0ZSUyMG1vY2t1cHxlbnwwfHx8fDE3NzA4Mzc3NTN8MA&ixlib=rb-4.1.0&q=85",
    icon: ShoppingBag,
    features: ["Custom theme", "Size guide integration", "Wishlist feature", "Instagram shop sync"]
  },
  {
    id: 2,
    name: "TechVault UK",
    category: "Electronics & Gadgets",
    platform: "Shopify + eBay",
    description: "Multi-channel electronics store with product comparisons, warranty tracking, and inventory sync across platforms.",
    image: "https://images.unsplash.com/photo-1676116777245-1cc40079cd38?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDZ8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjB0ZWNoJTIwZ2FkZ2V0JTIwc3RvcmUlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDB8fHx8MTc3MDgzNzc1N3ww&ixlib=rb-4.1.0&q=85",
    icon: Laptop,
    features: ["Multi-channel sync", "Product comparisons", "Review integration", "Warranty tracking"]
  },
  {
    id: 3,
    name: "Nordic Home",
    category: "Home & Decor",
    platform: "Shopify",
    description: "Minimalist home decor store featuring room visualisations, gift registry, and personalised recommendations.",
    image: "https://images.unsplash.com/photo-1586652171272-8f18c34f79af?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaG9tZSUyMGRlY29yJTIwb25saW5lJTIwc3RvcmV8ZW58MHx8fHwxNzcwODM3Nzg5fDA&ixlib=rb-4.1.0&q=85",
    icon: HomeIcon,
    features: ["Room visualiser", "Gift registry", "Personalised picks", "Interior blog"]
  },
  {
    id: 4,
    name: "PetPals Market",
    category: "Pet Supplies",
    platform: "eBay",
    description: "High-volume eBay store for pet products with automated repricing, bulk listings, and customer loyalty program.",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&auto=format&fit=crop&q=60",
    icon: ShoppingBag,
    features: ["Auto repricing", "Bulk listings", "Loyalty rewards", "Subscription boxes"]
  },
  {
    id: 5,
    name: "FitGear Pro",
    category: "Sports & Fitness",
    platform: "Shopify",
    description: "Sports equipment store with product bundles, fitness guides, and athlete ambassador program integration.",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&auto=format&fit=crop&q=60",
    icon: ShoppingBag,
    features: ["Product bundles", "Fitness guides", "Ambassador portal", "Size calculator"]
  },
  {
    id: 6,
    name: "Artisan Craft Co",
    category: "Handmade & Crafts",
    platform: "Shopify + eBay",
    description: "Handcrafted goods marketplace with maker stories, custom orders, and gift wrapping options.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=60",
    icon: ShoppingBag,
    features: ["Maker profiles", "Custom orders", "Gift wrapping", "Workshop booking"]
  }
];

export default function DemoStores() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="nav-sticky" data-testid="demo-navigation">
        <div className="container-main">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2" data-testid="demo-logo">
              <div className="w-10 h-10 bg-[#D92D20] rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold font-['Space_Grotesk'] text-[#0F172A]">
                Fire Launch
              </span>
            </Link>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <a 
                href={CALENDLY_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                data-testid="demo-nav-book-btn"
              >
                <Button className="bg-[#D92D20] hover:bg-[#B91C1C] text-white px-6 py-2.5 font-semibold hover:shadow-[0_0_30px_rgba(217,45,32,0.25)] transition-all duration-300">
                  Book Free Call
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-[#F4F6F9]" data-testid="demo-hero">
        <div className="container-main">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-[#1F2A37] hover:text-[#D92D20] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="max-w-3xl">
            <span className="badge mb-4">
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo Store Gallery
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-6 leading-tight">
              See What We Build
            </h1>
            <p className="text-lg text-[#1F2A37]">
              Explore examples of Shopify and eBay stores we've launched for UK businesses. 
              Each store is built for conversion, speed, and scalability.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Stores Grid */}
      <section className="section-padding" data-testid="demo-grid-section">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demoStores.map((store) => {
              const IconComponent = store.icon;
              return (
                <div 
                  key={store.id} 
                  className="demo-store-card"
                  data-testid={`demo-store-${store.id}`}
                >
                  <div className="overflow-hidden">
                    <img 
                      src={store.image} 
                      alt={store.name}
                      className="w-full h-56 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-[#D92D20] bg-[#D92D20]/10 px-3 py-1 rounded-full">
                        {store.platform}
                      </span>
                      <span className="text-xs text-gray-500">{store.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-[#0F172A] mb-2">
                      {store.name}
                    </h3>
                    <p className="text-[#1F2A37] text-sm mb-4">
                      {store.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {store.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={CALENDLY_URL} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="w-full btn-secondary py-3 text-sm">
                        Build Something Similar
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#0F172A]" data-testid="demo-cta-section">
        <div className="container-main text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Want a Store Like These?
          </h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
            Book a free strategy call and we'll discuss how to bring your store vision to life. 
            From concept to launch in 14 days.
          </p>
          <a 
            href={CALENDLY_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            data-testid="demo-final-cta-btn"
          >
            <Button className="btn-primary text-lg px-10 py-7">
              Book Your Free Strategy Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F172A] border-t border-gray-800 py-8" data-testid="demo-footer">
        <div className="container-main">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#D92D20] rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold font-['Space_Grotesk'] text-white">
                Fire Launch
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 Fire Launch. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile CTA Bar */}
      <div className="mobile-cta-bar md:hidden" data-testid="demo-mobile-cta">
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
