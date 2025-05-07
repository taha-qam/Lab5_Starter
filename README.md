# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Taha Qamar

Pt 3. Questions
#1 Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

The message feature interacts with many components of the application, and unit testing works on small scales without
too many parts. Thus, unit testing is not really best for a "message" feature

#2 Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Since we are preventing the user from sending a message, and just checking the character length of the user's message, this can 
easily be seperated from other parts of the application and become a small scale, encapsulated unit for testing. Thus, 
unit testing would work for the “max message length” feature


