import './App.css';
import React,{useState} from 'react';


function App() {

  const [ScreenV, SetScreenv]=useState('')
  const [Result, SetResult]=useState()
  const [Count, SetCount]=useState(0)
  const [op, SetOp]=useState(false)

  const Screen = (value, res) => {

    return (
        <div className='screen'>
          <div className='opScreen'>
            <span>{value}</span>
          </div>
          <div className='resScreen'>
            <span>{"= "+res}</span>
          </div>
        </div>
    )
    }
    const Button = (label,onClick) => {
      return (
          <button className='btn' onClick={onClick}>
              {label}
          </button>
      );
  }

  const addValueScreen =(d)=>{
    if((d == '+' || d == '-' ||d == '/') && op){
      SetOp(false)
      SetScreenv(Result+d)
      return
    }
    if(op){
      SetScreenv(d)
      SetOp(false)
      return
    }
    const TypedValue=ScreenV+d
    SetScreenv(TypedValue)
  }
  const clear = () =>{
    SetOp(false)
    SetScreenv('')
    SetResult('')
    SetCount('')
    return
  }
  const Operation =(operation)=>{
    if(operation=='bs'){
      let screenV = ScreenV
      screenV=screenV.substr(0,(screenV.length-1))
      SetScreenv(screenV)
      SetOp(false)
      return
    }
    try{
      const r=eval(ScreenV) //JS é lindo e calcula pra mim :)
      SetCount(r)
      SetResult(r)
      SetOp(true)
    }catch{
      SetResult('AZEDOU')
    }
  }

  return (
    <div className='container'>
      {Screen(ScreenV,Result)}
      <div className='buttons'>
        <div>
          {Button('C',clear)}
          {Button('(',()=>addValueScreen('('))}
          {Button(')',()=>addValueScreen(')'))}
          {Button('/',()=>addValueScreen('/'))}
        </div>
        <div>
          {Button('7',()=>addValueScreen('7'))}
          {Button('8',()=>addValueScreen('8'))}
          {Button('9',()=>addValueScreen('9'))}
          {Button('*',()=>addValueScreen('*'))}
        </div>
        <div>
          {Button('4',()=>addValueScreen('4'))}
          {Button('5',()=>addValueScreen('5'))}
          {Button('6',()=>addValueScreen('6'))}
          {Button('-',()=>addValueScreen('-'))}
        </div>
        <div>
          {Button('1',()=>addValueScreen('1'))}
          {Button('2',()=>addValueScreen('2'))}
          {Button('3',()=>addValueScreen('3'))}
          {Button('+',()=>addValueScreen('+'))}
        </div>
        <div>
          {Button('0',()=>addValueScreen('0'))}
          {Button('.',()=>addValueScreen('.'))}
          {Button('<-',()=>Operation('bs'))}
          {Button('=',()=>Operation('='))}
        </div>
      </div>
    </div>
  );
}

export default App;
