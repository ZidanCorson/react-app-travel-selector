import { cityEtiquette } from "../data/cities";

interface Props {
  city: string;
}

const CulturalEtiquette = ({ city }: Props) => {
  const etiquette = cityEtiquette[city];

  if (!etiquette) return null;

  return (
    <section className="card shadow-sm h-100" aria-labelledby="cultural-etiquette-title" role="region">
      <div className="card-body">
        <h2
          id="cultural-etiquette-title"
          className="card-title text-muted text-uppercase mb-4"
          style={{ fontSize: "0.9rem", letterSpacing: "1px" }}
        >
          <i className="bi bi-info-circle-fill me-2 text-primary" aria-hidden="true"></i>
          Cultural Etiquette
        </h2>
        <ul className="list-group list-group-flush" role="list">
          {etiquette.map((item, index) => (
            <li
              key={index}
              className="list-group-item border-0 px-0 py-3"
              role="listitem"
              tabIndex={0}
              aria-label={`${item.type === 'do' ? 'Do' : 'Don\'t'}: ${item.rule}. ${item.description}`}
            >
              <div className="d-flex w-100 justify-content-between align-items-center mb-1">
                <span className="mb-0 fw-bold text-dark" id={`etiquette-rule-${index}`}>
                  {item.type === 'do' ? (
                    <span className="badge bg-success me-2" aria-label="Do" aria-live="polite">DO</span>
                  ) : (
                    <span className="badge bg-danger me-2" aria-label="Don't" aria-live="polite">DON'T</span>
                  )}
                  {item.rule}
                </span>
              </div>
              <p className="mb-0 small text-muted fst-italic ps-5" aria-describedby={`etiquette-rule-${index}`}>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CulturalEtiquette;
