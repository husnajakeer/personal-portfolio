import '../styles/contact.css';
import ContactCard from '../components/contact-card';

function Contact() {
  return (
    <>
        <div class="title">CONTACT INFO</div>
        <div class="contact-description">
            <div class="contact-text">
                Want to  have a coffee chat or discuss potential opportunities? contact me via linkedin or email!
            </div>
        </div>
        <div class="contact-card">
            <ContactCard></ContactCard>
        </div>
    </>
  );
}

export default Contact;
