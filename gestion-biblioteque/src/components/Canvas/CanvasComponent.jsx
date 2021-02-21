import React from 'react'
import Canvas from './Canvas'
import './Canvas.scss'
function CanvasComponent() {
  
   

  const draw = (ctx, frameCount) => {
    // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    // ctx.fillStyle = '#000000'
    // ctx.beginPath()
    // ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    // ctx.fill()

    //console.log('ctxstuff',ctx)
    ctx.fillRect(0, 0, 32, 200)
    ctx.fillStyle = '#B8293B'
    ctx.height = 200
    ctx.width = 32
    ctx.className ='canvas-texture'
  }
  
  return (
      <div className='bookcase-cont'>
         <div className='bookcase'>
        
         <div className="book"> 
         <Canvas draw={draw} className='canvas-texture'/>
         <span className='booktext'>Text la</span>
             
         </div>
              
              {/* <img src='../../assets/images/leather.png'/> */}
         </div>
      </div>
  )
}

export default CanvasComponent