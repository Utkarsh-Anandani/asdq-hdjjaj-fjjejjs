import { useHistory } from "../utils/contexts/HistoryContext";
import { useQuery } from "../utils/contexts/QueryContext";
import TrashIcon from "../common/TrashIcon";

function History() {
  const { history, clearHistory } = useHistory();
  const { setQuery } = useQuery();

  const handleClearAction = () => {
    clearHistory();
  };

  const handleClickAction = (e: any) => {
    setQuery(e.currentTarget.innerHTML);
    alert("Query pasted in Editor");
  }

  return (
    <div className="history-container">
      <div className="history-header">
        <div>History</div>
        <div>
          <button onClick={handleClearAction}>
            <TrashIcon />
          </button>
        </div>
      </div>
      <div className="history-content">
        {history.length > 0 ? (
          history.map((value, index) => {
            return <div key={index} onClick={handleClickAction} className="history-content-item">{value}</div>;
          })
        ) : (
          <div className="history-content-cleared">No recent activity</div>
        )}
      </div>
    </div>
  );
}

export default History;
