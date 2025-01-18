import styled from "styled-components"

const FeaturesContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 50px 20px;
    background-color: #ffffff;
`

const FeatureItem = styled.div`
    text-align: center;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const FeatureIcon = styled.div`
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
`

const FeatureTitle = styled.h2`
    margin: 0;
    font-size: 1rem;
    color: rgb(40, 40, 40);
`

const FeatureDescription = styled.p`
    font-size: 0.7rem;
    color: #404040;
`

export { FeatureDescription, FeatureTitle, FeatureIcon, FeatureItem, FeaturesContainer }