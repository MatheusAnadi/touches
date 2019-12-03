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
    console.log(divWidth)
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
      posEnd = e.touches[0].clientX;
      draga.style.left = (draga.offsetLeft - pos1) + 'px';
    }   



// if(posEnd>(posIni+50)){
//   posX = posX+divWidth;
//   if(draga.offsetLeft > 0){
//     draga.style.left = 0+'px'
//     posX = 0;
//   }else{
//     posX >= (divWidth*4) ? posX=(divWidth*4) : draga.style.left = posX+'px';
//   }
//   console.log('1--- '+posX)
// }else if(posEnd<(posIni-50)){
//   posX = posX - divWidth;   
//   console.log('2 ---'+posX)  
//   if(draga.offsetLeft < -(divWidth*5)){
//     draga.style.left = -(divWidth*5)+'px'
//   }else{
//     posX <= -(divWidth*5) ? posX= -(divWidth*5) : draga.style.left = posX+'px'
//   }
// }  


    function dragEnd(){
      if(posEnd>(posIni+50)){
        console.log('1')
      }else if(posEnd<(posIni-50)){
        console.log('2')
      }




      draga.style.WebkitTransition = 'all 1s';
    }
  }


  const Array = ['Log 1','Log 2','Log 3','Log 4','Log 5'];

  return (
    <div>
      <Container>
        <Wrap ref={wrap}>
          <Obj ref={drag}>
            {Array.map(item => {
              return <Item className="item">{item}</Item> 
            })}
          </Obj>
        </Wrap>
      </Container>
    </div>
  );
}

export default App;

