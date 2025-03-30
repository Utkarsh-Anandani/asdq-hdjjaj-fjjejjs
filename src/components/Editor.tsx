import { Editor } from "@monaco-editor/react";
import { useState } from "react";

function SQLEditor() {
    const [query, setQuery] = useState<string>(`\n-- Type Your Query Here\n\nSELECT * FROM Users\nWHERE name=Utkarsh;`)
    return(
        <div className="editor">
            <div className="editor-header">
                <div className="editor-header-left">
                    Input
                </div>
            </div>
            <Editor value={query} className="editor-instance" language="sql" theme="vs-dark"/>
        </div>
    );
}

export default SQLEditor;