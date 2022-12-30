import React from 'react'

const Contact = () => {
    return (
    <div>
        <form>
        <div className="form-group">
            <label htmlFor="nameInput">Name: </label>
            <input type="text" id="nameInput" className='form-control' placeholder="First and Last Name" required />
            </div>
            <div className="form-group">
            <label htmlFor="emailAddressInput">Email: </label>
            <input pattern='/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/' type="email" id="emailAddressInput" className='form-control' placeholder="name@example.com" required/>
            </div>
            <div className="form-group">
            <label htmlFor="textInput">Message: </label>
            <textarea id="textInput" required ></textarea>
            </div>
            <div className='button'>
            <button>Submit</button>
            </div>
        </form>
    </div>
    )
}

export default Contact;