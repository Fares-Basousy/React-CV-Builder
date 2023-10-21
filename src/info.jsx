import React, {useState} from 'react'

function Info({onChange}) {
  const [infoData,setInfoData] = useState({fname : "",lname : "",email:"",phonenumber:"",pic:"" })

  const handleInputInfo= (event)=>{
    const {name, value} = event.target;
    setInfoData((prev)=>({
        ...prev,
      [name]: value
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
      edit?null:onChange(infoData)

 }

  const [display,setDisplay] =useState("hidden")
  const [imgData, setImgData] = useState(null);

  const onChangePicture = e => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
       
      });
      reader.readAsDataURL(e.target.files[0]);
      setDisplay("block")
    }
    setInfoData((prev)=>({
      ...prev,
    pic : imgData
    }))
    onChange(infoData)
  };
    return <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
    <h3 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl  text-center '>Personal Indivation</h3>
    <img className= {"float-right w-32 h-32 p-1 rounded-full ring-2 ring-gray-300  ml-auto " + display} src={imgData} />
    <br />
    <br />
    <label  className='block mb-2 font-bold text-gray-600' >First Name: <br />
    <input readOnly={edit}  className= " border border-gray-300 shadow p-3 w-full rounded mb-" type="text" placeholder="John" required name = 'fname' value = {infoData.fname} onChange ={handleInputInfo} /><br /> 
    </label> <br />
    <label  className='block mb-2 font-bold text-gray-600'>Last Name: <br />
    <input readOnly={edit}  className= " border border-gray-300 shadow p-3 w-full rounded mb-" type="text" placeholder="Doe" required name = 'lname' value = {infoData.lname} onChange ={handleInputInfo} /><br /> 
    </label> <br />
    <label  className='block mb-2 font-bold text-gray-600'>Email: <br />
    <input readOnly={edit}  className= " border border-gray-300 shadow p-3 w-full rounded mb-" type="text" placeholder="xxxx@yyyy.coms" name = 'email' value = {infoData.email} required onChange ={handleInputInfo} /><br /> 
    </label> <br />
    <label  className='block mb-2 font-bold text-gray-600'>Phone number <br />
    <input readOnly={edit}  className= " border border-gray-300 shadow p-3 w-full rounded mb-" type="tel" placeholder="+xxxxxxx" required name = 'phonenumber' value = {infoData.phonenumber} onChange ={handleInputInfo} /><br /> 
    </label> <br />
    <label> Profile Picture: <br />        
    <input readOnly={edit}  className= " text-sm text-gray-500 file:mr-5 file:py-2 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:cursor-pointer hover:file:bg-amber-50 hover:file:text-amber-700" type='file'  accept="image/*" name="image" id="file" onChange={onChangePicture} />
    </label>
    <div className='flex flex-end justify-end'>
   <button className = {'rounded-lg px-4 py-2 text-gray-100 mx-2 ' + state0}  onClick={toggle}>Save</button>
   <button className = {'rounded-lg px-4 py-2 text-gray-100 mx-2 ' + state1} onClick={toggle}>edit</button>
 </div>
  </div>
  
  
}
  export default Info;
