import { useState } from 'react'
import './App.css'
import { AppRouter } from './AppRouter'
import { MHWProviders } from './context/MHWProviders';

function App() {
  return <MHWProviders>
  <AppRouter />;
  </MHWProviders>
  
}

export default App
