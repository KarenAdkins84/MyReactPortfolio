import React from 'react'

const Contact = () => {
    return (
    <div>
        <form>
        <div className="form-group">
            <label htmlFor="nameInput">Name: </label>
            <input type="text" id="nameInput" placeholder="First and Last Name"/>
            </div>
            <div className="form-group">
            <label htmlFor="emailAddressInput">Email: </label>
            <input type="email" id="emailAddressInput" placeholder="name@example.com"/>
            </div>
            <div className="form-group">
            <label htmlFor="textInput">Message: </label>
            <textarea id="textInput"></textarea>
            </div>
            <div className='button'>
            <button>Submit</button>
            </div>
        </form>
    </div>
    )
}

export default Contact;