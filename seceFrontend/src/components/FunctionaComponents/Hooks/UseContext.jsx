import React, { createContext } from 'react'
import Invigilator from '../ContextComponents/Invigilator'

export const ThemeProvider=createContext();
const Student = () => {
  return (
    <div>
      <ThemeProvider.Provider value={{sgpa:9.5,CGPA:6.5}}>
      <h2>this is a example of use context hook which is the alternative for props drilling</h2>
      <h3>Students exams are done.</h3>
      <Invigilator />
      </ThemeProvider.Provider>
    </div>
  )
}

export default Student
