import {
    CopyrightText,
    SocialIconsContainer,
    LinksContainer,
    LinksRow,
    FooterContainer,
} from "./FooterStyled"

interface FooterProps {
    links: { label: string; href: string }[]
    socialLinks: { icon: JSX.Element; href: string }[]
    copyrightText: string
}

function Footer({ links, socialLinks, copyrightText }: FooterProps) {
    return (
        <FooterContainer>
            <LinksRow>
                <LinksContainer>
                    {links.map((link) => (
                        <a key={link.label} href={link.href}>
                            {link.label}
                        </a>
                    ))}
                </LinksContainer>

                <SocialIconsContainer>
                    {socialLinks.map((social, index) => (
                        <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
                            {social.icon}
                        </a>
                    ))}
                </SocialIconsContainer>
            </LinksRow>
            <CopyrightText>{copyrightText}</CopyrightText>
        </FooterContainer>
    )
}

export default Footer
