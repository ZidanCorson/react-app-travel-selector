import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { cityCoordinates } from "../data/cities";
import { cityItineraries } from "../data/cities";
import useLocalStorage from "../hooks/useLocalStorage";

interface Props {
  city: string;
}

const DailyItinerary = ({ city }: Props) => {
  const itinerary = cityItineraries[city];
  // State to track which accordion item is open. Default to 0 (first day).
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  // State to track selected activities
  const [selectedActivities, setSelectedActivities] = useLocalStorage<string[]>(`itinerary-storage-${city}`, []);

  if (!itinerary) return null;

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleActivity = (day: number, activityIndex: number) => {
    const id = `${day}-${activityIndex}`;
    setSelectedActivities((prev) => {
      if (prev.includes(id)) {
        return prev.filter((i) => i !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        {/* Map section */}
        <div style={{ height: "250px", width: "100%", marginBottom: 20, borderRadius: 12, overflow: "hidden" }}>
          {cityCoordinates[city] && (
            <MapContainer
              center={[cityCoordinates[city].lat, cityCoordinates[city].lng] as LatLngExpression}
              zoom={12}
              style={{ height: "100%", width: "100%" }}
              scrollWheelZoom={false}
            >
              <TileLayer
                // @ts-ignore
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {/* Show activity markers and polyline for the open day if activities have coordinates */}
              {openIndex !== null && itinerary[openIndex] && Array.isArray(itinerary[openIndex].activities) &&
                itinerary[openIndex].activities[0] && typeof itinerary[openIndex].activities[0] === 'object' ? (
                  <>
                    <Polyline
                      positions={itinerary[openIndex].activities.map((a: any) => [a.lat, a.lng]) as LatLngExpression[]}
                      pathOptions={{ color: '#6f42c1', weight: 4, opacity: 0.7 }}
                    />
                    {itinerary[openIndex].activities.map((activity: any, idx: number) => (
                      <Marker key={idx} position={[activity.lat, activity.lng] as LatLngExpression}>
                        <Popup>{activity.name}</Popup>
                      </Marker>
                    ))}
                  </>
                ) : (
                  <Marker position={[cityCoordinates[city].lat, cityCoordinates[city].lng] as LatLngExpression}>
                    <Popup>
                      {city}
                    </Popup>
                  </Marker>
                )
              }
            </MapContainer>
          )}
        </div>
        <h5 className="card-title text-muted text-uppercase mb-4" style={{ fontSize: "0.9rem", letterSpacing: "1px" }}>
          <i className="bi bi-calendar-week-fill me-2" style={{ color: "#6f42c1" }}></i>
          3-Day Perfect Itinerary
        </h5>
        
        <div className="accordion" id="itineraryAccordion">
          {itinerary.map((dayPlan, index) => {
            const isOpen = openIndex === index;
            return (
              <div className="accordion-item border-0 mb-3 shadow-sm rounded overflow-hidden" key={dayPlan.day}>
                <h2 className="accordion-header" id={`heading${index}`}>
                    <button 
                      className={`accordion-button ${!isOpen ? 'collapsed' : ''} bg-light`} 
                      type="button" 
                      onClick={() => toggleAccordion(index)}
                      aria-expanded={isOpen ? "true" : "false"} 
                      aria-controls={`collapse${index}`}
                      id={`accordion-button-${index}`}
                      style={{ color: "#2c3e50", fontWeight: "bold" }}
                    >
                      <span className="badge bg-primary me-3 rounded-pill">Day {dayPlan.day}</span>
                      {dayPlan.title}
                    </button>
                </h2>
                <div 
                  id={`collapse${index}`} 
                  className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`} 
                  role="region"
                  aria-labelledby={`accordion-button-${index}`}
                >
                  <div className="accordion-body bg-white">
                    <ul className="list-group list-group-flush">
                      {dayPlan.activities.map((activity, i) => {
                        const isSelected = selectedActivities.includes(`${dayPlan.day}-${i}`);
                        // Support both string and object activity for backward compatibility
                        const activityName = typeof activity === 'string' ? activity : activity.name;
                        return (
                          <li 
                            key={i} 
                            className="list-group-item px-0 py-2 border-0 d-flex align-items-center"
                          >
                            <button
                              type="button"
                              className="d-flex align-items-center w-100 bg-transparent border-0 text-start p-0"
                              onClick={() => toggleActivity(dayPlan.day, i)}
                              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleActivity(dayPlan.day, i); } }}
                              aria-pressed={isSelected}
                              tabIndex={0}
                              style={{ cursor: "pointer", outline: "none" }}
                            >
                              <i className={`bi ${isSelected ? 'bi-check-circle-fill text-success' : 'bi-circle text-muted'} me-3 fs-5`} aria-hidden="true"></i>
                              <span className={isSelected ? "text-dark fw-medium" : "text-muted"}>{activityName}</span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DailyItinerary;
