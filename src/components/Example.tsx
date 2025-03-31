import CrossIcon from "../common/CrossIcon";
import { useQuery } from "../utils/contexts/QueryContext";

function Example() {
  const { setQuery } = useQuery();

  const ExampleQueries = [
    {
      name: "Select all Products",
      query: "\nSELECT * FROM Products;",
    },
    {
      name: "Select productId and name of all Products",
      query: "\nSELECT productId, name FROM Products;",
    },
    {
      name: "Select Products with price lesser than 10",
      query: "\nSELECT * FROM Products\nWHERE price<=10;",
    },
    {
      name: "Select discontinued Products",
      query: "\nSELECT * FROM Products\nWHERE discontinued=true;",
    },
  ];

  const handleClickAction = (e: any) => {
    const queryText = e.currentTarget.getAttribute("data-query");
    setQuery(queryText);
    alert("Query pasted into Editor.");
  };

  const handleExampleClose = () => {
    const element = document.querySelector(".left");
    if(element){
      element.classList.add("left-close");
    }
  }

  return (
    <div className="example-container">
      <div className="example-header">
        <div>Example Queries</div>
        {window.innerWidth < 1000 ? 
            <button onClick={handleExampleClose}>
            <CrossIcon />
          </button> :
          null
          }
      </div>
      <div className="example-content">
        {ExampleQueries.map((query, index) => {
          return (
            <div
              data-query={query.query}
              key={index}
              onClick={handleClickAction}
              className="example-content-item"
            >
              {query.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Example;
