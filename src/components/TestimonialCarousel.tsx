import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight, BadgeCheck, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Import testimonial profile images
import michaelRodriguez from "@/assets/testimonials/michael-rodriguez.jpg";
import jamesChen from "@/assets/testimonials/james-chen.jpg";
import sarahPatel from "@/assets/testimonials/sarah-patel.jpg";
import emilyWatson from "@/assets/testimonials/emily-watson.jpg";
import davidKim from "@/assets/testimonials/david-kim.jpg";
import lisaMartinez from "@/assets/testimonials/lisa-martinez.jpg";

interface Testimonial {
  initials: string;
  name: string;
  role: string;
  company?: string;
  text: string;
  rating: number;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    initials: "MR",
    name: "Michael Rodriguez",
    role: "Content Creator",
    company: "TechBlog Pro",
    text: "This tool transformed my content workflow. I can now produce authentic-sounding articles 3x faster without worrying about AI flags.",
    rating: 5,
    avatar: michaelRodriguez,
  },
  {
    initials: "JC",
    name: "James Chen",
    role: "Graduate Student",
    company: "Stanford University",
    text: "The AI checker is incredibly accurate. Helps me ensure my academic writing maintains authenticity before submission.",
    rating: 5,
    avatar: jamesChen,
  },
  {
    initials: "SP",
    name: "Sarah Patel",
    role: "Marketing Manager",
    company: "GrowthHub",
    text: "Perfect for refining AI-assisted content. The results sound genuinely human every time. Our engagement rates improved 40%.",
    rating: 5,
    avatar: sarahPatel,
  },
  {
    initials: "EW",
    name: "Emily Watson",
    role: "Freelance Writer",
    text: "I was skeptical at first, but this tool genuinely delivers. My clients can't tell the difference, and neither can Turnitin!",
    rating: 5,
    avatar: emilyWatson,
  },
  {
    initials: "DK",
    name: "David Kim",
    role: "PhD Researcher",
    company: "MIT",
    text: "As someone who uses AI for initial drafts, this humanizer is essential. It preserves meaning while adding natural variation.",
    rating: 5,
    avatar: davidKim,
  },
  {
    initials: "LM",
    name: "Lisa Martinez",
    role: "SEO Specialist",
    text: "Google rankings improved significantly after humanizing our AI content. This tool is now part of our standard workflow.",
    rating: 5,
    avatar: lisaMartinez,
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(1);

  // Handle responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      setItemsPerView(window.innerWidth >= 768 ? 3 : 1);
    };
    
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-card/20 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-current" />
            4.8/5 from 1,200+ reviews
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Loved by Writers Worldwide
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of students, professionals, and creators who trust AI Free Text Pro
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-background/80 backdrop-blur hidden md:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-background/80 backdrop-blur hidden md:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Carousel Track */}
          <div className="overflow-hidden px-4">
            <div 
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView + 2)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index}
                  className="flex-shrink-0 w-full md:w-[calc(33.333%-1rem)] p-6 bg-card/50 backdrop-blur border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="space-y-4">
                    {/* Stars */}
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <p className="text-muted-foreground italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    
                    {/* Author */}
                    <div className="flex items-center gap-3 pt-2 border-t border-border/50">
                      <Avatar className="w-12 h-12 border-2 border-primary/20">
                        {testimonial.avatar && (
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} className="object-cover" />
                        )}
                        <AvatarFallback className="bg-gradient-to-br from-primary/20 to-secondary/20 text-primary font-bold">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold">{testimonial.name}</p>
                          <BadgeCheck className="w-4 h-4 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                          {testimonial.company && <span className="text-primary"> · {testimonial.company}</span>}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Dots Indicator - Mobile touch-friendly */}
          <div className="flex justify-center gap-3 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => { setCurrentIndex(index); setIsAutoPlaying(false); }}
                className={`min-w-[44px] min-h-[44px] flex items-center justify-center transition-all duration-300`}
                aria-label={`Go to slide ${index + 1}`}
              >
                <span className={`rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-primary w-8 h-3" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-3 h-3"
                }`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
