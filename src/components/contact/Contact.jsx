import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsDiscord} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com'
const Contact = () => {
  const form=useRef();
  const sendEmail=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_ywp97er', 'template_1xan3km',form.current, 'sTbncOdvNJeBqxcil')
    e.target.reset();
  }
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>email@gmail.com</h5>
            <a href="mailto:kanojiahimanshi28546@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsDiscord className='contact__option-icon'/>
            <h4>Discord</h4>
            <h5>Ditto#1815</h5>
            <a href="https://discord.com/channels/@me" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+123654789</h5>
            <a href="https://api.whatsapp.com/send?phone=0123456789" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required/>
          <input type="email" name='email' placeholder='Your email' required/>
          <textarea name="message" rows="7" placeholder='Your message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact