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
    CardBoldText
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
    font-size: 1.5rem;
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
    max-width: 32.03rem;
    max-height: 65rem;
    width: 100%;
    height: 100%;
    margin-left: auto;
`;

export const StyledMainContainer = styled(({ ...props }) => (
    <div {...props} />
))`
margin-left: -28rem;
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
        margin-left: 6rem;
        justify-content: space-between;
        padding-bottom: 1rem;
        margin-top: 0;
        margin-bottom: 0;
    }
`;

export const StyledCard = styled(({ ...props }) => <Card {...props} />)``;

export const StyledCardPicContainer = styled(({ ...props }) => (
    <CardPicContainer {...props} />
))``;

export const StyledCardTextContainer = styled(({ ...props }) => (
    <CardTextContainer {...props} />
))``;

export const StyledCardHeading = styled((props) => <CardHeading {...props} />)`
    margin: 0.5rem 0 0 0;
    color: black;
`;

export const StyledCardDescription = styled((props) => (
    <CardDescription {...props} />
))`
    margin: 1rem 2.5rem 0 0;
    color: black;
`;

export const StyledCardBoldText = styled(({ ...props }) => (
    <CardBoldText {...props} />
))``;
