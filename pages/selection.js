import { Selection } from "../sections";
import { theme } from "~/styles";


const selectionProps = {
    image: {src: '/img/background.png', alt: 'background-agency-selection', width: 1000, height: 610 },
    title: "Managed agency selection",
    description: "Strengthen your onboarding process",
    videoProps: {
        src: "/img/video.png",
        alt: "video",
        width: 260,
        height: 410,
    }, 
    cardSize: {
        small: 32.5,
        medium: 35,
        big: 37.5,
    },
    cardBackGroundColor: {
        light: theme.grayF8,
        medium: theme.grayF0,
        dark: theme.grayE2,
    },
    iconWidth: 160,
    iconHeight: 160,
    brief:{
        src: "/img/brief-ts.png",
        alt: "briefing",
    },
    search: {
        src: "/img/search-ts.png",
        alt: "search",
    },
    pitch: {
        src: "/img/pitch-ts.png",
        alt: "pitch",
    },
    contentFirstCard: {
        title: "Brief",
        bold: " brief writing or simple guidance ",
        start: "Complete",
        end: "on what to include, we`ve got you covered.",
    },
    contentSecondCard: {
        title: "Search",
        bold: " criteria matching ",
        start: "In-depth agency search covering,",
        end: "door knocking and due-dilligence vetting",
    },
    contentThirdCard: {
        title: "Pitch",
        bold: " pitch management, ",
        start: "Comprehensive",
        end: "including comms, diary management and pitch hosting",
    },
};

export default function Home() {
    return (
        <>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <div>
                <Selection {...selectionProps} />
            </div>
        </>
    );
}
