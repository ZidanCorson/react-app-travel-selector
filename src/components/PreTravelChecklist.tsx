import useLocalStorage from '../hooks/useLocalStorage';
import { cityRequirementInfo } from '../data/cities';

interface Props {
  city: string;
}

const PreTravelChecklist = ({ city }: Props) => {
  const [checkedItems, setCheckedItems] = useLocalStorage<string[]>(`pretravel-check-${city}`, []);
  
  const defaultTasks = [
    "Check Passport expiration (must be > 6 months valid)",
    "Apply for necessary Visa / ESTA / ETIAS",
    "Purchase Travel Insurance",
    "Notify Bank of upcoming travel",
    "Check Phone Plan / Buy eSIM",
    "Print important documents or save offline",
    "Arrange transport from airport to hotel"
  ];
  
  const info = cityRequirementInfo[city];

  const toggleItem = (item: string) => {
    if (checkedItems.includes(item)) {
      setCheckedItems(checkedItems.filter(i => i !== item));
    } else {
      setCheckedItems([...checkedItems, item]);
    }
  };

  if (!info) return null;

  return (
    <div className="card shadow-sm h-100">
      <div className="card-header bg-primary text-white">
        <h5 className="mb-0">
          <i className="bi bi-clipboard-check me-2" aria-hidden="true"></i>
          Pre-Travel Requirements for {city}
        </h5>
      </div>
      <div className="card-body">
        
        {/* Info Section */}
        <div className="alert alert-info border-0 bg-light-subtle mb-4">
          <div className="mb-2">
            <strong><i className="bi bi-passport me-2" aria-hidden="true"></i>Visa:</strong> {info.visa}
          </div>
          <div className="mb-2">
            <strong><i className="bi bi-activity me-2" aria-hidden="true"></i>Health:</strong> {info.health}
          </div>
          <div>
            <strong><i className="bi bi-plug me-2" aria-hidden="true"></i>Power:</strong> {info.electrical}
          </div>
        </div>

        {/* Checklist Section */}
        <fieldset className="border-0 p-0 m-0">
          <legend className="border-bottom pb-2 mb-3 h6">Essential Tasks</legend>
          <div className="list-group list-group-flush">
            {defaultTasks.map((task, index) => {
              const checkboxId = `pretravel-${city}-task-${index}`;
              return (
                <div key={index} className="list-group-item d-flex gap-3 align-items-center cursor-pointer border-0 px-0 py-2">
                  <input
                    className="form-check-input flex-shrink-0"
                    type="checkbox"
                    id={checkboxId}
                    checked={checkedItems.includes(task)}
                    onChange={() => toggleItem(task)}
                    style={{ cursor: "pointer" }}
                  />
                  <label htmlFor={checkboxId} className={checkedItems.includes(task) ? "text-decoration-line-through text-muted mb-0" : "mb-0"}>
                    {task}
                  </label>
                </div>
              );
            })}
          </div>
        </fieldset>
        
        {checkedItems.length === defaultTasks.length && (
          <div className="mt-3 text-center text-success animate__animated animate__fadeIn">
            <i className="bi bi-check-circle-fill me-1" aria-hidden="true"></i>
            <span>All set! You are ready to go.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PreTravelChecklist;
