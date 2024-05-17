import './App.css'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Nav from './components/Nav'

function App() {
  
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let [data, setData] = useState(['','','','','','','','','']);
  let [head, setHead] = useState("Let's go !");

  let zero = useRef();
  let one = useRef();
  let two = useRef();
  let three = useRef();
  let four = useRef();
  let five = useRef();
  let six = useRef();
  let seven = useRef();
  let eight = useRef();

  
  let check = useCallback(
    ()=>{
      if(data[0] === data[1] && data[1] == data[2] && data[2]!=''){
        setLock(true)
        setHead(zero.current.innerText +" - Wins !");
        // zero.current.style.color = "black"
        // one.current.style.color = "black"
        // two.current.style.color = "black"

        zero.current.style.backgroundColor = "#84CC16"
        one.current.style.backgroundColor = "#84CC16"
        two.current.style.backgroundColor = "#84CC16"
        
      }else if(data[3] === data[4] && data[4] == data[5] && data[5]!=''){
        setLock(true)
        setHead(three.current.innerText +" - Wins !");
        three.current.style.backgroundColor = "#84CC16"
        four.current.style.backgroundColor = "#84CC16"
        five.current.style.backgroundColor = "#84CC16"
      }else if(data[6] === data[7] && data[7] == data[8] && data[8]!=''){
        setLock(true)
        setHead(six.current.innerText +" - Wins !");
        six.current.style.backgroundColor = "#84CC16"
        seven.current.style.backgroundColor = "#84CC16"
        eight.current.style.backgroundColor = "#84CC16"
      }else if(data[0] === data[3] && data[3] == data[6] && data[6]!=''){
        setLock(true)
        setHead(zero.current.innerText +" - Wins !");
        zero.current.style.backgroundColor = "#84CC16"
        three.current.style.backgroundColor = "#84CC16"
        six.current.style.backgroundColor = "#84CC16"
      }else if(data[1] === data[4] && data[4] == data[7] && data[7]!=''){
        setLock(true)
        setHead(one.current.innerText +" - Wins !");
        one.current.style.backgroundColor = "#84CC16"
        four.current.style.backgroundColor = "#84CC16"
        seven.current.style.backgroundColor = "#84CC16"
      }else if(data[2] === data[5] && data[5] == data[8] && data[8]!=''){
        setLock(true)
        setHead(two.current.innerText +" - Wins !");
        two.current.style.backgroundColor = "#84CC16"
        five.current.style.backgroundColor = "#84CC16"
        eight.current.style.backgroundColor = "#84CC16"
      }else if(data[0] === data[4] && data[4] == data[8] && data[8]!=''){
        setLock(true)
        setHead(zero.current.innerText +" - Wins !");
        zero.current.style.backgroundColor = "#84CC16"
        four.current.style.backgroundColor = "#84CC16"
        eight.current.style.backgroundColor = "#84CC16"
      }else if(data[2] === data[4] && data[4] == data[6] && data[6]!=''){
        setLock(true)
        setHead(two.current.innerText +" - Wins !");
        two.current.style.backgroundColor = "#84CC16"
        four.current.style.backgroundColor = "#84CC16"
        six.current.style.backgroundColor = "#84CC16"
      }
    }
  ,[count,setCount,data,setData,lock])


  let toggle = useCallback((e,num)=>{
    
    if(lock){
      return 0;
    }
    // else if(count > 8){
    //   setHead("Game Over !")
    //   check();
    //   return 0;
    // }
    else if(count%2 === 0 && e.target.innerText === ''){
      e.target.innerText = "X";
      data[num] = 'X';
      setCount(e => e+1);
      check();
    }else if(count%2 === 1 && e.target.innerText === '' ){
      e.target.innerText =  "O";
      data[num] = 'O';
      setCount(e => e+1);
      check();
    }

    // if(data[0] === data[1] && data[1] == data[2] && data[2]!=''){
    //   setLock(true)
    // }else if(data[3] === data[4] && data[4] == data[5] && data[5]!=''){
    //   setLock(true)
    // }else if(data[6] === data[7] && data[7] == data[8] && data[8]!=''){
    //   setLock(true)
    // }else if(data[0] === data[3] && data[3] == data[6] && data[6]!=''){
    //   setLock(true)
    // }else if(data[1] === data[4] && data[4] == data[7] && data[7]!=''){
    //   setLock(true)
    // }else if(data[2] === data[5] && data[5] == data[8] && data[8]!=''){
    //   setLock(true)
    // }else if(data[0] === data[4] && data[4] == data[8] && data[8]!=''){
    //   setLock(true)
    // }else if(data[2] === data[4] && data[4] == data[6] && data[6]!=''){
    //   setLock(true)
    // }

    if(count === 8){
      setHead("Game Over !")
      check();
    }

    console.log(data)
    
  },[count,setCount,data,setData,lock]);

  
  return (
    <>
    <Nav />
    <div className='relative h-lvh w-lvw p-0 m-0 flex flex-col justify-center items-center '>
        <h1 className={`pb-4 text-5xl font-extrabold head ${head.includes("Wins")  ? "text-lime-500 " : "text-red-500 "} `}>
          {head}
        </h1>
        <div className='flex flex-row justify-center items-center'>
            <div 
              ref={zero}
              className='rounded-lg shadow-lg bg-black h-20 w-20 m-3 text-7xl text-white text-center flex justify-center items-center '
              onClick={(e)=>{toggle(e,0)}}
            ></div>
            <div 
              ref = {one}
              className='rounded-lg shadow-lg bg-black h-20 w-20 m-3 text-7xl text-white text-center flex justify-center items-center '
              onClick={(e)=>{toggle(e,1)}}
            ></div>
            <div 
              ref= {two}
              className='rounded-lg shadow-lg bg-black h-20 w-20 m-3 text-7xl text-white text-center flex justify-center items-center '
              onClick={(e)=>{toggle(e,2)}}
            ></div>
        </div>

        <div className='flex flex-row justify-center items-center'>
            <div 
              ref={three}
              className='rounded-lg shadow-lg bg-black h-20 w-20 m-3 text-7xl text-white text-center flex justify-center items-center '
              onClick={(e)=>{toggle(e,3)}}
            ></div>
            <div 
              ref={four}
              className='rounded-lg  shadow-lg bg-black h-20 w-20 m-3 text-7xl text-white text-center flex justify-center items-center '
              onClick={(e)=>{toggle(e,4)}}
            ></div>
            <div 
              ref={five}
              className='rounded-lg shadow-lg bg-black h-20 w-20 m-3 text-7xl text-white text-center flex justify-center items-center '
              onClick={(e)=>{toggle(e,5)}}
            ></div>
        </div>

        <div className='flex flex-row justify-center items-center'>
            <div 
              ref={six}
              className='rounded-lg shadow-lg bg-black h-20 w-20 m-3 text-7xl text-white text-center flex justify-center items-center '
              onClick={(e)=>{toggle(e,6)}}
            ></div>
            <div 
              ref={seven}
              className='rounded-lg shadow-lg bg-black h-20 w-20 m-3 text-7xl text-white text-center flex justify-center items-center '
              onClick={(e)=>{toggle(e,7)}}
            ></div>
            <div 
              ref={eight}
              className='rounded-lg shadow-lg bg-black h-20 w-20 m-3 text-7xl text-white text-center flex justify-center items-center '
              onClick={(e)=>{toggle(e,8)}}
            ></div>
        </div>
        <div className='mt-3'>
          <button 
            className='text-lg bg-red-500 shadow-lg  p-3 rounded-lg hover:bg-red-600 text-white'
            onClick={()=>{location.reload()}}  
          >
              Reset
          </button>
        </div>
    </div>
    
    
    </>
  )
}

export default App
