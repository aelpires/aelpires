const nodemailer = require('nodemailer');

function sendEmail(title, description, roles) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
          user: 'your_email@gmail.com', // your email
          pass: 'your_password' // your email password
      }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"Your Name" <your_email@gmail.com>', // sender address
      to: 'recipient_email@example.com', // list of receivers
      subject: 'Project Details', // Subject line
      text: `Title: ${title}\nDescription: ${description}\nRoles: ${roles}`, // plain text body
      html: `<p><b>Title:</b> ${title}</p><p><b>Description:</b> ${description}</p><p><b>Roles:</b> ${roles}</p>` // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          console.log(error);
      } else {
          console.log('Message sent: %s', info.messageId);
      }
  });
}

// example usage
const title = 'Project XYZ';
const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non mauris vitae erat consequat auctor eu in elit.';
const roles = 'Developer, Designer';
sendEmail(title, description, roles);


export { nodemailer as default } from './SendMail';