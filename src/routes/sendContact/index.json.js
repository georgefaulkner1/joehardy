

/* 
      var transporter = nodemailer.createTransport({
      service: process.env.emailService, //process.env.emailService
      auth: {
        user: process.env.emailAuth, //process.env.emailAuth
        pass: process.env.emailPassword //process.env.emailPassword
      }
    })

    var mailOptions = {
      from: 'Website Questions',
      to: process.env.emailTo, //process.env.emailTo
      subject: 'Website Question',
      html: `Name: <b>${name}</b> <br>Phone: <b>${phone}</b> <br>Email: <b>${email}</b> <br>Message: <b>${message}</b>  `
    }


    console.log("Send")

    try {

      transporter.sendMail(mailOptions, async function(error, info){
        console.log("Sending")
        console.log("Info: ", info)
        console.log("Err: ", error)

        if(info) {
          return {
            body: {status: 200}, status: 200
          }
        }else{
          if(error) {
            return {
              body: {status: 400}, status: 400
            }
          }
        }
  
      })

    }catch(error){
      console.log(">>>", error)
      return {
        body: {status: 400}, status: 400
      }
    }

  }else {
    console.log("Info Not corr")
    return {
      body: {status: 400}, status: 400
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
/*
      
const nodemailer = require("nodemailer")


export async function POST({ request }) {
  const data = await request.json()
  console.log(data)
  
  const {name, email, phone, message} = JSON.parse(JSON.stringify(data))

  if(name.length > 1 && email.length > 1 && message.length > 1){

    console.log(`> Send Email - from ${email}`)

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "gfaulkner675@gmail.com",
        pass: "zusxhjwzexfaqkbj"
      }
    })

    var mailOptions = {
      from: "Website Question",
      to: "gfaulkner675@gmail.com",
      subject: "Website Question",
      html: `Name: <b>${name}</b> <br>Phone: <b>${phone}</b> <br>Email: <b>${email}</b> <br>Message: <b>${message}</b>  `
    }

    transporter.sendMail(mailOptions, async function(error, info){
      if(info) {
        return {
          status: 200,
          body: {message: "Email sent!"}
        }
      }

      if(info) {
        return {
          status: 400,
          body: {message: "Email Failed!"}
        }
      }
    }

  }
}
*/