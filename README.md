This is a mini side project I created to learn Telegram Mini App API, Vercel, basic HTML, React TypeScript, Email API Resend and PipeDream.

## Objective

This project intends to send users (exclusively from National University of Singapore) a "Hi!" message after they enter their NUS email address in the white box, so as to mimic sending users confirmation email.

## Functionality

Telegram Bot: https://t.me/nusemailbot 

When pressing start on Telegram, a message will appear saying "Please enter your NUS Email Address by opening the web app at the bottom left of the screen.". After which, users will be directed to press the button on the bottom left of the screen which opens up a
MiniApp that shows an white blank box for users to input their email address.

Since we are only sending email address to users from NUS, users must enter their NUS email or an error sign says " Email must be from NUS e.g example@u.nus.edu " will appear.

After inputting, they will receive an email from (sender) with a message "Hi!".

Disclaimer: As this is a mini side project, I used the test domain as the sender for the email. Please use a proper domain if you want to deploy to production.

