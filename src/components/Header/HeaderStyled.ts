import styled from "styled-components"
import headerBg from "../../assets/header-bg.jpg"

const HeaderContainer = styled.header`
    background-image: url(${headerBg});
    background-size: cover;
    background-position: center;
    padding: 100px 20px;
`

const HeaderTitle = styled.h1`
    color: #fff;
    font-size: 2rem;
    font-family: "Roboto", sans-serif;
`

export { HeaderTitle, HeaderContainer }