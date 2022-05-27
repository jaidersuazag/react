import React,{useEffect, useState} from 'react'
const URL='https://rickandmortyapi.com/api/character/?name=';
const card= document.getElementById("Card");
//const text=document.getElementById("text");


export const RickAndMorrty = () => {
    //text.addEventListener('click',search);
    //window.addEventListener('load',getCharacters());

    const[modeMortty,setMortty] = useState(false); 

    const changemortty = ()=>{
        setMortty(!modeMortty)
    }

    useEffect(()=>{
       if(modeMortty){
        getCharacters(document.getElementById("buscar").value)
       }else{
       }
    },[modeMortty])


    function getCharacters(setatrubute){
        document.getElementById("Card").innerHTML=" ";
        fetch(URL+setatrubute)
        .then(response => response.json())
        .then(data =>{
            data.results.forEach(element => {
                recorrer(element.image,element.name);
            });
        });
    }
    
    function recorrer(image,name){
        while(true){
            const container= document.createElement("div");
            let imagCard=document.createElement("img");
            imagCard.setAttribute('src',image);
            container.setAttribute("class","mortty")

            container.appendChild(imagCard);
            const nameCard=document.createElement("h1");
            nameCard.textContent =name;
    
            container.appendChild(nameCard);
            document.getElementById("Card").appendChild(container);
            break;
        }
    }




  return (
    <div className='buscar'>
        <h2 className='titulo'>Buscar:</h2>
        <input className='navegacion' id="buscar" type="text" onKeyDown={changemortty} />
        <div id="Card" className='card' >

        </div>
    </div>
  )
}
