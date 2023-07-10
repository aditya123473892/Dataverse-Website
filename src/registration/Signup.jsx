import React from 'react'
import './signup.css'

export default function Signup() {
  return (
    <div>
           <div class="login_form_container">
      <div class="login_form">
        <h2>Signup</h2>
        <div class="input_group">
          <i class="fa fa-user"></i>
          <input
            type="text"
            placeholder="Username"
            class="input_text"
            autocomplete="off"
          />
          
        </div>
        <div class="input_group">
          <i class="fa fa-unlock-alt"></i>
          <input
            type="email"
            placeholder="email"
            class="input_text"
            autocomplete="off"
          />
        </div>
        <div class="input_group">
          <i class="fa fa-unlock-alt"></i>
          <input
            type="password"
            placeholder="password"
            class="input_text"
            autocomplete="off"
          />
        </div>
        <div class="button_group" id="login_button">
          <a>Submit</a>
          
          
        </div>
        
        
      </div>
    </div>
    

    </div>
  )
}
