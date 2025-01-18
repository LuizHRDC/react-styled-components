import styled from "styled-components"

interface Section {
    image: string
    text: string
    title: string
}

interface SectionsProps {
    sections: Section[]
}

interface SectionItemProps {
    reverse?: boolean
}

interface SectionImageProps {
    image: string
}

// Styled Components
const SectionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
`

const SectionItem = styled.div<SectionItemProps>`
    display: flex;
    flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
    align-items: flex-start;
    justify-content: flex-start;
    margin: 0;
    width: 100%;

    > div:last-child {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
`

const SectionContent = styled.div`
    flex: 1;
    display: flex;
    text-align: left;
    flex-direction: column;
    height: 402.77px;
    background: #fff;
    color: #000;
`

const SectionImage = styled.div<SectionImageProps>`
    width: 402.77px;
    height: 402.77px;
    background-image: url(${({ image }) => image});
    background-size: cover;
    background-position: center;
    margin: 0;
`

const SectionTitle = styled.div`
    text-align: left;
    margin-top: 50px;
    margin-left: 30px;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
`

const SectionText = styled.div`
    font-size: 1rem;
    margin-left: 30px;
    margin-right: 30px;
    color: #484848;
`

function Section({ sections }: SectionsProps) {
    return (
        <SectionsContainer>
            {sections.map((section, index) => (
                <SectionItem key={index} reverse={index % 2 === 0}>
                    <SectionImage image={section.image} />
                    <SectionContent>
                        <SectionTitle>{section.title}</SectionTitle>
                        <SectionText>{section.text}</SectionText>
                    </SectionContent>
                </SectionItem>
            ))}
        </SectionsContainer>
    )
}

export default Section
