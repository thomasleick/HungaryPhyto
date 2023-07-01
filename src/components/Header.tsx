import { Box, styled } from '@mui/material';
import logo from '../assets/HPTNBG.png';
import Menu from './Menu';
import useWindowSize from '../hooks/useWindowSize';

const Header = () => {
    const { width } = useWindowSize();
    return (
        <HeaderContainer width={width}>
            <img src={logo} alt="HungaryPhyto" />
            {width && width >= 500 ? <h1>HungaryPhyto</h1> : width && width >= 300 && <h1>H P T</h1>}
            <Menu />
        </HeaderContainer>
    );
};

interface HeaderContainerProps {
    width?: number;
}

const HeaderContainer = styled(Box)<HeaderContainerProps>`
    position: absolute;
    top: 0;
    width: 100dvw;
    height: 150px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #555;
    img {
        width: 130px;
        height: 130px;
    }
    * {
        margin: 10px;
    }
    h1 {
        color: white;
        font-family: 'Fasthand', cursive;
        font-size: ${props => props?.width && props.width >= 600 ? "80px" : "60px"};
    }
`;

export default Header;