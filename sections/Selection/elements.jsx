import styled from "styled-components";
import { Card } from "~/collections";

import {
    Button,
    SectionContainer,
    SectionBigHeading,
    SectionSubheading,
    BackgroundImageContainer,
    ContentContainer,
    VideoContainer,
    CardContainer,
    CardPicContainer,
    CardTextContainer,
    CardHeading,
    CardDescription,
    CardBoldText,
} from "~/components";

export const StyledContainer = styled(({ height, ...props }) => (
    <SectionContainer {...props} />
))`
    align-items: center;
    flex-direction: column;
`;

export const StyledGetStartedBtn = styled((props) => (
    <Button {...props} variant="contained" color="main" />
))`
    margin-top: 4.375rem;
    padding-top: 0;
    padding-bottom: 0;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
    margin: 0;
`;

export const StyledDescription = styled((props) => (
    <SectionSubheading {...props} />
))`
    margin: 0 0 0;
    font-size: 1.48rem;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
    color: black;
    width: 100%;
    margin: 5rem;
    font-family: sans-serif;
    text-align: center;
`;

export const StyledCTAContainer = styled(({ ...props }) => <div {...props} />)`
    display: flex;
`;

export const StyledImageContainer = styled(({ ...props }) => (
    <div {...props} />
))`
    max-width: 32rem;
    max-height: 65rem;
    width: 100%;
    height: 100%;
    margin-left: auto;
`;

export const StyledMainContainer = styled(({ ...props }) => <div {...props} />)`
    @media only screen and (min-width: 1024px) {
        margin-left: -30rem;
    }
`;

export const StyledBackgroundImageContainer = styled(({ ...props }) => (
    <BackgroundImageContainer {...props} />
))`
    background-position: 15% 0%;

    @media only screen and (min-width: 768px) {
        background-position: 25% 0%;
        margin: 2rem 0 3rem 0;
    }
    @media only screen and (min-width: 1024px) {
        background-position: 80% 0;
        margin: 2rem 0 3rem 4rem;
    }
`;

export const StyledContentContainer = styled(({ ...props }) => (
    <ContentContainer {...props} />
))`
    @media only screen and (min-width: 1024px) {
        flex-direction: row;
        margin-left: 12rem;
    }
`;

export const StyledSectionContainer = styled(({ ...props }) => (
    <SectionContainer {...props} />
))`
    width: 25rem;
    margin: auto;
`;

export const StyledVideoContainer = styled(({ ...props }) => (
    <VideoContainer {...props} />
))`
    margin-top: -3rem;
`;

export const StyledCardContainer = styled(({ ...props }) => (
    <CardContainer {...props} />
))`
    @media only screen and (min-width: 1024px) {
        margin-left: 4.5rem;
        justify-content: space-between;
        padding-bottom: 1rem;
        margin-top: 0;
        margin-bottom: 0;
    }
`;

export const StyledCard = styled(({ ...props }) => <Card {...props} />)`
margin-top: -0.6rem;
margin-left: 0.2rem;
`;

export const StyledCardPicContainer = styled(({ ...props }) => (
    <CardPicContainer {...props} />
))`
margin-top: 2.4rem;
`;

export const StyledCardTextContainer = styled(({ ...props }) => (
    <CardTextContainer {...props} />
))``;

export const StyledCardHeading = styled((props) => <CardHeading {...props} />)`
    margin: 0.5rem 0 0 0;
    font-size: 1.5rem;
`;

export const StyledCardDescription = styled((props) => (
    <CardDescription {...props} />
))`
    margin: 0.4rem 2.5rem 0 0;
    font-size: 1.2rem;
    line-height: 1.48;
    color: black;
`;

export const StyledCardBoldText = styled(({ ...props }) => (
    <CardBoldText {...props} />
))``;
