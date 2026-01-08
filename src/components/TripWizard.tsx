import { useState } from "react";
import { items, cityImages } from "../data/cities";

interface Props {
  onSelectCity: (city: string) => void;
  onCancel: () => void;
}

type Question = {
  id: number;
  text: string;
  options: { label: string; value: string; scores: Record<string, number> }[];
};

const questions: Question[] = [
  {
    id: 1,
    text: "What is your ideal climate for this trip?",
    options: [
      { 
        label: "Sunny & Warm", 
        value: "warm", 
        scores: { "Marrakech": 3, "Casablanca": 3, "San Francisco": 1, "Tokyo": 1 } 
      },
      { 
        label: "Cool & Crisp", 
        value: "cool", 
        scores: { "London": 3, "San Francisco": 2, "Paris": 1, "New York": 1 } 
      },
      { 
        label: "Seasonal & Temperate", 
        value: "moderate", 
        scores: { "Kyoto": 3, "Paris": 2, "Beijing": 2, "Tokyo": 2 } 
      }
    ]
  },
  {
    id: 2,
    text: "What vibe are you looking for?",
    options: [
      { 
        label: "Modern Metropolis", 
        value: "modern", 
        scores: { "Tokyo": 3, "New York": 3, "Beijing": 2, "London": 2 } 
      },
      { 
        label: "Historic & Cultural", 
        value: "historic", 
        scores: { "Kyoto": 3, "Paris": 3, "Marrakech": 2, "Beijing": 3 } 
      },
      { 
        label: "Relaxed & Scenic", 
        value: "relaxed", 
        scores: { "San Francisco": 3, "Casablanca": 2, "Kyoto": 1 } 
      }
    ]
  },
  {
    id: 3,
    text: "What is the main activity you want to do?",
    options: [
      { 
        label: "Shopping & Dining", 
        value: "shopping", 
        scores: { "New York": 3, "Paris": 3, "Tokyo": 3, "London": 2 } 
      },
      { 
        label: "Sightseeing & Landmarks", 
        value: "sightseeing", 
        scores: { "Beijing": 3, "Paris": 2, "London": 3, "Marrakech": 2 } 
      },
      { 
        label: "Relaxing by the water/nature", 
        value: "nature", 
        scores: { "San Francisco": 2, "Casablanca": 3, "Kyoto": 2 } 
      }
    ]
  }
];

const TripWizard = ({ onSelectCity, onCancel }: Props) => {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [recommendedCity, setRecommendedCity] = useState<string | null>(null);

  const handleAnswer = (optionScores: Record<string, number>) => {
    const newScores = { ...scores };
    Object.entries(optionScores).forEach(([city, score]) => {
      newScores[city] = (newScores[city] || 0) + score;
    });
    setScores(newScores);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      finishWizard(newScores);
    }
  };

  const finishWizard = (finalScores: Record<string, number>) => {
    // Find the city with the highest score
    let bestCity = items[0];
    let maxScore = -1;
    
    // Also include cities with 0 score (all items) to ensure we pick something if scores are empty
    items.forEach(city => {
        const score = finalScores[city] || 0;
        // Add a tiny random factor to break ties and add variety
        const randomFactor = Math.random(); 
        if (score + randomFactor > maxScore) {
            maxScore = score + randomFactor;
            bestCity = city;
        }
    });
    
    setRecommendedCity(bestCity);
    setStep(questions.length);
  };

  const currentQuestion = questions[step];

  if (recommendedCity) {
    const images = cityImages[recommendedCity];
    const cityImage = images ? images[0] : "";

    return (
      <div className="card shadow-lg wizard-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="card-body text-center p-5">
           <div className="mb-4">
             <i className="bi bi-stars text-gold" style={{ fontSize: '3rem' }}></i>
           </div>
           <h2 className="mb-4 wizard-title">We Recommend: {recommendedCity}</h2>
           <p className="lead mb-4">Based on your preferences, we think you'll fall in love with {recommendedCity}.</p>
           
           {cityImage && (
             <img 
               src={cityImage} 
               alt={recommendedCity} 
               className="img-fluid rounded shadow mb-4"
               style={{ maxHeight: '300px', width: '100%', objectFit: 'cover' }} 
             />
           )}

           <div className="d-grid gap-3">
             <button 
               className="btn btn-luxury-primary btn-lg"
               onClick={() => onSelectCity(recommendedCity)}
             >
               Explore {recommendedCity}
             </button>
             <button 
               className="btn btn-luxury-secondary"
               onClick={onCancel}
             >
               Start Over / Back
             </button>
           </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card shadow-lg wizard-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div className="card-header wizard-header text-center py-3">
        <h3 className="mb-0 wizard-title"><i className="bi bi-magic me-2 text-gold"></i>Trip Planner Wizard</h3>
      </div>
      <div className="card-body p-5">
        <div className="progress mb-4" style={{ height: '10px' }}>
          <div 
            className="progress-bar wizard-progress-bar" 
            role="progressbar" 
            style={{ width: `${((step) / questions.length) * 100}%` }}
          ></div>
        </div>

        <h4 className="mb-4 text-center wizard-title">{currentQuestion.text}</h4>

        <div className="d-grid gap-3">
          {currentQuestion.options.map((option, idx) => (
            <button 
              key={idx}
              className="btn btn-option btn-lg text-start px-4 py-3"
              onClick={() => handleAnswer(option.scores)}
            >
              <div className="d-flex w-100 justify-content-between align-items-center">
                 <span>{option.label}</span>
                 <i className="bi bi-chevron-right text-gold"></i>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-4 text-center">
            <button className="btn btn-link text-muted" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default TripWizard;
