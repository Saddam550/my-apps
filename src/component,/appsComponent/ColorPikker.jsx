import React, { useState } from 'react';
import styled from 'styled-components';
export default function ColorPikker() {
const [FastValue, FastSetvalue] = useState(0)
const [SecentValue, SecebtSetvalue] = useState(0)
const [ThardVAlue, ThardSetvalue] = useState(0)
const [CopyShow, SetCopyColor] = useState()

const ColorBox = styled.div`
                          background:rgb(${FastValue },${SecentValue},${ThardVAlue});
`
const ColorShow = styled.span`
background: transparent;
padding: 48px;
display: block;
`



  const R = (e)=>{
const rangeValue = e.target.value
FastSetvalue(2+rangeValue)
  }

  const G= (e)=>{
    const rangeValue = e.target.value
    SecebtSetvalue(2+rangeValue)
      }

      const B = (e)=>{
        const rangeValue = e.target.value
        ThardSetvalue(2+rangeValue)
          }

        
          
          const copyColor = ()=>{
           const copyChack =  navigator.clipboard.writeText("rgb("+FastValue +','+SecentValue+','+ThardVAlue+')')
           if (copyChack) {
            SetCopyColor("rgb("+FastValue +','+SecentValue+','+ThardVAlue+')')
           }

          }

          
          const copyClear = ()=>{
            SetCopyColor('')
            FastSetvalue(0)
            SecebtSetvalue(0)
            ThardSetvalue(0)


          }

  return (
    <div className="colorPikkerBody">
<ColorBox className="colorbox">
<ColorShow >  {CopyShow}</ColorShow>
  </ColorBox> <hr />
<div className='ScrollColor'>
 
<input onChange={R} type="range" name="R" className='R' />
<input onChange={G} type="range" name="G" className='G' />
<input onChange={B} type="range" name="B" className='B' />

</div>

<div className='colorCode'>
rgb({FastValue },{SecentValue},{ThardVAlue})
<button onClick={copyColor} > Color Code </button>
<button onClick={copyClear} > Color Clear </button>
</div>

    </div>
  )
}
