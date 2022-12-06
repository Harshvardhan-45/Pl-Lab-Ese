import Button from 'react-bootstrap/Button';
import './about.css'
import question1 from './images/question1.jpg'
import question2 from './images/quetion2.jpg'
import question3 from './images/quetion3.jpg'

function about(){
    return(
      <div className='detail'>
        <h1>Smart India Hackethon</h1>
        <br />
        <p>Smart India Hackathon 2022 is a nationwide initiative to provide students a platform to solve some of the pressing 
          problems we face in our daily lives, and thus inculcate a culture of product innovation and a mindset of problem solving</p>
        <br />
        <p>Problem statements for Smart India Hackethon</p>
        
        <p>
        <img src={question1} alt="HERITAGE Identification of monuments using 
        Deep Learning Techniques"></img>
          
        1. HERITAGE Identification of monuments using Deep Learning Techniques
        </p>
          <p>
          <img src={question2} alt="Weather Forecast and its Visualization using Augmented Reality"></img>
          2. Weather Forecast and its Visualization using Augmented Reality (AR): Mobile App
          </p>
          <p> 
          <img src={question3} alt="AI based Chatbot to answer FAQs" ></img>
          3. AI based Chatbot to answer FAQs
        </p>
        {/* <Button variant="primary">Contact</Button>{' '} */}
        <a href="/contact" target="_blank" rel="noreferrer">
          <Button>Contact Us</Button>
        </a>
        <a href="/Resistration" target="_blank" rel="noreferrer">
          <Button>Registration</Button>
        </a>
        <a href="/login" target="_blank" rel="noreferrer">
          <Button>Login</Button>
        </a>
        
      </div>
    );

}

export default about;