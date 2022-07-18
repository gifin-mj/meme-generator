import React from 'react'


function Inputform() {

    const [meme,setMeme]=React.useState({
        toptext:"",
        bottext:"",
        randimage:"https://i.imgflip.com/1g8my4.jpg"
    })
    const [allImages,setURL]=React.useState([])

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setURL(data.data.memes))
    },[])


    function getImageURL(){

        const randomNumber = Math.floor(Math.random() * allImages.length)
        const imgURL=allImages[randomNumber].url
        setMeme((prevmeme)=>({
            ...meme,
            randimage:imgURL
        }))
    }
    function handleText(e){
        const{name,value}=e.target
        setMeme(prevmeme=>{
            return({
                ...prevmeme,
                [name]:value
            })
        })
    }
    return (
        
    <div className='inputform'>
        
            <input 
                type='text' 
                className='text' 
                id='' 
                name='toptext'
                placeholder='Top text'
                onChange={handleText}
                value={meme.toptext}
            />
            <input 
                type='text' 
                className='text' 
                id='' 
                name='bottext'
                placeholder='Bottom text'
                onChange={handleText}
                value={meme.bottext}
            />
            <input 
                type='button' 
                className='button' 
                onClick={getImageURL} 
                id='' 
                value='Get a new meme image  🖼'/>
            <div className='meme' >
                <img className='imagebox' 
                    src={meme.randimage} 
                    alt="" 
                    height="250px" 
                    width="300px"/>
                <h2 className="meme--text top">
                    {meme.toptext}
                </h2>
                <h2 className="meme--text bottom">
                    {meme.bottext}
                </h2>
            </div>
     </div>
  )
}

export default Inputform