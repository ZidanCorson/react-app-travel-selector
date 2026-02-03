export const items = ["New York", "San Francisco", "Tokyo", "Paris", "London", "Marrakech", "Kyoto", "Casablanca", "Beijing"];

export const cityImages: { [key: string]: string[] } = {
  "New York": [
    "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?w=300&h=200&fit=crop"
  ],
  "San Francisco": [
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1521464302861-ce943915d1c3?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1565626424178-c699f6601afd?w=300&h=200&fit=crop"
  ],
  "Tokyo": [
    "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=300&h=200&fit=crop"
  ],
  "Paris": [
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1471623320832-752e8bbf8413?w=300&h=200&fit=crop"
  ],
  "London": [
    "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=300&h=200&fit=crop"
  ],
  "Marrakech": [
    "https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1548013146-72479768bada?w=300&h=200&fit=crop"
  ],
  "Kyoto": [
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=300&h=200&fit=crop"
  ],
  "Casablanca": [
    "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1577147443647-81856d5151af?w=300&h=200&fit=crop"
  ],
  "Beijing": [
    "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=300&h=200&fit=crop"
  ]
};

export const citySuggestions: { [key: string]: string } = {
  "New York": "Visit Central Park, see a Broadway show, and walk across the Brooklyn Bridge.",
  "San Francisco": "Walk across the Golden Gate Bridge, visit Alcatraz, and ride a cable car.",
  "Tokyo": "Visit the Senso-ji Temple, experience the Shibuya Crossing, and explore Akihabara.",
  "Paris": "Visit the Eiffel Tower, explore the Louvre Museum, and walk along the Seine River.",
  "London": "Visit the British Museum, see the Tower of London, and ride the London Eye.",
  "Marrakech": "Explore the Medina souks, visit the Majorelle Garden, and see the Koutoubia Mosque.",
  "Kyoto": "Walk through the Fushimi Inari Shrine, visit the Kinkaku-ji Golden Pavilion, and explore the Arashiyama Bamboo Grove.",
  "Casablanca": "Visit the magnificent Hassan II Mosque, explore the Old Medina, and walk along the Corniche.",
  "Beijing": "Walk the Great Wall, explore the Forbidden City, and visit the Temple of Heaven."
};

export const cityCoordinates: { [key: string]: { lat: number; lng: number } } = {
  "New York": { lat: 40.7128, lng: -74.0060 },
  "San Francisco": { lat: 37.7749, lng: -122.4194 },
  "Tokyo": { lat: 35.6762, lng: 139.6503 },
  "Paris": { lat: 48.8566, lng: 2.3522 },
  "London": { lat: 51.5074, lng: -0.1278 },
  "Marrakech": { lat: 31.6295, lng: -7.9811 },
  "Kyoto": { lat: 35.0116, lng: 135.7681 },
  "Casablanca": { lat: 33.5731, lng: -7.5898 },
  "Beijing": { lat: 39.9042, lng: 116.4074 }
};

export const cityCurrencies: { [key: string]: { code: string; symbol: string } } = {
  "New York": { code: "USD", symbol: "$" },
  "San Francisco": { code: "USD", symbol: "$" },
  "Tokyo": { code: "JPY", symbol: "¥" },
  "Paris": { code: "EUR", symbol: "€" },
  "London": { code: "GBP", symbol: "£" },
  "Marrakech": { code: "MAD", symbol: "DH" },
  "Kyoto": { code: "JPY", symbol: "¥" },
  "Casablanca": { code: "MAD", symbol: "DH" },
  "Beijing": { code: "CNY", symbol: "¥" }
};

export const cityLanguages: { [key: string]: string } = {
  "New York": "en-US",
  "San Francisco": "en-US",
  "Tokyo": "ja-JP",
  "Paris": "fr-FR",
  "London": "en-GB",
  "Marrakech": "ar-MA",
  "Kyoto": "ja-JP",
  "Casablanca": "ar-MA",
  "Beijing": "zh-CN"
};

