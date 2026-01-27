import { cityCuisine } from "../data/cities";

interface Props {
  city: string;
}

const LocalCuisineGuide = ({ city }: Props) => {
  const cuisine = cityCuisine[city];

  if (!cuisine) return null;

  return (
    <section className="card shadow-sm h-100" role="region" aria-label={`Local cuisine guide for ${city}`}> 
      <div className="card-body">
        <h2 className="card-title text-muted text-uppercase mb-4" style={{ fontSize: "0.9rem", letterSpacing: "1px" }} id="local-cuisine-guide-heading">
          <span aria-hidden="true">
            <i className="bi bi-cup-hot-fill me-2 text-danger"></i>
          </span>
          Local Cuisine Guide
        </h2>
        <ul className="list-group list-group-flush" aria-labelledby="local-cuisine-guide-heading">
          {cuisine.map((item, index) => (
            <li key={index} className="list-group-item border-0 px-0 py-3" role="listitem">
              <div className="d-flex w-100 justify-content-between align-items-center mb-1">
                <h3 className="mb-0 fw-bold text-dark" style={{ fontSize: "1rem" }}>{item.dish}</h3>
                <span className="badge bg-light text-dark border rounded-pill" aria-label={`Dish number ${index + 1}`}>{index + 1}</span>
              </div>
              <p className="mb-0 small text-muted fst-italic">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LocalCuisineGuide;
