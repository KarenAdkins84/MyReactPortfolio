import React from 'react'

const Contact = () => {
    return (
    <div>
        <form>
            <div class="form-group">
            <label for="emailAddressInput">Email address</label>
            <input type="email" class="form-control" id="emailAddressInput" placeholder="name@example.com"/>
            </div>
            <div class="form-group">
            <label for="textInput">Message</label>
            <textarea class="form-control" id="textInput" rows="3"></textarea>
            </div>
        </form>
    </div>
    )
}

export default Contact;