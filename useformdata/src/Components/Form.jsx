import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Form() {
  
  const [formData,setFormData] = useState({      
    username: '',
    email:'',
   password: '',
    number:'',
    } );
    const[allusersdata,setAllUsersData] = useState([])
    const [newData,setNewData] = useState([])

    function handleChange(e){
      const {name,value} = e.target;
      setFormData({
        ...formData,
        [name]: value,

      });
    }

    function handleSubmit (e){
      e.preventDefault()
      // console.log(formData)
      try {
        setNewData(formData)
         axios.post("http://localhost:8080/form",formData)
         .then((result)=>{
          // result.data.message
          console.log("Server res",result.data.message)
          setNewData("")

         })
      }
      catch(error){
        console.error("error",error)
      }
    };
    
    
    //fetching data from mongoDB
    useEffect(()=>{

      axios.get("http://localhost:8080/getAllUsersData")
      .then((result)=>{
        // console.log(result.data.usersData)
          setAllUsersData(result.data.usersData)
      })     
    },[newData])
  console.log(allusersdata)
  return (
    <div>
        <form onSubmit={handleSubmit}>
              <input type="text" name='username' value={formData.username} placeholder='Enter your name' 
              onChange ={handleChange } />
              <input type="email"  name='email' value={formData.email}  placeholder='Enter Email'  onChange={handleChange} />
              <input type="password"  name='password'  value={formData.password} placeholder='Enter your password' 
               onChange={handleChange}/>
              <input type="number" name='number'  value={formData.number} placeholder='Enter your Phone number' onChange={handleChange}  />
              <button type='submit'>Submit</button>
        </form>


        <table>
          <thead>
            <td>
              Sr No. 
            </td>
            <td>
              Username
            </td>
            <td>
              User Email
            </td>
            <td>
              Phone Number
            </td>
          </thead>
        { allusersdata.map((user,index)=>{
          return(
                
          
            <tr key={index}>
              <td>
                {index + 1}
              </td>
              <td>
              {user.username}
              </td>
            
             
             <td>
             {user.email}
             </td>
         
              <td>
              {user.number}
              </td>
            </tr>

            
            )

})}

</table>

    </div>
  )
}


export default Form