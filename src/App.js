import React, { useRef, useEffect } from 'react';
import { Container, Wrap, Obj, Item } from './style'

function App() {
  const wrap = useRef(null);
  const drag = useRef(null);
  const items = document.getElementsByClassName('item');
  useEffect(() => {
    drag.current.style.width = (wrap.current.offsetWidth*items.length)+'px';  
    for(let i=0; i<items.length; ++i){
      items.item(i).style.width = wrap.current.offsetWidth+'px';
    }
    click();
  });
  function click() {
    let posIni;
    let posEnd;
    let pos1 = 0;
    let pos2 = 0;
    let posX = 0;
    const draga =  drag.current;
    const divWidth = wrap.current.offsetWidth;   
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
      // console.log('posIni '+posIni)
      console.log('drag start')
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
      draga.style.left = (draga.offsetLeft - pos1) + 'px';
    }   


    function dragEnd(){
      posEnd = pos2;
      if(posEnd>(posIni+50)){  
        //############################################
        if(draga.offsetLeft>0){
          draga.style.left = '0px';
        }else{
          posX = posX+divWidth;
          // posX < -(divWidth*(items.length-1)) ? posX = -(divWidth*(items.length-1)) : draga.style.left = posX+'px';
          //##############################################
          if(posX < -(divWidth*(items.length-1)) ){
            posX = -(divWidth*(items.length-1));
            draga.style.left = posX+'px';
          }else{
            draga.style.left = posX+'px'
          }
          //##############################################
        }
      }else if(posEnd<(posIni-50)){
        //############################################
        if(draga.offsetLeft< -(divWidth*(items.length-1))){
          draga.style.left = -(divWidth*(items.length-1))+'px';
        }else{
          posX = posX-divWidth;
          // posX > (divWidth*(items.length-1)) ? posX = (divWidth*(items.length-1)) : draga.style.left = posX+'px';
          //#############################################
          if(posX > (divWidth*(items.length-1)) ){
            posX = (divWidth*(items.length-1));
            draga.style.left = posX+'px';
          }else{
            draga.style.left = posX+'px'
          }
          //#############################################
        }
      }
      draga.style.WebkitTransition = 'all 0.3s';
    }
    function disableClick(e){

    }
  }


  const Array = ['Log 1','Log 2','Log 3','Log 4','Log 5','Log 6','Log 7','Log 8','Log 9'];

  return (
    <div>
      <Container>
        <Wrap ref={wrap}>
          <Obj ref={drag}>
            {Array.map(item => {
              return <Item className="item"><h1>{item}</h1></Item> 
            })}
          </Obj>
        </Wrap>
      </Container>
    </div>
  );
}

export default App;

