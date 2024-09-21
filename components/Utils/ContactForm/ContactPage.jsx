import ContactDetails from './ContactDetails'
import ContactForm from './ContactForm'

export default function ContactPage() {
  return (
    <div className="relative bg-white dark:bg-black">
      <div className="flex items-center">
        <ContactDetails />
        {/* <ContactForm /> */}
      </div>
    </div>
  )
}
