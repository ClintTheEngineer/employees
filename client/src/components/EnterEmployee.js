import React, { useState } from 'react'

const EnterEmployee = () => {
    
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [dateOfHire, setDateOfHire] = useState("");
    const [salary, setSalary] = useState("");
    const [email, setEmail] = useState("");
    const [id, setId] = useState("");
   
     
    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { firstName, lastName, jobTitle, dateOfHire, salary, email, id };
            await fetch(`/employees`, {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location = "/";
        } catch (err) {
            console.error(err.message)
        }
    }

    

  return (
    <>
    <h1 className='text-center mt-5'>Employee List</h1>
    <form className='d-flex mt-5' onSubmit={onSubmitForm}>
    
        <input type="text" 
               className='form-control' 
               value={firstName}
               onChange={e => setFirstName(e.target.value)}
               placeholder="First Name"
        />
        <input type="text" 
               className='form-control' 
               value={lastName}
               onChange={e => setLastName(e.target.value)}
               placeholder="Last Name"
        />
        <input type="text" 
               className='form-control' 
               value={jobTitle}
               onChange={e => setJobTitle(e.target.value)}
               placeholder="Job Title"
        />
        <input type="text" 
               className='form-control' 
               value={dateOfHire}
               onChange={e => setDateOfHire(e.target.value)}
               placeholder="Hire date"
        />
        <input type="text" 
               className='form-control' 
               value={salary}
               onChange={e => setSalary(e.target.value)}
               placeholder="salary"
        />
        <input type="text" 
               className='form-control' 
               value={email}
               onChange={e => setEmail(e.target.value)}
               placeholder="e-mail"
        />
        <input type="text" 
               className='form-control' 
               value={id}
               onChange={e => setId(e.target.value)}
               placeholder="id"
        />
        <button className='btn btn-success'>Add</button>
    </form>
    
    </>
  )
}

export default EnterEmployee;