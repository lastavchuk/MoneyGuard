import { iconsSize } from "assests/iconSize/iconSize";

import { BsGithub } from "react-icons/bs";
import { FooterLink, FooterText, StyledFooter } from "./Footer.styled";

export default function Footer() {
    return (
        <StyledFooter>
            <FooterText>
                &copy; {new Date().getFullYear()} Developed by
                <FooterLink
                href="https://github.com/lastavchuk/MoneyGuard"
                target="_blank"
                rel="noopener noreferrer"
                title="Github"
                aria-label="Link to Github profile"
            >
                React Angels Group <BsGithub size={iconsSize.small} />
            </FooterLink>
            </FooterText>
            
        </StyledFooter>
    );
}

