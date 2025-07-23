import React from 'react'

const RegistrationForm = () => {
  return (
    <form className='form-container'>
    <h2>Register</h2>

    <div className = 'form-container'>
        <label>First Name</label>
        <input type='text' name='firstName' required placeholder='Enter First Name'/>
    </div>
        
    </form>
  )
}

export default RegistrationForm
