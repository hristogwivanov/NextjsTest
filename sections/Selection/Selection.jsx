import Image from "next/image";
import { theme } from "~/styles";

import {
    StyledTextContainer,
    StyledContainer,
    StyledTitle,
    StyledDescription,
    StyledMainContainer,
    StyledBackgroundImageContainer,
    StyledContentContainer,
    StyledSectionContainer,
    StyledVideoContainer,
    StyledCardContainer,
    StyledCard,
    StyledCardPicContainer,
    StyledCardTextContainer,
    StyledCardHeading,
    StyledCardDescription,
    StyledCardBoldText,
} from "./elements";

const videoProps = {
    src: "/img/video.png",
    alt: "video",
    width: 250,
    height: 398,
};

const cardProps = {
    title: "Agency procurement, outsourced.",
    description: "Start the process here",
    ctaText: "Start",
};

const cardSize = {
    small: 32.5,
    medium: 35,
    big: 37.5,
};

const cardBackGroundColor = {
    light: theme.grayF8,
    medium: theme.grayF0,
    dark: theme.grayE2,
};

const iconWidth = 160;
const iconHeight = 160;

const brief = {
    src: "/img/brief-ts.png",
    alt: "briefing",
};

const search = {
    src: "/img/search-ts.png",
    alt: "search",
};

const pitch = {
    src: "/img/pitch-ts.png",
    alt: "pitch",
};

const contentFirstCard = {
    title: "Brief",
    bold: " brief writing or simple guidance ",
    start: "Complete",
    end: "on what to include, we`ve got you covered.",
};

const contentSecondCard = {
    title: "Search",
    bold: " criteria matching ",
    start: "In-depth agency search covering,",
    end: "door knocking and due-dilligence vetting",
};

const contentThirdCard = {
    title: "Pitch",
    bold: " pitch management, ",
    start: "Comprehensive",
    end: "including comms, diary management and pitch hosting",
};

export const Selection = ({ image, title, description, ctaText, ...props }) => {
    return (
        <StyledContainer {...props}>
            <StyledTextContainer>
                <StyledTitle>{title}</StyledTitle>
                <StyledDescription>{description}</StyledDescription>
            </StyledTextContainer>
            <StyledMainContainer>
                <StyledBackgroundImageContainer
                    width={image.width}
                    height={image.height}
                >
                    <StyledContentContainer>
                        <StyledSectionContainer>
                            <StyledVideoContainer>
                                <Image
                                    layout="responsive"
                                    src={videoProps.src}
                                    alt={videoProps.alt}
                                    width={videoProps.width}
                                    height={videoProps.height}
                                />
                            </StyledVideoContainer>
                        </StyledSectionContainer>
                        <StyledCardContainer>
                            <StyledCard
                                size={cardSize.small}
                                bgColor={cardBackGroundColor.light}
                            >
                                <StyledCardPicContainer>
                                    <Image
                                        src={brief.src}
                                        alt={brief.alt}
                                        width={iconWidth}
                                        height={iconHeight}
                                    />
                                </StyledCardPicContainer>
                                <StyledCardTextContainer>
                                    <StyledCardHeading>
                                        {contentFirstCard.title}
                                    </StyledCardHeading>
                                    <StyledCardDescription>
                                        {contentFirstCard.start}
                                        <StyledCardBoldText>
                                            {contentFirstCard.bold}
                                        </StyledCardBoldText>
                                        {contentFirstCard.end}
                                    </StyledCardDescription>
                                </StyledCardTextContainer>
                            </StyledCard>
                            <StyledCard
                                size={cardSize.medium}
                                bgColor={cardBackGroundColor.medium}
                            >
                                <StyledCardPicContainer>
                                    <Image
                                        src={search.src}
                                        alt={search.alt}
                                        width={iconWidth}
                                        height={iconHeight}
                                    />
                                </StyledCardPicContainer>
                                <StyledCardTextContainer>
                                    <StyledCardHeading>
                                        {contentSecondCard.title}
                                    </StyledCardHeading>
                                    <StyledCardDescription>
                                        {contentSecondCard.start}
                                        <StyledCardBoldText>
                                            {contentSecondCard.bold}
                                        </StyledCardBoldText>
                                        {contentSecondCard.end}
                                    </StyledCardDescription>
                                </StyledCardTextContainer>
                            </StyledCard>
                            <StyledCard
                                size={cardSize.big}
                                bgColor={cardBackGroundColor.dark}
                            >
                                <StyledCardPicContainer>
                                    <Image
                                        src={pitch.src}
                                        alt={pitch.alt}
                                        width={iconWidth}
                                        height={iconHeight}
                                    />
                                </StyledCardPicContainer>
                                <StyledCardTextContainer>
                                    <StyledCardHeading>
                                        {contentThirdCard.title}
                                    </StyledCardHeading>
                                    <StyledCardDescription>
                                        {contentThirdCard.start}
                                        <StyledCardBoldText>
                                            {contentThirdCard.bold}
                                        </StyledCardBoldText>
                                        {contentThirdCard.end}
                                    </StyledCardDescription>
                                </StyledCardTextContainer>
                            </StyledCard>
                        </StyledCardContainer>
                    </StyledContentContainer>
                </StyledBackgroundImageContainer>
            </StyledMainContainer>
        </StyledContainer>
    );
};
