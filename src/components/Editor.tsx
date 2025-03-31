import { Editor } from "@monaco-editor/react";
import CopyIcon from "../common/CopyIcon";
import TrashIcon from "../common/TrashIcon";
import { useQuery } from "../utils/contexts/QueryContext";
import { useHistory } from "../utils/contexts/HistoryContext";

function SQLEditor() {
    const { query, setQuery } = useQuery();
    const { addQueryToHistory } = useHistory();

    const handleCopyAction = async () => {
        try {
            await navigator.clipboard.writeText(query);
            alert("Query Copied!!")
        } catch (error) {
            console.error("Failed to copy:", error);
        }
    }

    const handleClearAction = () => {
        setQuery("");
    }

    const handleRunAction = () => {
        addQueryToHistory(query);
    }

    return(
        <div className="editor">
            <div className="editor-header">
                <div className="editor-header-left">
                    Input
                </div>
                <div className="editor-header-right">
                    <button onClick={handleCopyAction}>
                        <CopyIcon />
                    </button>
                    <button onClick={handleClearAction}>
                        <TrashIcon />
                    </button>
                    <button onClick={handleRunAction}>
                        Run
                    </button>
                </div>
            </div>
            <Editor value={query} onChange={(value) => setQuery(value || "")}  className="editor-instance" language="sql" theme="vs-dark"/>
        </div>
    );
}

export default SQLEditor;