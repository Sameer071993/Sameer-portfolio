import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project?</p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      
      <div className="contacts">
        <div>
          <a href="mailto:sameertripathiep@gmail.com">
            <img src={emailIcon} alt="Email Icon" />
          </a>
          <a href="mailto:sameertripathiep@gmail.com">sameertripathiep@gmail.com</a>
        </div>
        
        <div>
          <a href="tel:+919907192855">
            <img src={phoneIcon} alt="Phone Icon" />
          </a>
          <a href="tel:+919907192855">(+91) 9907192855</a>
        </div>  
      </div>
      
      <Form />
    </Container>
  );
}
