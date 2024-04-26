import Image from "next/image";
import Link from "next/link";

import {
    StyledTextContainer,
    StyledContainer,
    StyledGetStartedBtn,
    StyledTitle,
    StyledDescription,
    StyledCTAContainer,
    StyledImageContainer,
} from "./elements";

export const Card = ({ image, title, description, ctaText, ...props }) => {
    return (
        <div>
        <h2>{title}</h2>
        <p>{description}</p>
        {/* You can include other JSX elements here */}
    </div>
    );
};
