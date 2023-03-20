import React ,{useState} from 'react'

const useHover = (color: any, freeText: string) => {
    const [hover, setHover] = useState(false);

    return (
      <>
        <button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
        { freeText }
        </button>
        {hover && <h1 style={{color: color}}>Hello World!!!!</h1>}
      </>
    );
}

export default useHover
