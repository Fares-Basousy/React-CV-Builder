import { useState } from 'react'
import Info from './info'
import Edu from './edu'
import Work from './work'
import './App.css'

function App() {
  let prototype = {info:{},edu:{},exp:{}}
  const [data,setData] = useState({info:{},edu:{},exp:{}})
  const [eduLength,setEduLength] = useState(0)
  const [workLength,setWorkLength] = useState(0)
  
  
  const handleInfo = (newData) =>{
    prototype = data
    prototype.info = newData
    setData(prototype)
    console.log(prototype.info)
   }
  const handleEdu = (newData) =>{
    prototype = data
    const id = "edu"+newData.id
    delete newData.id
        prototype.edu[id] = newData
    setData(prototype)
    console.log(data.edu) 
  }
  const handleWork = (newData) =>{
    prototype = data
    const id = "work"+newData.id
    delete newData.id
        prototype.exp[id] = newData
    setData(prototype)
    console.log(data.exp) 
  }
  const [educations,setEducation] = useState([<Edu key ="education0" id =  '0' onChange ={handleEdu} />])
  const [workexp,setWorkexp] = useState([<Work key = "work0" id = '0' onChange ={handleWork}/>])
  const addEdu = (event) =>{
    event.preventDefault();
    setEducation([...educations,<Edu key = {"education"+(eduLength+1)} onChange ={handleEdu} id ={`${eduLength+1}`}/>,<button key={"button"+(eduLength+1)} onClick={() => remEdu(eduLength+1)} className='rounded-lg px-4 py-2  mx-2 text-gray-100 my-2'>Remove Education</button>]);
  setEduLength(eduLength+1)  }
  const addWork = (event) =>{
    event.preventDefault();
    setWorkexp([...workexp,<Work key = {"work"+(workLength+1)} onChange ={handleWork}  id ={`${workLength+1}`} />,<button key={"button"+(workLength+1)} onClick={() => remWork(workLength+1)} className='rounded-lg px-4 py-2  mx-2 text-gray-100 my-2'>Remove Work Experience</button>]);
    setWorkLength(workLength+1)  }

  const remEdu = (index1,index2) => {
    setEducation(educations.map((element, index) => {
      if (index !== index1 && index !==index2) {
        return element }
      return null
       } ).filter(element => element !== null) )
  }

  const remWork = (index1,index2) => {
        setWorkexp(workexp.map((element, index) => {
       if (index !== index1 && index !==index2) {
         return element }
       return null
        } ).filter(element => element !== null) )
   
      }
    const handleSubmit = (event,) =>{
      event.preventDefault();
     console.log (data)
    }
  return <form className="transition-all bg-white shadow-md rounded px-8 pt-6 pb-8 mb-2  flex flex-col text-left " onSubmit={handleSubmit}>
    <Info key = "information0" onChange ={handleInfo}/>    {educations}   
    <button onClick={addEdu} className='rounded-lg px-4 py-2 text-gray-100 mx-2 text-black my-2' >Add Education</button>
    {workexp}   
    <button onClick={addWork}  className='rounded-lg px-4 py-2 text-gray-100 mx-2 text-black my-2'>Add Work Experience</button>
    <button type ="submit" className = "rounded-lg text-center px-4 py-2 text-gray-100 mx-2 bg-gray-900 " onClick={handleSubmit} >submit</button>
    </form >
  
}

export default App
