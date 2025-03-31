import { useEffect, useState } from "react";

function Table({ data }: { data: any[] }) {
    const [queryResults, setQueryResults] = useState<any[]>([]);

    useEffect(() => {
        setQueryResults(data);
    }, [data]);

    return (
        <div>
            {queryResults.length > 0 ? (
                <table className="table-component" border={1}>
                    <thead>
                        <tr>
                            {Object.keys(queryResults[0]).map((key) => (
                                <th key={key}>{key.toUpperCase()}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {queryResults.map((result, index) => (
                            <tr key={index}>
                                {Object.values(result).map((value, i) => (
                                    <td key={i}>{String(value)}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Found 0 rows</p>
            )}
        </div>
    );
}

export default Table;
