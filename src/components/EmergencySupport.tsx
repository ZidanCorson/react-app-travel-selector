import React from 'react';
import { cityEmergencyData } from '../data/cities_emergency';

interface Props {
  city: string;
}

const EmergencySupport: React.FC<Props> = ({ city }) => {
  const data = cityEmergencyData[city];

  if (!data) {
    return null;
  }

  return (
    <div className="card h-100 shadow-sm border-danger">
      <div className="card-header bg-danger text-white">
        <h5 className="mb-0"><i className="bi bi-shield-plus me-2"></i>Emergency Support</h5>
      </div>
      <div className="card-body">
        <p className="text-muted small">
          Important numbers for {city}. In case of emergency, use these local numbers.
        </p>
        
        <div className="d-grid gap-2">
            <div className="btn btn-outline-danger d-flex justify-content-between align-items-center" style={{ cursor: 'default' }}>
                <span><i className="bi bi-exclamation-triangle-fill me-2"></i>General / SOS</span>
                <strong>{data.general}</strong>
            </div>
            
            <div className="row g-2">
                <div className="col-4">
                     <div className="btn btn-sm btn-light w-100 border d-flex flex-column align-items-center p-2" style={{ cursor: 'default' }}>
                        <i className="bi bi-shield-fill text-primary mb-1"></i>
                        <small>Police</small>
                        <strong>{data.police}</strong>
                    </div>
                </div>
                <div className="col-4">
                     <div className="btn btn-sm btn-light w-100 border d-flex flex-column align-items-center p-2" style={{ cursor: 'default' }}>
                        <i className="bi bi-heart-pulse-fill text-danger mb-1"></i>
                        <small>Medical</small>
                        <strong>{data.ambulance}</strong>
                    </div>
                </div>
                <div className="col-4">
                     <div className="btn btn-sm btn-light w-100 border d-flex flex-column align-items-center p-2" style={{ cursor: 'default' }}>
                        <i className="bi bi-fire text-warning mb-1"></i>
                        <small>Fire</small>
                        <strong>{data.fire}</strong>
                    </div>
                </div>
            </div>

            <div className="mt-3">
                <h6 className="small text-muted fw-bold text-uppercase">Recommended Hospital</h6>
                <div className="p-2 bg-light rounded border-start border-4 border-info">
                   <i className="bi bi-hospital text-info me-2"></i>
                   {data.hospital}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencySupport;
