import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
    return (
    <div className='contact'>
        <form>
        <div className="form-group">
            <label htmlFor="nameInput">  Name: </label>
            <input type="text" id="nameInput" className='form-control' placeholder="First and Last Name" required />
            </div>
            <div className="form-group">
            <label htmlFor="emailAddressInput">Email:     </label>
            <input  type="email" id="emailAddressInput" className='form-control' placeholder="name@example.com" required/>
            </div>
            <div className="form-group">
            <label htmlFor="textInput">Text: </label>
            <textarea id="textInput" rows='4' placeholder='Type message here' required ></textarea>
            </div>
            <div className='button'>
            <button>Submit</button>
            </div>
        </form>
        <p className='emailMe'>
            You can also email me directly at fnk8476@gmail.com.
        </p>
    </div>
    )
}

export default Contact;