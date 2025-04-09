import React, { useState } from 'react'

const FormValidation = () => {

    const[formData, setFormData] = useState({
        name:'',
        email: '',
        password: ''
    });

    const[error, setError] = useState({})

    const handleChange = (event)=>{
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name] : value,
        })
    }

    const validateForm = () => {
        let errors = {};

        if(!formData.name.trim()) errors.name = "Name is required";
        if(!formData.email.trim()) errors.email = "Email is required ";
        else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email))
            errors.email = "Invalid email format";
        
        if(!formData.password.trim()) errors.password = "Password is required ";
        else if(formData.password.length < 6) errors.password = "Password must be at least 6 characters";

        setError(errors);
        
        return Object.keys(errors).length === 0;
    }

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        if(validateForm()){
            console.log("Form Submited ", formData);
            setFormData({
                name:'',
                email: '',
                password: ''
            })
            
            setError({});
        }
    }

  return (
    <section>
        <div className='container'>
            <div className='h-screen flex flex-col justify-center items-center'>
                <h1>{formData.name} || {formData.email} || {formData.password} </h1>
                <form action="" onSubmit={handleFormSubmit} className="w-lg bg-green-200 p-4" >
                <h4 className='text-center'>React Form Validation </h4>
                {/* Reusable Input component with error display  */}
                {
                    ["name", "email", "password"].map((field, index)=>(
                        <div key={index} className='mb-3'>
                            <input 
                                type={field === "password" ? "password" : "text"}
                                name={field}
                                value={formData[field]}
                                onChange={handleChange}
                                placeholder={`Enter Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                                className='border w-full p-1 rounded'
                            />
                            {error[field] && <div className="text-red-900">{error[field]}</div> }
                        </div>
                    ))
                }
                    <button className="bg-sky-500 py-2 px-5 rounded cursor-pointer">Submit</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default FormValidation;

