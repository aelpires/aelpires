import emailjs from 'emailjs-com';
import dotenv from 'dotenv';
dotenv.config();

export const sendEmail = (email, message) => {
    const templateParams = {
      email,
      message
    };
  
    emailjs.send(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, templateParams)
      .then((response) => {
        console.log('Email sent!', response.status, response.text);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };