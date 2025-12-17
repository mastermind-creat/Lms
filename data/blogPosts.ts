
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Rise of Silicon Savannah: Kenya's Tech Boom",
    excerpt: "How Nairobi became the tech hub of East Africa and what it means for new developers entering the market.",
    image: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?auto=format&fit=crop&w=800&q=80",
    date: "Mar 15, 2025",
    author: "Sarah Kamau",
    category: "Industry Insights",
    readTime: "5 min read",
    content: `
      <p class="mb-4">Nairobi is often referred to as the "Silicon Savannah" of Africa, a moniker that reflects the city's burgeoning technology ecosystem. Over the past decade, Kenya has positioned itself as a leader in digital innovation, driven by a young, tech-savvy population and a government keen on fostering ICT growth.</p>
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 mt-6">The M-PESA Effect</h3>
      <p class="mb-4">It's impossible to talk about Kenya's tech scene without mentioning M-PESA. The mobile money platform revolutionized financial inclusion and proved that Africa could innovate for the world. This success story paved the way for a wave of fintech startups, attracting significant venture capital to the region.</p>
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 mt-6">Opportunities for Developers</h3>
      <p class="mb-4">For new developers, the market is hungry for talent. From banking integrations to agricultural tech (AgriTech) solutions, the demand for software engineers who understand the local context is at an all-time high. International tech giants like Microsoft and Google have also set up development centers in Nairobi, further validating the quality of local talent.</p>
      <p class="mb-4">The future is bright, but it requires continuous learning. The technologies driving this boom—Cloud Computing, AI, and Mobile Development—are evolving rapidly.</p>
    `
  },
  {
    id: 2,
    title: "Why Flutter is dominating Mobile Dev in Africa",
    excerpt: "Cross-platform development is crucial for startups. Here's why Flutter is the tool of choice for African founders.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    date: "Mar 10, 2025",
    author: "Alex Chen",
    category: "Tech Trends",
    readTime: "4 min read",
    content: `
      <p class="mb-4">In the African startup ecosystem, resources are often tight, and speed to market is critical. This is where Flutter, Google's UI toolkit for building natively compiled applications, shines. It allows teams to build apps for mobile, web, and desktop from a single codebase.</p>
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 mt-6">Cost-Effective Development</h3>
      <p class="mb-4">Startups no longer need to hire separate iOS and Android teams. A single Flutter developer can deliver a high-quality experience across both platforms. This efficiency is a game-changer for bootstrapped founders in Lagos, Nairobi, and Cape Town.</p>
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 mt-6">Performance on Low-End Devices</h3>
      <p class="mb-4">Flutter's rendering engine ensures smooth performance even on lower-end Android devices, which are prevalent in many African markets. Unlike some hybrid frameworks that rely on web views, Flutter compiles to native ARM code, delivering a buttery-smooth 60fps experience.</p>
    `
  },
  {
    id: 3,
    title: "Student Success: From Security Guard to Software Engineer",
    excerpt: "Meet David, who used ElimuTech's offline mode to study during night shifts and landed a job at Cellulant.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    date: "Feb 28, 2025",
    author: "ElimuTech Team",
    category: "Success Stories",
    readTime: "6 min read",
    content: `
      <p class="mb-4">David's journey is a testament to resilience and the power of accessible education. Working as a night security guard in Westlands, David had limited internet access and even less free time. However, he had a dream to enter the tech industry.</p>
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 mt-6">Learning in the Dark</h3>
      <p class="mb-4">"I used ElimuTech's offline feature to download Python modules during the day when I was near free Wi-Fi spots," David recalls. "At night, during my breaks, I would code on my second-hand laptop."</p>
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 mt-6">The Breakthrough</h3>
      <p class="mb-4">After six months of rigorous self-study and mentorship from the ElimuTech community, David built a portfolio project automating shift scheduling. This project caught the eye of a recruiter at Cellulant. Today, David helps build payment gateways that serve millions.</p>
    `
  },
  {
    id: 4,
    title: "Top 5 Skills Hiring Managers Look For in 2025",
    excerpt: "Beyond coding: Soft skills, system design, and cloud knowledge are becoming prerequisites for junior roles.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    date: "Feb 20, 2025",
    author: "Kevin Omondi",
    category: "Career Advice",
    readTime: "5 min read",
    content: "<p>Content regarding hiring skills...</p>"
  },
  {
    id: 5,
    title: "Demystifying Data Science for Agriculture",
    excerpt: "How big data is helping small-scale farmers in Kenya predict weather patterns and optimize yields.",
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80",
    date: "Feb 15, 2025",
    author: "Dr. Zainab Ahmed",
    category: "AgriTech",
    readTime: "7 min read",
    content: "<p>Content regarding AgriTech...</p>"
  },
  {
    id: 6,
    title: "Understanding M-PESA API Integration",
    excerpt: "A technical deep dive into the Daraja API. Tips and tricks for smooth B2C and C2B payments.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    date: "Feb 05, 2025",
    author: "Brian Kipkorir",
    category: "Tutorials",
    readTime: "10 min read",
    content: "<p>Content regarding Daraja API...</p>"
  }
];