export const languagePhrases: { [key: string]: { phrase: string; translation: string; pronunciation?: string }[] } = {
  "en-US": [
    { phrase: "Hello", translation: "Hello" },
    { phrase: "Thank you", translation: "Thank you" },
    { phrase: "How much?", translation: "How much?" }
  ],
  "en-GB": [
    { phrase: "Hello", translation: "Hello" },
    { phrase: "Thank you", translation: "Thank you" },
    { phrase: "How much?", translation: "How much?" }
  ],
  "ja-JP": [
    { phrase: "Hello", translation: "Konnichiwa", pronunciation: "Konnichiwa" },
    { phrase: "Thank you", translation: "Arigato", pronunciation: "Arigato" },
    { phrase: "How much?", translation: "Ikura desu ka?", pronunciation: "Ikura desu ka?" }
  ],
  "fr-FR": [
    { phrase: "Hello", translation: "Bonjour", pronunciation: "Bonjour" },
    { phrase: "Thank you", translation: "Merci", pronunciation: "Merci" },
    { phrase: "How much?", translation: "Combien ça coûte ?", pronunciation: "Combien sa coot?" }
  ],
  "ar-MA": [
    { phrase: "Hello", translation: "Salam", pronunciation: "Salam" },
    { phrase: "Thank you", translation: "Choukran", pronunciation: "Shokran" },
    { phrase: "How much?", translation: "Bchhal?", pronunciation: "Bish-hal?" }
  ],
  "zh-CN": [
    { phrase: "Hello", translation: "Ni hao", pronunciation: "Nee how" },
    { phrase: "Thank you", translation: "Xie xie", pronunciation: "Shieh shieh" },
    { phrase: "How much?", translation: "Duo shao qian?", pronunciation: "Dwo shao chyen?" }
  ]
};

export const cityCostMultipliers: { [key: string]: number } = {
  "New York": 1.8,
  "San Francisco": 1.7,
  "Tokyo": 1.5,
  "Paris": 1.4,
  "London": 1.6,
  "Marrakech": 0.7,
  "Kyoto": 1.3,
  "Casablanca": 0.6,
  "Beijing": 0.9
};

