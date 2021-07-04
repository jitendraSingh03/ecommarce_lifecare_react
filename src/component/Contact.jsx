import React,{useState} from 'react';
import '../component/Contact.css';
import { Button } from '@material-ui/core';
import db from '../component/firebase';
function Contact() {
    const [Name, setName] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')
    const [phone2, setphone2] = useState('')
    const [pin, setpin] = useState('')
    const [message, setmessage] = useState('')
    const contactME=(e)=>{
        e.preventDefault();
         db.collection('contact').add({
            name:Name,
            phone:phone,
            phone2:phone2,
            email:email,
            pin,pin,
            message:message
        });
        setName('');
        setemail('');
        setphone('');
        setphone2('');
        setpin('');
        setmessage('');
    
    }
    return (
        <div className='contact'>
            <h1>WE’D LOVE TO MEET YOU IN PERSON OR VIA THE WEB!</h1>
            <form className='contact__form'>
                <input type='text' value={Name} onChange={(e)=>setName(e.target.value)} placeholder='Name' required/>
                <input type='email' value={email} onChange={(e)=>setemail(e.target.value)} placeholder='Email' required/>
                <input type='text' value={phone} onChange={(e)=>setphone(e.target.value)} placeholder='Phone' required/>
                <input type='text' value={phone2} onChange={(e)=>setphone2(e.target.value)} placeholder='phone 2'/>
                <input type='text' value={pin} onChange={(e)=>setpin(e.target.value)} placeholder='Pin Code'/>
                <textarea placeholder='Message' value={message} onChange={(e)=>setmessage(e.target.value)}></textarea>
                <Button type='submit' onClick={contactME} variant='outlined'>submit</Button>
            </form>
        </div>
    )
}

export default Contact;
