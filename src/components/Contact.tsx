import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9xccvt8', 'template_sjz51iv', form.current, '3tXRjwYcRXx0sqrSo')
      .then((result) => {
        console.log(result.text);
        location.reload();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div id="contact" className="bg-crust p-6 mx-auto my-3 rounded-md flex justify-center min-h-fit w-fit" >
      <form id="contact-form" ref={form} className="inline-grid grid-cols-2 gap-3 h-fit my-auto" >
        <input type="text" placeholder="Name" name="from_name" className="bg-mantle rounded-md border-none" />
        <input type="text" placeholder="Email/Contact info" name="reply_to" className="bg-mantle rounded-md border-none" />
        <textarea name="message"
          placeholder="Message"
          rows="9"
          className="bg-mantle col-span-2 rounded-md border-none">

        </textarea>
        <input type="button"
          value="Send Email"
          onClick={sendEmail}
          className="bg-surface0 rounded-md p-2 hover:bg-surface1 hover:cursor-pointer" />
      </form>
    </div>
  )
}

export default Contact
