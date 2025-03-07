import React from "react";

const handleClick = () => {
   {
    alert("submitted sucessfully");
    }
  }

const Contact=()=> {
    
    return ( 
        <div>
        <section className="Contact">
        <div className="Contact-information">
        <div className="Contact-deatials">         
            <h1>Address</h1>
            <p>Andhra Pradesh</p>
            <p>Nellore Dist</p>
            <p>podhalakur mandal</p>
            <p>Weavers Colonny 524309</p>
        </div>
        <div className="Contact-deatials">
            <h1>PhoneNumber</h1>
            <p>Ph:9121971848</p>
            <p>Ph:7416204305</p>
            <p>888-0123-4567(toll free)</p>
        </div>
        <div className="Contact-deatials">
            <h1>Email</h1>
            <a href="">janardhankarampudi@gmial.com</a>
        </div>
    </div>
    <div className="Contact-me">
            <div>
            <h1>Feel Free To Contact!!</h1>
            <p> Gmail:Contact.janardhankarampudi@gmail.com</p>
            </div>
    <div class="login">
        
        <div class="login-detials">
            <input id="email" type="email" placeholder="Enter a valid emial address" required></input>
        </div>
        <div class="login-detials">
            <input type="text" id="name" placeholder="Enter your Name" required></input>
        </div>
        <div class="login-detials">
            <input type="text" id="message"  placeholder="Enter Your Message" required></input>
        </div>
        <div class="sub">
        <button onClick={handleClick}>SUBMIT</button>
        </div>
</div>

</div>
</section>
</div>

     );
}

export default Contact;