export const cityItineraries: { [key: string]: { day: number; title: string; activities: { name: string; lat: number; lng: number }[] }[] } = {
  "New York": [
    { day: 1, title: "Iconic Sights", activities: [
      { name: "Statue of Liberty morning tour", lat: 40.6892, lng: -74.0445 },
      { name: "Walk the High Line", lat: 40.747993, lng: -74.004765 },
      { name: "Sunset at Top of the Rock", lat: 40.759101, lng: -73.9797 }
    ] },
    { day: 2, title: "Culture & Arts", activities: [
      { name: "Metropolitan Museum of Art", lat: 40.7794, lng: -73.9632 },
      { name: "Lunch in Central Park", lat: 40.7812, lng: -73.9665 },
      { name: "Broadway Show in the evening", lat: 40.7590, lng: -73.9845 }
    ] },
    { day: 3, title: "Urban Exploration", activities: [
      { name: "Explore SoHo boutiques", lat: 40.7233, lng: -74.0020 },
      { name: "Walk across Brooklyn Bridge", lat: 40.7061, lng: -73.9969 },
      { name: "Dinner in DUMBO", lat: 40.7033, lng: -73.9881 }
    ] }
  ],
  "San Francisco": [
    { day: 1, title: "Bay Area Classics", activities: [
      { name: "Ride the Cable Cars", lat: 37.7946, lng: -122.4070 },
      { name: "Fisherman's Wharf & Pier 39", lat: 37.8080, lng: -122.4177 },
      { name: "Alcatraz Night Tour", lat: 37.8267, lng: -122.4230 }
    ] },
    { day: 2, title: "Nature & Views", activities: [
      { name: "Golden Gate Bridge walk", lat: 37.8199, lng: -122.4783 },
      { name: "Muir Woods Redwoods", lat: 37.8954, lng: -122.5780 },
      { name: "Sausalito ferry ride", lat: 37.8591, lng: -122.4853 }
    ] },
    { day: 3, title: "City Vibes", activities: [
      { name: "Explore Chinatown", lat: 37.7941, lng: -122.4078 },
      { name: "Mission District murals", lat: 37.7599, lng: -122.4148 },
      { name: "Twin Peaks sunset", lat: 37.7544, lng: -122.4477 }
    ] }
  ],
  "Tokyo": [
    { day: 1, title: "Old & New", activities: [
      { name: "Senso-ji Temple in Asakusa", lat: 35.7148, lng: 139.7967 },
      { name: "Tokyo Skytree views", lat: 35.7101, lng: 139.8107 },
      { name: "Dinner in Shinjuku", lat: 35.6938, lng: 139.7034 }
    ] },
    { day: 2, title: "Pop Culture", activities: [
      { name: "Harajuku fashion street", lat: 35.6702, lng: 139.7020 },
      { name: "Meiji Shrine", lat: 35.6764, lng: 139.6993 },
      { name: "Shibuya Crossing & Hachiko", lat: 35.6595, lng: 139.7005 }
    ] },
    { day: 3, title: "Tech & Art", activities: [
      { name: "TeamLab Borderless", lat: 35.6272, lng: 139.7768 },
      { name: "Akihabara electronics", lat: 35.6984, lng: 139.7730 },
      { name: "Sushi in Tsukiji Outer Market", lat: 35.6655, lng: 139.7708 }
    ] }
  ],
  "Paris": [
    { day: 1, title: "The Classics", activities: [
      { name: "Eiffel Tower summit", lat: 48.8584, lng: 2.2945 },
      { name: "Seine River Cruise", lat: 48.8579, lng: 2.2935 },
      { name: "Louvre Museum highlights", lat: 48.8606, lng: 2.3376 }
    ] },
    { day: 2, title: "Artistic Soul", activities: [
      { name: "Montmartre & Sacré-Cœur", lat: 48.8867, lng: 2.3431 },
      { name: "Musée d'Orsay", lat: 48.8600, lng: 2.3266 },
      { name: "Latin Quarter cafes", lat: 48.8494, lng: 2.3470 }
    ] },
    { day: 3, title: "Royal Paris", activities: [
      { name: "Palace of Versailles day trip", lat: 48.8049, lng: 2.1204 },
      { name: "Shopping on Champs-Élysées", lat: 48.8698, lng: 2.3076 },
      { name: "Arc de Triomphe", lat: 48.8738, lng: 2.2950 }
    ] }
  ],
  "London": [
    { day: 1, title: "Royal London", activities: [
      { name: "Buckingham Palace Changing of the Guard", lat: 51.5014, lng: -0.1419 },
      { name: "Westminster Abbey", lat: 51.4993, lng: -0.1273 },
      { name: "London Eye", lat: 51.5033, lng: -0.1196 }
    ] },
    { day: 2, title: "History & Markets", activities: [
      { name: "Tower of London", lat: 51.5081, lng: -0.0759 },
      { name: "Borough Market lunch", lat: 51.5055, lng: -0.0918 },
      { name: "Tate Modern", lat: 51.5076, lng: -0.0994 }
    ] },
    { day: 3, title: "Museums & Parks", activities: [
      { name: "British Museum", lat: 51.5194, lng: -0.1270 },
      { name: "Covent Garden street performers", lat: 51.5115, lng: -0.1232 },
      { name: "Afternoon Tea at The Ritz", lat: 51.5074, lng: -0.1278 }
    ] }
  ],
  "Marrakech": [
    { day: 1, title: "Medina Magic", activities: [
      { name: "Jemaa el-Fnaa square", lat: 31.6258, lng: -7.9892 },
      { name: "Koutoubia Mosque", lat: 31.6241, lng: -7.9939 },
      { name: "Souk shopping", lat: 31.6300, lng: -7.9811 }
    ] },
    { day: 2, title: "Gardens & Palaces", activities: [
      { name: "Majorelle Garden", lat: 31.6429, lng: -8.0036 },
      { name: "Bahia Palace", lat: 31.6206, lng: -7.9807 },
      { name: "Yves Saint Laurent Museum", lat: 31.6422, lng: -8.0032 }
    ] },
    { day: 3, title: "Desert & Spa", activities: [
      { name: "Atlas Mountains day trip", lat: 31.2262, lng: -7.9717 },
      { name: "Traditional Hammam spa", lat: 31.6295, lng: -7.9811 },
      { name: "Rooftop dinner", lat: 31.6295, lng: -7.9811 }
    ] }
  ],
  "Kyoto": [
    { day: 1, title: "Temple Trail", activities: [
      { name: "Kinkaku-ji (Golden Pavilion)", lat: 35.0394, lng: 135.7292 },
      { name: "Ryoan-ji Rock Garden", lat: 35.0345, lng: 135.7186 },
      { name: "Arashiyama Bamboo Grove", lat: 35.0094, lng: 135.6668 }
    ] },
    { day: 2, title: "Historic Streets", activities: [
      { name: "Fushimi Inari Shrine hike", lat: 34.9671, lng: 135.7727 },
      { name: "Kiyomizu-dera Temple", lat: 34.9948, lng: 135.7850 },
      { name: "Gion district geisha spotting", lat: 35.0037, lng: 135.7788 }
    ] },
    { day: 3, title: "Zen & Tea", activities: [
      { name: "Nijo Castle", lat: 35.0142, lng: 135.7486 },
      { name: "Philosopher's Path", lat: 35.0254, lng: 135.7986 },
      { name: "Traditional Tea Ceremony", lat: 35.0116, lng: 135.7681 }
    ] }
  ],
  "Casablanca": [
    { day: 1, title: "Architectural Wonders", activities: [
      { name: "Hassan II Mosque tour", lat: 33.6084, lng: -7.6325 },
      { name: "Rick's Café lunch", lat: 33.5992, lng: -7.6141 },
      { name: "Corniche seaside walk", lat: 33.5992, lng: -7.6697 }
    ] },
    { day: 2, title: "City Life", activities: [
      { name: "Place Mohammed V", lat: 33.5899, lng: -7.6114 },
      { name: "Old Medina exploration", lat: 33.5950, lng: -7.6147 },
      { name: "Morocco Mall shopping", lat: 33.5679, lng: -7.6928 }
    ] },
    { day: 3, title: "Day Trip", activities: [
      { name: "Trip to Rabat (Capital)", lat: 34.0209, lng: -6.8416 },
      { name: "Chellah Necropolis", lat: 34.0116, lng: -6.8147 },
      { name: "Kasbah of the Udayas", lat: 34.0318, lng: -6.8361 }
    ] }
  ],
  "Beijing": [
    { day: 1, title: "Imperial History", activities: [
      { name: "Forbidden City", lat: 39.9163, lng: 116.3972 },
      { name: "Tiananmen Square", lat: 39.9056, lng: 116.3976 },
      { name: "Jingshan Park views", lat: 39.9251, lng: 116.3970 }
    ] },
    { day: 2, title: "The Great Wall", activities: [
      { name: "Mutianyu Great Wall hike", lat: 40.4319, lng: 116.5704 },
      { name: "Ming Tombs", lat: 40.2554, lng: 116.2255 },
      { name: "Peking Duck dinner", lat: 39.9042, lng: 116.4074 }
    ] },
    { day: 3, title: "Culture & Temples", activities: [
      { name: "Temple of Heaven", lat: 39.8822, lng: 116.4065 },
      { name: "Summer Palace", lat: 39.9996, lng: 116.2755 },
      { name: "Hutong rickshaw tour", lat: 39.9422, lng: 116.3966 }
    ] }
  ]
};

