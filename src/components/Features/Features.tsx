import {
    FeatureDescription,
    FeatureTitle,
    FeatureIcon,
    FeatureItem,
    FeaturesContainer,
} from "./FeaturesStyled"
import { ReactNode } from "react"

interface Feature {
    icon: ReactNode
    title: string
    description: string
}

interface FeaturesProps {
    features: Feature[]
}

function Features({ features }: FeaturesProps) {
    return (
        <FeaturesContainer>
            {features.map((feature, index) => (
                <FeatureItem key={index}>
                    <FeatureIcon>{feature.icon}</FeatureIcon>
                    <FeatureTitle>{feature.title}</FeatureTitle>
                    <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureItem>
            ))}
        </FeaturesContainer>
    )
}

export default Features
