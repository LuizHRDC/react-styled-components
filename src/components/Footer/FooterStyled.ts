import styled from "styled-components"

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 40px;
    background-color: #f8f9fa;
    font-size: 0.9rem;
    border-top: 1px solid #ddd;
`

const LinksRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const LinksContainer = styled.div`
    display: flex;
    gap: 15px;

    a {
        color: #007bff;
        text-decoration: none;
        font-weight: 500;

        &:hover {
            text-decoration: underline;
        }
    }
`

const SocialIconsContainer = styled.div`
    display: flex;
    gap: 15px;

    a {
        color: #007bff;
        font-size: 1.2rem;

        &:hover {
            color: #0056b3;
        }
    }
`

const CopyrightText = styled.div`
    text-align: center;
    font-size: 0.8rem;
    color: #6c757d;
    margin-top: 0px;
    margin-left: -488px;
`

export { CopyrightText, SocialIconsContainer, LinksContainer, LinksRow, FooterContainer }