export const cityCuisine: { [key: string]: { dish: string; description: string }[] } = {
  "New York": [
    { dish: "New York Style Pizza", description: "Large, hand-tossed thin crust, often sold in wide slices to go." },
    { dish: "Bagel with Lox", description: "A boiled-then-baked ring of dough, dense and chewy, topped with cream cheese and cured salmon." },
    { dish: "Cheesecake", description: "Rich, dense, and smooth dessert made with cream cheese, eggs, and sugar." }
  ],
  "San Francisco": [
    { dish: "Clam Chowder in Sourdough", description: "Creamy soup with clams served in a hollowed-out loaf of famous SF sourdough bread." },
    { dish: "Mission Burrito", description: "A large tortilla wrapped around rice, beans, meat, salsa, and more." },
    { dish: "Dungeness Crab", description: "Sweet, tender crab meat, often served steamed or roasted with garlic." }
  ],
  "Tokyo": [
    { dish: "Sushi", description: "Vinegared rice accompanied by a variety of ingredients, such as seafood and vegetables." },
    { dish: "Ramen", description: "Wheat noodles served in a meat or fish-based broth, often flavored with soy sauce or miso." },
    { dish: "Tempura", description: "Seafood or vegetables that have been battered and deep fried." }
  ],
  "Paris": [
    { dish: "Croissant", description: "Buttery, flaky, viennoiserie pastry of Austrian origin, named for its historical crescent shape." },
    { dish: "Escargots de Bourgogne", description: "Land snails cooked with garlic butter, chicken stock or wine." },
    { dish: "Macarons", description: "Sweet meringue-based confection made with egg white, icing sugar, granulated sugar, almond meal, and food colouring." }
  ],
  "London": [
    { dish: "Fish and Chips", description: "Hot dish consisting of fried fish in batter, served with chips." },
    { dish: "Sunday Roast", description: "Traditional British main meal that is typically served on Sunday, consisting of roasted meat, roast potato, and accompaniments." },
    { dish: "Full English Breakfast", description: "A substantial traditional breakfast including bacon, eggs, sausages, baked beans, toast, and tea." }
  ],
  "Marrakech": [
    { dish: "Tagine", description: "Slow-cooked savory stew made with sliced meat, poultry or fish together with vegetables or fruit." },
    { dish: "Couscous", description: "Small steamed balls of crushed durum wheat semolina that is traditionally served with a stew spooned on top." },
    { dish: "Mint Tea", description: "Green tea prepared with spearmint leaves and sugar, traditional to the Maghreb region." }
  ],
  "Kyoto": [
    { dish: "Kaiseki Ryori", description: "Traditional multi-course Japanese dinner." },
    { dish: "Yudofu", description: "Tofu simmered in hot water with vegetables." },
    { dish: "Matcha Sweets", description: "Desserts flavored with finely ground powder of specially grown and processed green tea leaves." }
  ],
  "Casablanca": [
    { dish: "Seafood Bastilla", description: "A savory pie made with warqa dough, filled with seafood and vermicelli." },
    { dish: "Grilled Sardines", description: "Fresh sardines grilled with chermoula spices." },
    { dish: "Moroccan Pastries", description: "Sweet treats made with almonds, honey, and orange blossom water." }
  ],
  "Beijing": [
    { dish: "Peking Duck", description: "Dish from Beijing that has been prepared since the imperial era. The meat is characterized by its thin, crisp skin." },
    { dish: "Jiaozi (Dumplings)", description: "Ground meat and/or vegetable filling wrapped into a thinly rolled piece of dough." },
    { dish: "Zhajiangmian", description: "Noodles topped with a thick sauce made of fried pork and fermented soybean paste." }
  ]
};

