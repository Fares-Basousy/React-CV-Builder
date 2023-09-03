import React, { useState }  from 'react'

function Edu({id, onChange}) {
      const [eduData,setEduData] = useState({id:id, school : "",major : "",fDate:"",tDate:"" })

      const handleEdu= (event)=>{
      const {name, value} = event.target
        setEduData((prev)=>({
            ...prev,
          [name]: value,
          id:id
        }))
      }
    const [state0,setstate0] = useState("bg-gray-900")
    const [state1,setstate1] = useState("cursor-not-allowed opacity-5 bg-gray-700 pointer-events-none")
    const[edit,setEdit] = useState(false)
    const toggle = (event) =>{
        event.preventDefault();
        const temp = state0
        setstate0(state1)
        setstate1(temp)
        setEdit(!edit)
        setEduData((prev)=>({
          ...prev,
          id:id
      }))
        edit?null:onChange(eduData)
   }
  
    return   <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
    <h3 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center' >Education</h3>
    <br />
    <label  className='block mb-2 font-bold text-gray-600'>School Name:&nbsp;&nbsp;      
    <input required readOnly={edit} className='border border-gray-300 shadow p-3 w-full rounded mb' type="text" placeholder="Universty of blah blah" name = "school" value={eduData.school} onChange = {handleEdu} />
    </label> <br />
    <label  className='block mb-2 font-bold text-gray-600'>Major:&nbsp;&nbsp;
    <input required readOnly={edit} className='border border-gray-300 shadow p-3 w-full rounded mb' type="text" placeholder="Major in making memes" name ="major" value= {eduData.major} onChange = {handleEdu} />
    </label> <br />
    
    <label className="block mb-2 font-bold text-gray-600" >From Date: &nbsp;&nbsp;
        <input required readOnly={edit} className='border border-gray-300 shadow p-3 w-full rounded mb' type="date"  name="fDate" value={eduData.fDate} onChange = {handleEdu} />
        </label>
    <label  className='block mb-2 font-bold text-gray-600'>To Date: &nbsp;&nbsp;
        <input required readOnly={edit} className='border border-gray-300 shadow p-3 w-full rounded mb' type="date"  name="tDate" value = {eduData.tDate} onChange = {handleEdu} />
        </label> <br />
        <div className='flex flex-end justify-end'>
    <button className = {'rounded-lg px-4 py-2 text-gray-100 mx-2 ' + state0} onClick={toggle}>Save</button>
    <button className = {'rounded-lg px-4 py-2 text-gray-100 mx-2 ' + state1} onClick={toggle}>edit</button>
  </div>
    
  </div>
  
  
  
  }
  export default Edu;