import styled from "styled-components";

type FooterPropsType = {
  theme: string;
};

const Footer = styled.div<FooterPropsType>`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1rem;
    background-color: ${(props) => (props.theme === "basic" ? "skyblue" : "yellow")};
    text-align: center;
`;

export default Footer;
