import { Link } from 'react-router-dom';
import { 
  Zap, 
  ArrowRight, 
  ArrowLeft,
  ExternalLink
} from 'lucide-react';
import { Button } from '../components/ui/button';

const CALENDLY_URL = "https://calendly.com/firelaunch/30min";

// ============================================
// DEMO STORES DATA - Easy to duplicate/edit
// ============================================
const demoStores = [
  {
    id: 1,
    name: "Stylix",
    description: "Fashionable Sports Clothing Store",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    url: "https://dt-stylix.myshopify.com" // Replace with actual store URL
  },
  {
    id: 2,
    name: "Doppo Store",
    description: "Modern Office Furniture Store",
    image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=600&h=400&fit=crop",
    url: "https://doppostore.myshopify.com/?_ab=0&_fd=0&_sc=1" // Replace with actual store URL
  },
  {
    id: 3,
    name: "Mikadu",
    description: "Luxury Handbags And Clothes Store",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
    url: "https://mikadu-store-demo.myshopify.com" // Replace with actual store URL
  },
  {
    id: 4,
    name: "Nego",
    description: "Fsshion Store",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop",
    url: "http://nego2.demo.towerthemes.com" // Replace with actual store URL
  },
  {
    id: 5,
    name: "Hawki",
    description: "Single Product Store",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop",
    url: "https://hawki-theme.myshopify.com" // Replace with actual store URL
  },
  {
    id: 6,
    name: "GlideX",
    description: "Electronic Scooter Store",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    url: "https://greenshift-road.myshopify.com" // Replace with actual store URL
  },
  {
    id: 7,
    name: "Divize",
    description: "Furniture And Interior Store",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    url: "https://divize-store-demo.myshopify.com" // Replace with actual store URL
  },
 {
    id: 8,
    name: "InTrend",
    description: "Home Furniture Store",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    url: "https://intrend-theme.myshopify.com" // Replace with actual store URL
  }
];
// ============================================

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
      <section className="py-16 md:py-20 bg-[#F9FAFB]" data-testid="demo-hero">
        <div className="container-main">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-[#64748B] hover:text-[#D92D20] mb-8 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-4 leading-tight">
              Our Work
            </h1>
            <p className="text-lg text-[#64748B]">
              Explore stores we've built for UK businesses. Each one designed for conversion.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Stores Grid */}
      <section className="py-16 md:py-24 bg-white" data-testid="demo-grid-section">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demoStores.map((store) => (
              <div 
                key={store.id} 
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-out"
                data-testid={`demo-store-${store.id}`}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={store.image} 
                    alt={store.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#0F172A] mb-1 font-['Space_Grotesk']">
                    {store.name}
                  </h3>
                  <p className="text-[#64748B] text-sm mb-5">
                    {store.description}
                  </p>
                  <a 
                    href={store.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#D92D20] hover:bg-[#B91C1C] text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 hover:shadow-[0_0_20px_rgba(217,45,32,0.25)]"
                  >
                    View Live Store
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <p className="text-xs text-[#64748B] mt-3"></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-[#0F172A]" data-testid="demo-cta-section">
        <div className="container-main text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Want a Store Like These?
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Book a free strategy call and let's bring your store vision to life.
          </p>
          <a 
            href={CALENDLY_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            data-testid="demo-final-cta-btn"
          >
            <Button className="bg-[#D92D20] hover:bg-[#B91C1C] text-white text-base px-8 py-6 font-semibold hover:shadow-[0_0_30px_rgba(217,45,32,0.25)] transition-all duration-300">
              Book Your Free Call
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
            <p className="text-gray-500 text-sm">
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
          <Button className="w-full bg-[#D92D20] hover:bg-[#B91C1C] text-white py-4 font-semibold">
            Book Free Call
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </a>
      </div>
    </div>
  );
}