export const cityEtiquette: { [key: string]: { type: 'do' | 'dont'; rule: string; description: string }[] } = {
  "New York": [
    { type: 'do', rule: "Tip Generously", description: "Tipping 18-22% is standard in restaurants. It is not optional." },
    { type: 'do', rule: "Walk Fast", description: "Keep right and keep moving on sidewalks. New Yorkers are always in a rush." },
    { type: 'dont', rule: "Block Subway Doors", description: "Let people off the train before you try to get on." },
    { type: 'dont', rule: "Stop in the Middle of the Sidewalk", description: "If you need to check your map, step to the side against a building." }
  ],
  "San Francisco": [
    { type: 'do', rule: "Layer Clothing", description: "The weather changes drastically by neighborhood. Always bring a jacket." },
    { type: 'do', rule: "Compost and Recycle", description: "SF takes waste sorting seriously. Pay attention to the bins." },
    { type: 'dont', rule: "Call it 'San Fran'", description: "Locals prefer 'SF' or just 'The City'." },
    { type: 'dont', rule: "Leave Valuables in Car", description: "Car break-ins are common. Leave nothing visible in your vehicle." }
  ],
  "Tokyo": [
    { type: 'do', rule: "Bow when greeting", description: "A slight bow is polite. Handshakes are becoming common but bowing is respectful." },
    { type: 'do', rule: "Queuing", description: "Line up orderly for trains and elevators." },
    { type: 'dont', rule: "Tip", description: "Tipping is not practiced and can be considered rude or confusing." },
    { type: 'dont', rule: "Walk and Eat", description: "It is considered bad manners to eat while walking. Find a designated spot." }
  ],
  "Paris": [
    { type: 'do', rule: "Say 'Bonjour'", description: "Always say 'Bonjour' when entering a shop or interacting with someone." },
    { type: 'do', rule: "Dress Smartly", description: "Parisians tend to dress well. Avoid overly casual athletic wear." },
    { type: 'dont', rule: "Speak Loudly", description: "Keep your voice down in public spaces and restaurants." },
    { type: 'dont', rule: "Rush Meals", description: "Dining is an experience. Expect service to be slower and more relaxed." }
  ],
  "London": [
    { type: 'do', rule: "Stand on the Right", description: "On escalators, stand on the right so people can walk on the left." },
    { type: 'do', rule: "Queue Properly", description: "Queue jumping is a major social offense." },
    { type: 'dont', rule: "Make Eye Contact on the Tube", description: "Londoners generally avoid eye contact on public transport." },
    { type: 'dont', rule: "Criticize the Royal Family", description: "Even if locals do it, it's best for visitors to remain neutral." }
  ],
  "Marrakech": [
    { type: 'do', rule: "Dress Modestly", description: "Shoulders and knees should generally be covered, especially outside resorts." },
    { type: 'do', rule: "Haggle in Souks", description: "Bargaining is expected in the markets. Keep it friendly." },
    { type: 'dont', rule: "Take Photos of People without Permission", description: "It is considered disrespectful. Always ask first." },
    { type: 'dont', rule: "Use Left Hand for Eating", description: "The left hand is considered unclean. Use your right hand for communal eating." }
  ],
  "Kyoto": [
    { type: 'do', rule: "Remove Shoes", description: "Take off shoes when entering temples, traditional inns, and some restaurants." },
    { type: 'do', rule: "Be Quiet in Temples", description: "These are sacred places. Silence is golden." },
    { type: 'dont', rule: "Touch Geisha", description: "If you see a Geisha or Maiko, do not stop them or touch them for a photo." },
    { type: 'dont', rule: "Tip", description: "Like the rest of Japan, tipping is not expected." }
  ],
  "Casablanca": [
    { type: 'do', rule: "Greet Respectfully", description: "Handshakes are common, often followed by touching your heart." },
    { type: 'do', rule: "Accept Tea", description: "If offered mint tea, it is polite to accept it." },
    { type: 'dont', rule: "Refuse Hospitality", description: "Moroccans are very hospitable; refusing can be seen as rude." },
    { type: 'dont', rule: "Drink Alcohol in Public", description: "It is generally frowned upon outside of licensed bars/hotels." }
  ],
  "Beijing": [
    { type: 'do', rule: "Offer Gifts with Two Hands", description: "Use both hands to give and receive gifts or business cards." },
    { type: 'do', rule: "Respect Elders", description: "Greet the oldest person first." },
    { type: 'dont', rule: "Stick Chopsticks Vertically", description: "Sticking chopsticks upright in rice resembles incense for the dead." },
    { type: 'dont', rule: "Lose your temper", description: "Public displays of anger cause 'loss of face'." }
  ]
};

