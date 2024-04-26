import Image from "next/image";
import Card from "~/collections/Card"; // Import the Card component

import {
    StyledTextContainer,
    StyledContainer,
    StyledGetStartedBtn,
    StyledTitle,
    StyledDescription,
    StyledCTAContainer,
    StyledImageContainer,
    StyledMainContainer,
    StyledBackgroundImageContainer,
    StyledContentContainer,
} from "./elements";

const cardProps = {
    image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
    title: "Agency procurement, outsourced.",
    description: "Start the process here",
    ctaText: "Start",
};

export const Selection = ({ image, title, description, ctaText, ...props }) => {
    return (
        <StyledContainer {...props}>
            <StyledTextContainer>
                <StyledTitle>{title}</StyledTitle>
                <StyledDescription>{description}</StyledDescription>
            </StyledTextContainer>
            <StyledMainContainer>
                <StyledBackgroundImageContainer width={image.width} height={image.height}>
                    <StyledContentContainer>

                    </StyledContentContainer>
                </StyledBackgroundImageContainer>
            </StyledMainContainer>
        </StyledContainer>
    );
};
