import React, { useEffect, useState }from 'react'
import EditEmployee from './EditEmployee';


const DisplayEmployees = () => {

const [employees, setEmployees] = useState([]); 

  const deleteEmployee = async (id) => {
    try {
        await fetch(`/employees/${id}`, {
            method: "DELETE"
        })
        setEmployees(employees.filter(employee => employees.id !== id))
    } catch (err) {
        console.error(err.message)
    }
  }
  
    const FetchEmployees = async () => {
        try {
            const response = await fetch(`/employees`);
            const jsonData = await response.json();

            setEmployees(jsonData)
        } catch (err) {
            console.error(err.message)
        }        
    }

    useEffect(() => {
        FetchEmployees();
    }, []);

  return (
    <>
    {" "}
    <table className="table mt-5 text-center">
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Job Title</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {employees.map(employee =>(
            <tr key={employee.id}>
                <td>{employee.first_name}</td>
                <td>{employee.last_name}</td>
                <td>
                 {employee.job_title}
                 </td>
                 <td><EditEmployee employee={employee}/></td>
                 <td><button className='btn btn-danger' onClick={() => deleteEmployee(employee.id)}>Delete</button></td>
                
            </tr>
        )

        )}
      
    </tbody>
  </table>
    </>
  )
}

export default DisplayEmployees;