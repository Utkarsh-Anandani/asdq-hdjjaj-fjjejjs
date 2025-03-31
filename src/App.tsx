import '@/App.css';
import React, { Suspense } from 'react';
const AppBar = React.lazy(() => import('./components/AppBar.tsx'))
import SQLEditor from './components/Editor';
import Output from './components/Output.tsx';
import History from './components/History.tsx';
import Example from './components/Example.tsx';
import '@/components/styles/Components.css';

function App() {

  return (
    <main className="app-container">
      <Suspense fallback={"Loading..."}>
        <AppBar />
      </Suspense>
      <div className='main-container'>
      <div className="left">
        <Example />
      </div>
      <div className="middle">
        <SQLEditor />
        <Output />
      </div>
      <div className="right">
        <History />
      </div>
      </div>
    </main>
  )
}

export default App
