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
        posIni = draga.offsetLeft;
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
          if(draga.offsetLeft < -600){
            draga.style.left = -600+'px';
          }else if(draga.offsetLeft>0){
            draga.style.left = 0+'px'; 
          }
      } else {
        console.log('error e.type undefined')
      }
      draga.style.left = (draga.offsetLeft - pos1) + 'px';
    }
    /* drag para a direita POSEND fica menor que POSINI*/
    /* drag para esquerda POSEND fica maior que POSINI */
    function dragEnd(e) {
      posEnd = pos2;
      let threshold = draga.offsetLeft;
      /* defindo o valor para locomoção do slide*/
      let indice = draga.offsetLeft;
      console.log('indice: '+indice)
      console.log('offsetleft '+threshold)
      console.log('pos1 '+pos1);
      console.log('pos2 '+pos2);
      console.log('posEnd '+posEnd)
      console.log('Threshold '+threshold)
      if(posEnd <= (posIni+150)){
        draga.style.left=-300+'px';
      }else if(!draga){

      }else{
        draga.style.left = (posIni)+'px'
      }
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
