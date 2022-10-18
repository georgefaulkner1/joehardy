import nodemailer from "nodemailer";

export async function POST({ request }) {
  const data = await request.json()
  console.log(data)
  
  const {name, email, phone, message} = JSON.stringify(data)

  if(name.length > 1 && email.length > 1 && message.length > 1){

    var transporter = nodemailer.createTransport({
      service: process.env.emailService,
      auth: {
        user: process.env.emailAuth,
        pass: process.env.emailPassword
      }
    })

    var mailOptions = {
      from: 'Website Questions',
      to: process.env.emailTo,
      subject: 'Website Question',
      html: `Name: <b>${name}</b> <br>Phone: <b>${phone}</b> <br>Email: <b>${email}</b> <br>Message: <b>${message}</b>  `
    }

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
    })

  }else {
    console.log("Info Not corr")
    return {
      body: {error: 400}
    }
  }

      /* 
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
      */

  }