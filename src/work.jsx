import React, {useState}  from 'react'
function Work({id,onChange}) {
    const [workData,setWorkData] = useState({name:"",title:"",resonsebility:"",fDate:"",tDate:""})
      const handleWork= (event)=>{
      const {name, value} = event.target
        setWorkData((prev)=>({
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
        setWorkData((prev)=>({
          ...prev,
          id:id
      }))
        edit?null:onChange(workData)
   }
   
    return  <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
            <h3 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center ">We invest in the world’s potential'>Work Experience</h3>

        <br />
    <label className='block mb-2 font-bold text-gray-600'>Company Name:<br />
    <input required readOnly={edit} className='border border-gray-300 shadow p-3 w-full rounded mb-' type="text" name = "name" value = {workData.name} onChange={handleWork} placeholder="Monsters inc." /><br /> 
    </label> <br />
    <label className='block mb-2 font-bold text-gray-600'>Job Title <br />
    <input required readOnly={edit} className='border border-gray-300 shadow p-3 w-full rounded mb-' type="text" name = "title" value = {workData.title}  onChange={handleWork} placeholder="Food court" /><br /> 
    </label> <br />
    <label className='block mb-2 font-bold text-gray-600'>Responsibilities: <br />
    <input required readOnly={edit} className='border border-gray-300 shadow p-3 w-full rounded mb-' type="text" name = "resonsebility" value = {workData.resonsebility} onChange={handleWork} placeholder="make memes, bring food, stuff" /><br /> 
    </label>
     
    <label className="block mb-2 font-bold text-gray-600" >From Date: &nbsp;&nbsp;
        <input required readOnly={edit} className='border border-gray-300 shadow p-3 w-full rounded mb' type="date"  name="fDate"   value = {workData.fDate} onChange={handleWork} />
        </label>
    <label  className='block mb-2 font-bold text-gray-600'>To Date: &nbsp;&nbsp;
        <input required readOnly={edit} className='border border-gray-300 shadow p-3 w-full rounded mb' type="date"   name = "tDate" value = {workData.tDateSs} onChange={handleWork} />
        </label> <br />
        <div className='flex flex-end justify-end'>
   <button className = {'rounded-lg px-4 py-2 text-gray-100 mx-2 ' + state0} onClick={toggle}>Save</button>
   <button className = {'rounded-lg px-4 py-2 text-gray-100 mx-2 ' + state1} onClick={toggle}>edit</button>
 </div>
  </div>
 
 
}
  export default Work;