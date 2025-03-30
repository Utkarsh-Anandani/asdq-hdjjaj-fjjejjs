import '@/App.css';
import React, { Suspense } from 'react';
const AppBar = React.lazy(() => import('./components/AppBar.tsx'))
import SQLEditor from './components/Editor';
import Output from './components/Output.tsx';

function App() {

  return (
    <main className="app-container">
      <Suspense fallback={"Loading..."}>
        <AppBar />
      </Suspense>
      <div className='main-container'>
      <div className="left"></div>
      <div className="middle">
        <SQLEditor />
        <Output />
      </div>
      <div className="right"></div>
      </div>
    </main>
  )
}

export default App
