import {useState} from 'react';
export  function Button(){
    const [isTrue,setTrue]=useState(false);
    return(<button 
          id="button"
          onClick={() => {
            setTrue(!isTrue);
        } }>
                {(isTrue) ? "Save" : "Edit"}
        </button>
    )
}