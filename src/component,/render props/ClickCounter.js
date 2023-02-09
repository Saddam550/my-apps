function ClickCounter({count, incrimentCount}) {
 return(
    <button onClick={incrimentCount}> Clicked Value : {count}</button>
 )   
}

export default ClickCounter