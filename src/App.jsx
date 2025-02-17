import React, { useState } from 'react';
import CVForm from './components/CVForm';
import CVPreview from './components/CVPreview';

function App() {
  const [cvData, setCvData] = useState({
    name: "",
    name2: "",
    headline: "",
    emailAddress: "",
    phoneNumber: "",
    website: "",
    skills: "",
  });

  return (
    <div className="container">
        <CVForm cvData={cvData} setCvData={setCvData} />
        <CVPreview cvData={cvData} />
    </div>
  )
}

export default App
