import React from 'react'
// import telephone from './images/telephone.png';
// import email from './images/email.png';
// import pin from './images/pin.png';
// import contact from './images/contact.gif'


function Contact() {
  return (
    <div className='contact_page'>
    <div className='contact_heading'>
    <h1>Get In Touch</h1>
    </div>
    <div className='contact_para'>
      <p>I'm looking for job openings as a software Developer right now.
      <br />
My inbox is always available if there are any openings. 
<br />
If you want to say hi or have any other inquiries,
<br />
I'll do my best to get back to you!
</p>
    </div>
    <div className='contact_btn'>
    <a href='https://api.whatsapp.com/send/?phone=%2B916301910596&text&type=phone_number&app_absent=0' target='_blank'  rel="noopener noreferrer">
    <button>Say Hello</button>
    </a>
    </div>
    </div>
  )
}

export default Contact;