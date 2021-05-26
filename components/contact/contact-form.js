import { useState, useEffect } from 'react';
import classes from './contact-form.module.css'

import Notification_74 from '../../components/ui/notification'

const sendContactDate = async(contactDetail)=>{
    const response = await fetch('/api/contact2',{
        method: 'POST',
        body: JSON.stringify(contactDetail),
        headers:{
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    if(!response.ok){
        throw new Error(data.message || 'Something went wrong!');
    }
};

const ContactForm_74 = () =>{

    const [enteredEmail ,setEnteredEmail] = useState('');
    const [enteredName ,setEnteredName] = useState('');
    const [enteredMessage ,setEnteredMessage] = useState('');

    // 'pending' 'success'  'error'
    const [requestStatus, setRequestStatus] = useState();
    
    const [requestError, setRequestError] = useState();

    useEffect(()=>{
        if (requestStatus === 'success' || requestStatus === 'error'){
            const timer = setTimeout(()=>{
                setRequestStatus(null);
                setRequestError(null);
            },3000);
            return ()=> clearTimeout(timer);
        }
    },[requestStatus]);

        const sendMessageHandler = async (event)=>{
            event.preventDefault();
    
            setRequestStatus('pending');
    
            try{
                await sendContactDate({
                    email:enteredEmail,
                    name:enteredName,
                    message: enteredMessage,
                });
                setRequestStatus('success');
                setEnteredMessage('');
                setEnteredEmail('');
                setEnteredName('');
            }catch(error){
                setRequestError(error.message);
                setRequestStatus('error');
            }
        };
        
        let notification;

        if (requestStatus === 'pending'){
            notification = {
                title: 'Sending message...',
                status: 'pending',
                message: 'You message is no its way!',
            };
        }

        if (requestStatus === 'success'){
            notification={
                title: 'Success',
                status: 'success',
                message: 'Message sent successfully!',
            };
        }

        if (requestStatus === 'error'){
            notification ={
                title: 'Error!',
                status: 'error',
                message: requestError,
            };
        }

    console.log('email',enteredEmail);
    console.log('name',enteredName);
    console.log('message',enteredMessage);

    return(
        <section className={classes.contact}>
            <h1>How can I help you?</h1>
            <form className={classes.form} onSubmit={sendMessageHandler}>
            <div className={classes.controls}>
            <div className={classes.controls}>
            <label htmlFor="email">You Email</label>
            <input type="email" id="email" value={enteredEmail}
             onChange={(event) => setEnteredEmail(event.target.value)}
            required
              />
            </div>
            <div className={classes.controls}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name"  value={enteredName}
                 onChange={(event) => setEnteredName(event.target.value)}
                 required
                 />
            </div>
            </div>
            <div className={classes.controls}>
            <label htmlFor="message">Your Message</label>
            <textarea 
            id='message' row='5'  value={enteredMessage}
             onChange={(event) => setEnteredMessage(event.target.value)}
             required
             ></textarea>
            </div>
            <div className={classes.actions}>
                <button>Send Message</button>
                </div>
            </form>
            {notification &&(
                <Notification_74
                status={notification.status}
                title={notification.title}
                message={notification.message}
                />
            )}
        </section>
    );
};

export default ContactForm_74;