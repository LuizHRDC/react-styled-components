import { HeaderTitle, HeaderContainer } from "./HeaderStyled"

interface HeaderProps {
    title: string
}

function Header({ title }: HeaderProps) {
    return (
        <HeaderContainer>
            <HeaderTitle>{title}</HeaderTitle>
        </HeaderContainer>
    )
}

export default Header
