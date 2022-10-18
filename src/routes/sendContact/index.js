import nodemailer from "nodemailer";

export async function POST({ params }) {

      

      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'gfaulkner675@gmail.com',
          pass: ''
        }
      });
      
      var mailOptions = {
        from: 'Website Questions',
        to: 'gfaulkner675@gmail.com',
        subject: 'Website Query',
        text: 'That was easy!'
      };

      //hardyfitnesspt@gmail.com
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          return {
            body: {error}
          }
        } else {
          console.log('Email sent: ' + info.response);
          return {
            body: { sent: "Confirmed"}
          }
        }
      });

  }