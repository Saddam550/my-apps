
import { useState } from 'react'

export default function SoundBoard() {
  const [myCarosel, setmyCarosel] = useState("")
  const Myfun = ()=>{ 
  
    setmyCarosel("name Saddam")
    console.log(myCarosel)
  
  }
 
  return (
    <div>SoundBoard
        <button onClick={Myfun}>
      Click Me
    </button>
    </div>
  
  )
}
