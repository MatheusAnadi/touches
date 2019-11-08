import React, { useRef, useEffect } from 'react';
import './App.css';

function App() {
  const drag = useRef(null);
  const aaa = document.getElementsByClassName('item');
  useEffect(() => {
    click();
  });


  function click() {
    let posIni;
    let posEnd;
    let pos1 = 0;
    let pos2 = 0;
    let posX = 0;
    let posLeft=0;
    let slideLength = aaa.length;
    let firSlide = aaa[0];
    let lastSlide = aaa[slideLength - 1];
    let cloneFirst = firSlide.cloneNode(true);
    let cloneLast = lastSlide.cloneNode(true);
    const draga = drag.current;



    draga.addEventListener('touchstart', dragStart);
    draga.addEventListener('touchend', dragEnd);
    draga.addEventListener('touchmove', dragMove);

    function dragStart(e) {
      e = e || window.event;
      e.preventDefault();
      if (e.type === 'touchstart') {
        posIni = e.touches[0].clientX;
        pos2 = e.touches[0].clientX;
        posLeft = draga.offsetLeft;
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
        posX = posX+300;
        draga.offsetLeft > 0 ? draga.style.left = 0+'px' : draga.style.left = posX+'px';
          console.log('1--- '+posX)
        }else if(posEnd<(posIni-50)){
        posX = posX - (300);     
        draga.offsetLeft < -600 ? draga.style.left = -600+'px' : draga.style.left = posX+'px';
        console.log('2')  
      }else{
        
      }


      // if(draga.offsetLeft < -600){
      //   draga.style.left = -600+'px';
      // }else if(draga.offsetLeft>0){
      //   draga.style.left = 0+'px';
      // }



    }
  }




  return (
    <div className="App">
      <div className="wrap">
        <div className="obj" ref={drag}>
          <div className="item">1</div>
          <div className="item">2</div>
          <div className="item">3</div>
        </div>
      </div>
      <button id="tll">testando</button>
    </div>
  );
}

export default App;
