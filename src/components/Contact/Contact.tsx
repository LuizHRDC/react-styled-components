import { ContactContainer, ContactTitle } from "./ContactStyled"

interface ContactProps {
    title: string
}

function Contact({ title }: ContactProps) {
    return (
        <ContactContainer>
            <ContactTitle>{title}</ContactTitle>
        </ContactContainer>
    )
}

export default Contact
