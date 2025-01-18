import styled from "styled-components"
import headerBg from "../../assets/header-bg.jpg"

const ContactContainer = styled.div`
    background-image: url(${headerBg});
    background-size: cover;
    background-position: center;
    padding: 60px 20px;
`

const ContactTitle = styled.h2`
    margin: 0 0 20px;
    color: #fff;
    font-family: "Roboto", sans-serif;
`
export { ContactContainer, ContactTitle }