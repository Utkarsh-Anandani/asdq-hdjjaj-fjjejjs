import Table from "../common/Table";
import ProductDetails from "../assets/products.json";
import { useEffect, useState } from "react";
import { useQuery } from "../utils/contexts/QueryContext";

function Output() {
  const [queryResults, setQueryResults] = useState<any[]>([]);
  const { query } = useQuery();

  const ExampleQueries = [
    {
      name: "Select all Products",
      query: "\nSELECT * FROM Products;",
      data: ProductDetails.concat(ProductDetails, ProductDetails),
    },
    {
      name: "Select productId and name of all Products",
      query: "\nSELECT productId, name FROM Products;",
      data: ProductDetails.slice(8, 18),
    },
    {
      name: "Select Products with price lesser than 10",
      query: "\nSELECT * FROM Products\nWHERE price<=10;",
      data: ProductDetails.slice(25, 44),
    },
    {
      name: "Select discontinued Products",
      query: "\nSELECT * FROM Products\nWHERE discontinued=true;",
      data: ProductDetails.slice(36, 67),
    },
  ];

  const fetchQueryResults = () => {
    const matchedQuery = ExampleQueries.find((q) => q.query.trim() === query.trim());

    if (matchedQuery) {
      setQueryResults(matchedQuery.data);
    } else {
      const start = Math.floor(Math.random() * 70);
      const end = Math.min(start + Math.floor(Math.random() * 10) + 5, 70);

      setQueryResults(ProductDetails.slice(start, end));
    }
  };

  useEffect(() => {
    if(query === "\n-- Type Your Query Here") {
        setQueryResults([])
    }else {
        fetchQueryResults();
    }
  }, [query]);

  return (
    <div className="output">
      <div className="output-header">
        <div className="output-header-left">Output</div>
      </div>
      <div className="table-container">
        <Table data={queryResults} />
      </div>
    </div>
  );
}

export default Output;
