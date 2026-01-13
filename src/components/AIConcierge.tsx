import { useState, useRef, useEffect } from "react";
import { 
  cityCuisine, 
  cityItineraries, 
  cityEtiquette, 
  cityLanguages, 
  languagePhrases, 
  cityCurrencies, 
  cityCostMultipliers, 
  citySuggestions 
} from "../data/cities";
import type { WeatherData } from "../hooks/useWeather";

interface Props {
  city: string;
  weather: WeatherData | null;
}

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
}

const AIConcierge = ({ city, weather }: Props) => {
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", text: `Hello! I'm your ${city} concierge. Ask me about food, sights, or etiquette!`, sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setMessages([
        { id: "1", text: `Hello! I'm your ${city} concierge. Ask me about food, sights, or etiquette!`, sender: "bot" }
    ]);
  }, [city]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const generateResponse = (text: string) => {
    const lower = text.toLowerCase();
    
    if (lower.includes("food") || lower.includes("eat") || lower.includes("dish") || lower.includes("hungry") || lower.includes("restaurant")) {
      const foods = cityCuisine[city];
      if (foods) {
        const randomFood = foods[Math.floor(Math.random() * foods.length)];
        return `You absolutely must try the **${randomFood.dish}**. ${randomFood.description}`;
      }
    }
    
    if (lower.includes("visit") || lower.includes("see") || lower.includes("do") || lower.includes("sight") || lower.includes("tour")) {
      const itin = cityItineraries[city];
      if (itin) {
        const randomDay = itin[Math.floor(Math.random() * itin.length)];
        const randomActivity = randomDay.activities[Math.floor(Math.random() * randomDay.activities.length)];
        return `I highly recommend visiting **${randomActivity}**. It's a highlight of our "${randomDay.title}" tour.`;
      }
    }

    if (lower.includes("weather") || lower.includes("temp") || lower.includes("hot") || lower.includes("cold") || lower.includes("rain")) {
      if (weather) {
        const temp = Math.round(weather.temperature);
        return `Currently, it's **${temp}°C** in ${city}. It's a ${weather.isDay ? 'day' : 'night'} there right now.`;
      }
      return "I can't check the live weather right now, but usually it's lovely!";
    }

    if (lower.includes("tip") || lower.includes("rule") || lower.includes("etiquette") || lower.includes("manners") || lower.includes("culture")) {
       const tips = cityEtiquette[city];
       if (tips) {
         const randomTip = tips[Math.floor(Math.random() * tips.length)];
         return `Cultural Tip: **${randomTip.rule}** - ${randomTip.description}`;
       }
    }

    if (lower.includes("language") || lower.includes("speak") || lower.includes("say") || lower.includes("phrase")) {
      const langCode = cityLanguages[city];
      const langNames: Record<string, string> = {
        "en-US": "English", "en-GB": "English", "ja-JP": "Japanese",
        "fr-FR": "French", "ar-MA": "Arabic", "zh-CN": "Mandarin Chinese"
      };
      
      if (langCode && languagePhrases[langCode]) {
        const phrases = languagePhrases[langCode];
        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        const langName = langNames[langCode] || "the local language";
        
        return `In ${city}, people speak **${langName}**. For example, to say "${randomPhrase.phrase}", you say "**${randomPhrase.translation}**"${randomPhrase.pronunciation ? ` (pronounced *${randomPhrase.pronunciation}*)` : ''}.`;
      }
    }

    if (lower.includes("currency") || lower.includes("money") || lower.includes("cost") || lower.includes("expensive") || lower.includes("price") || lower.includes("budget")) {
      const currency = cityCurrencies[city];
      const multiplier = cityCostMultipliers[city];
      
      let costLevel = "moderate";
      if (multiplier > 1.5) costLevel = "expensive";
      else if (multiplier < 1.0) costLevel = "very affordable";
      
      if (currency) {
         return `The currency in ${city} is the **${currency.code} (${currency.symbol})**. Generally, ${city} is considered **${costLevel}** for travelers compared to global averages.`;
      }
    }

    if (lower.includes("about") || lower.includes("overview") || lower.includes("guide")) {
        const suggestion = citySuggestions[city];
        if (suggestion) {
            return `Here is a quick overview: ${suggestion}`;
        }
    }

    if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
        return `Welcome to ${city}! How can I assist you today?`;
    }

    if (lower.includes("thank") || lower.includes("thanks")) {
        return "You're very welcome! Enjoy your trip.";
    }

    return "I can help with **food**, **sights**, **weather**, **etiquette**, **language**, and **budget** questions. What would you like to know?";
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), text: input, sender: "user" };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const responseText = generateResponse(userMsg.text);
      const botMsg: Message = { id: (Date.now() + 1).toString(), text: responseText, sender: "bot" };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 800 + Math.random() * 500); // Simulate network/thinking delay
  };

  return (
    <div className="card shadow-sm h-100">
      <div className="card-body d-flex flex-column" style={{ minHeight: "400px", maxHeight: "400px" }}>
        <h5 className="card-title text-muted text-uppercase mb-3" style={{ fontSize: "0.9rem", letterSpacing: "1px" }}>
          <i className="bi bi-robot me-2 text-primary"></i>
          AI Concierge
        </h5>
        
        <div className="flex-grow-1 overflow-auto mb-3 pe-2" ref={scrollRef} aria-live="polite" role="log">
          {messages.map(msg => (
            <div key={msg.id} className={`d-flex mb-2 ${msg.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}>
              {msg.sender === 'bot' && (
                 <div className="me-2 d-flex align-items-end mb-1">
                    <i className="bi bi-robot text-primary border rounded-circle p-1 small"></i>
                 </div>
              )}
              <div 
                className={`p-2 rounded-3 small ${msg.sender === 'user' ? 'bg-primary text-white' : 'bg-light text-dark border'}`}
                style={{ maxWidth: "80%" }}
              >
                  {/* Simple bold parsing */}
                  {msg.text.split("**").map((part, i) => i % 2 === 1 ? <strong key={i}>{part}</strong> : part)}
              </div>
            </div>
          ))}
          {isTyping && (
             <div className="d-flex justify-content-start mb-2">
                 <div className="me-2 d-flex align-items-end mb-1">
                    <i className="bi bi-robot text-primary border rounded-circle p-1 small"></i>
                 </div>
                 <div className="bg-light text-dark border p-2 rounded-3 small fst-italic text-muted">
                    Typing...
                 </div>
             </div>
          )}
        </div>

        <form onSubmit={handleSend} className="d-flex gap-2">
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Ask about food, sights..."
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button type="submit" className="btn btn-primary btn-sm">
            <i className="bi bi-send-fill"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIConcierge;
