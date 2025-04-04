import { Editor } from "@monaco-editor/react";
import CopyIcon from "../common/CopyIcon";
import TrashIcon from "../common/TrashIcon";
import { useQuery } from "../utils/contexts/QueryContext";
import { useHistory } from "../utils/contexts/HistoryContext";
import { useEffect, useState } from "react";
import HistoryIcon from "../common/HistoryIcon";

function SQLEditor() {
  const { query, setQuery } = useQuery();
  const { addQueryToHistory } = useHistory();
  const [localQuery, setLocalQuery] = useState(query);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setLocalQuery(query);
  }, [query]);

  const handleCopyAction = async () => {
    try {
      await navigator.clipboard.writeText(localQuery);
      alert("Query Copied!!");
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  const handleClearAction = () => {
    setLocalQuery("");
  };

  const handleRunAction = () => {
    setIsLoading(true);
    addQueryToHistory(localQuery);
    setTimeout(() => {
      setQuery(localQuery);
      setIsLoading(false);
    }, 3000);
  };

  const handleHistoryOpen = () => {
    const element = document.querySelector(".right");
    if(element) {
      element.classList.add("right-open")
    }
  }

  return (
    <div className="editor">
      <div className="editor-header">
        <div className="editor-header-left">Input</div>
        <div className="editor-header-right">
          <button onClick={handleCopyAction}>
            <CopyIcon />
          </button>
          <button onClick={handleClearAction}>
            <TrashIcon />
          </button>
          <button disabled={isLoading} onClick={handleRunAction}>
            {isLoading ? "Processing..." : "Run"}
          </button>
          {window.innerWidth < 1000 ? 
            <button onClick={handleHistoryOpen}>
            <HistoryIcon />
          </button> :
          ""
          }
        </div>
      </div>
      <Editor
        value={localQuery}
        onChange={(value) => setLocalQuery(value || "")}
        className="editor-instance"
        language="sql"
        theme="vs-dark"
      />
    </div>
  );
}

export default SQLEditor;
