import { useEffect, useState } from "react"
import { MHWContext } from "./MHWContext"

export const MHWProviders = ({ children }) => {

  const [offset, setOffeset] = useState(0)

  const getAllMonsters = async() => {
    const apiURL = 'http://127.0.0.1:5000/api/' 

    const res = await fetch(`${apiURL}monster_text?&offset=${offset}`)
    const data = await res.json();
    console.log(data)
  }

  useEffect(() =>{
    getAllMonsters()
  }, [])


  return (
    <MHWContext.Provider value={{
      numero: 0
    }}>
      {children}
    </MHWContext.Provider>
  )
}