export const cityRequirementInfo: { [key: string]: { visa: string; health: string; electrical: string } } = {
  "New York": { visa: "ESTA required for most international travelers. Check US visa waiver program.", health: "No specific vaccinations required. High standard of healthcare.", electrical: "Type A/B plug (120V). Travelers from EU/UK need adapter." },
  "San Francisco": { visa: "ESTA required for most international travelers. Check US visa waiver program.", health: "No specific vaccinations required. High standard of healthcare.", electrical: "Type A/B plug (120V). Travelers from EU/UK need adapter." },
  "Tokyo": { visa: "Visa-free for up to 90 days for many nationalities. Check specific Embassy info.", health: "Routine vaccines recommended. Healthcare is excellent but expensive.", electrical: "Type A plug (100V). Two flat pins." },
  "Paris": { visa: "Schengen Area rules apply. ETIAS may be required soon.", health: "No specific vaccinations required. Pharmacies are widely available (Green Cross).", electrical: "Type E/C plug (230V). Standard European round pin." },
  "London": { visa: "ETA required for some nationalities. Standard Visitor Visa for others.", health: "NHS available for emergencies. Travel insurance highly recommended.", electrical: "Type G plug (230V). Three rectangular pins." },
  "Marrakech": { visa: "Visa-free for up to 90 days for US/EU/UK citizens.", health: "Hepatitis A and Typhoid recommended. Avoid tap water.", electrical: "Type C/E plug (220V). Similar to Europe." },
  "Kyoto": { visa: "Visa-free for up to 90 days for many nationalities.", health: "Routine vaccines. Carry specific medications as some foreign ones are restricted.", electrical: "Type A plug (100V). Two flat pins." },
  "Casablanca": { visa: "Visa-free for up to 90 days for US/EU/UK citizens.", health: "Hepatitis A and Typhoid recommended. Drink bottled water.", electrical: "Type C/E plug (220V)." },
  "Beijing": { visa: "144-hour visa-free transit available for some. Tourist visa (L) generally required.", health: "Hepatitis A/B and Typhoid recommended. Air quality can vary.", electrical: "Type A/C/I plug (220V). Multi-socket adapters often needed." }
};
