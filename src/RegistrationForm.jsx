import React from 'react'
import './RegistrationForm.css'

const RegistrationForm = () => {
  return (
    <form className='form-container'>
    <h2>Register</h2>

    <div className="form-group">
        <label>First Name:</label>
        <input type="text" name="firstName" />
      </div>

     <div className="form-group">
        <label>Last Name:</label>
        <input type="text" name="lastName" />
      </div>

    <div className="form-group">
        <label>Email:</label>
        <input type="email" name="email" />
      </div>
    
    <div className="form-group">
        <label>Password:</label>
        <input type="password" name="password" />
      </div>

    <div className='form-group-radio'>
  <label>Gender</label>
  <div className='gender-options'>
    <label>
       Male
      <input type='radio' name='gender' value='male' />
    </label>
    <label>
Female
      <input type='radio' name='gender' value='female' /> 
    </label>
  </div>
</div>


    <div className = 'form-group'>
        <label>Country:</label>
        <select name='country'>
            <option value="">Select Country</option>
            <option value="Tanzania">Tanzania</option>
            <option value="Kenya">Kenya</option>
            <option value="Uganda">Uganda</option>
            <option value="Rwanda">Rwanda</option>
            <option value="Burundi">Burundi</option>
            <option value="South Sudan">South Sudan</option>
            <option value="Somalia">Somalia</option>
            <option value="Ethiopia">Ethiopia</option>
        </select>
        
    </div>
        
        <button type='submit'>Submit</button>
    </form>
  )
}

export default RegistrationForm
