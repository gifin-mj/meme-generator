import React from 'react'
import Memesdata from '../Memesdata'

function Inputform() {

    function getImageURL(){

        const memesArray=Memesdata.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const imgURL=memesArray[randomNumber].url
        console.log(randomNumber,imgURL)
    }

    return (
    <div className='inputform'>
        
            <input type='text' className='text' id='' placeholder='Top text'/>
            <input type='text' className='text' id='' placeholder='Bottom text'/>
            <input type='button' className='button' onClick={getImageURL} id='' value='Get a new meme image  🖼'/>
        
     </div>
  )
}

export default Inputform