import React, { useContext } from 'react'
import { ThemeProvider } from '../Hooks/UseContext'
const ExamResults = () => {
    const res=useContext(ThemeProvider)
  return (
    <div>
       
      <h2>Result published and your sgpa is{res.sgpa},CGPA is {res.CGPA}</h2>
    </div>
  )
}

export default ExamResults
