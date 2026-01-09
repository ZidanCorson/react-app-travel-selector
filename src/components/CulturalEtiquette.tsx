import { cityEtiquette } from "../data/cities";

interface Props {
  city: string;
}

const CulturalEtiquette = ({ city }: Props) => {
  const etiquette = cityEtiquette[city];

  if (!etiquette) return null;

  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <h5 className="card-title text-muted text-uppercase mb-4" style={{ fontSize: "0.9rem", letterSpacing: "1px" }}>
          <i className="bi bi-info-circle-fill me-2 text-primary"></i>
          Cultural Etiquette
        </h5>
        
        <div className="list-group list-group-flush">
          {etiquette.map((item, index) => (
            <div key={index} className="list-group-item border-0 px-0 py-3">
              <div className="d-flex w-100 justify-content-between align-items-center mb-1">
                <h6 className="mb-0 fw-bold text-dark">
                    {item.type === 'do' ? (
                        <span className="badge bg-success me-2">DO</span>
                    ) : (
                        <span className="badge bg-danger me-2">DON'T</span>
                    )}
                    {item.rule}
                </h6>
              </div>
              <p className="mb-0 small text-muted fst-italic ps-5">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CulturalEtiquette;
