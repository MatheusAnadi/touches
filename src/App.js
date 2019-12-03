import React, { useRef, useEffect } from 'react';
import './App.css';

function App() {
  const drag = useRef(null);
  const dd = useRef(null);
  const items = document.getElementsByClassName('item');
  useEffect(() => {
    click();
  });


  function click() {
    let posIni;
    let posEnd;
    let pos1 = 0;
    let pos2 = 0;
    let posX = 0;
    const draga = drag.current;
    const divWidth = dd.current.offsetWidth;
    const teste = dd.current;
    const tam = items.length;
    let maxDivWidth = divWidth*tam
    console.log(maxDivWidth);
    //Eventos
    draga.addEventListener('touchstart', dragStart);
    draga.addEventListener('touchend', dragEnd);
    draga.addEventListener('touchmove', dragMove);

    function dragStart(e) {
      e = e || window.event;
      e.preventDefault();
      if (e.type === 'touchstart') {
        posIni = e.touches[0].clientX;
        pos2 = e.touches[0].clientX;
      }
      console.log('posIni '+posIni)
    }
    function dragMove(e) {
      e = e || window.event;
      e.preventDefault();
      if (e.type === 'touchmove') {
        pos1 = pos2 - e.touches[0].clientX;
        pos2 = e.touches[0].clientX;
        // console.log(draga.offsetLeft)
      } else {
        console.log('error e.type undefined')
      }
      posEnd = e.touches[0].clientX
      draga.style.left = (draga.offsetLeft - pos1) + 'px';
    }
    /* drag para a direita POSEND fica menor que POSINI*/
    /* drag para esquerda POSEND fica maior que POSINI */
    function dragEnd(){
      if(posEnd>(posIni+50)){
          posX = posX+divWidth;
          // draga.offsetLeft > 0 ? draga.style.left = 0+'px' : draga.style.left = posX+'px';
          if(draga.offsetLeft > 0){
            draga.style.left = 0+'px'
            posX = 0;
          }else{
            posX >= (divWidth*2) ? posX=(divWidth*2) :draga.style.left = posX+'px';
          }
        console.log('1--- '+posX)
        }else if(posEnd<(posIni-50)){
          posX = posX - divWidth;     
          posX <= -(divWidth*2) ? posX = -(divWidth*2) : console.log('n e menor n krai');
          draga.offsetLeft <= -(divWidth*2) ? draga.style.left = -(divWidth*2)+'px' : draga.style.left = posX+'px';          
          draga.style.WebkitTransition = 'all 1s';
        }
    }
  }


  const Array = ['Log 1','Log 2','Log 3','Log 4','Log 5'];

  return (
    <div className="App">
      <div className="wrap">
        <div className="obj" ref={drag}>
          {Array.map(item => {
            return <div ref={dd} className="item">{item}</div> 
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
