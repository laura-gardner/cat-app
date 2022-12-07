import phoneIcon from '../images/vintage-telephone-call.png';
import emailIcon from '../images/email.png';


const Contact = (props) => {
    console.log(props)
    return (
        <div className='contact-card'>
            <img src={props.img} alt='Cat'/>
            <h3>{props.name}</h3>
            <div className='info-group'>
                <img src={phoneIcon} alt='telephone'/>
                <p>{props.phone}</p>
            </div>
            <div className='info-group'>
                <img src={emailIcon} alt='email'/>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Contact;