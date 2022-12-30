import React from 'react'
import { useUpdateUserMutation } from '../../app/services/userService'

const FormHandle = ({name,password,image}) => {
  const[updateUser,{data,isSuccess:updateSuccess}]=useUpdateUserMutation()
    // const initialValue={
    //     name:name,
    //     password:password,
    //     image:null
    //   }
      
    // const {values,errors,handleChange,handleBlur,handleSubmit,setFieldValue}=  useFormik({
    //     initialValues: initialValue,
    //     onSubmit:(values)=>{
    //       updateUser(values)
    //       console.log(values)
    //     }
    //   })
      const handleSubmit=(e)=>{
        e.preventDefault()
        let name=e.target.name.value
        let password=e.target.password.value
        let image=e.target.image.files[0]
        let formData=new FormData()
        formData.append("name",name)
        formData.append("password",password)
        formData.append("image",image)
       
        updateUser(formData)
      
        
      }

      
      
  return (
    <>
   {/* {values.image &&  <ImagePreview file={values.image} preFile={image}/>}	 */}
    
    <form onSubmit={handleSubmit} encType="multipart/form-data">
				
    <input type="file" name="image"    accept='image/*'/>
    <input type="text" name="name" defaultValue={name} required/>

    <input type="password" name="password"  />
    <button type="submit">Update</button>
</form>
    {/* <form onSubmit={handleSubmit} enctype="multipart/form-data">
				
    <input type="file" name="image"  onChange={(event)=>{
        setFieldValue("image",event.target.files[0])
    }}   accept='image/*'/>
    <input type="text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur}/>

    <input type="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} placeholder="Password" />
    <button type="submit">Update</button>
</form> */}
</>
  )
}

export default FormHandle