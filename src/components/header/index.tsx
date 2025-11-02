import { 
    ButtonContainer, 
    ButtonIcon, 
    Container, 
    LogoContainer, 
    SearchContainer, 
    SearchInputContainer, 
    SearchInput, 
    SearchButton, 
    HeaderButton,

} from "./styles";
import HamburguerIcon from '../../assetes/hamburguer.png';
import Logo from '../../assetes/YouTube-Logo.png';
import SearchIcon from '../../assetes/search.png';
import MicroIcon from '../../assetes/microfone-gravador.png';
import VideoIcon from '../../assetes/video.png';
import NotificationIcon from '../../assetes/sino.png';
import PerfilPhoto from '../../assetes/piRIKITO.jpg';

interface IProps{
    openMenu: boolean,
    setOpenMenu: (openMenu: boolean) => void
}

function Header({ openMenu, setOpenMenu }:IProps) {
    return (
        <Container>
            <LogoContainer>
                <ButtonContainer onClick={() => setOpenMenu(!openMenu)} margin= '0 10px 0 0 '>
                <ButtonIcon alt="" src={HamburguerIcon} />
                </ButtonContainer>
                <img 
                style={{cursor:'pointer', width:'100px' }}
                alt=""
                src={ Logo }
                />
            </LogoContainer>

            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput placeholder="Pesquisa"/>
                </SearchInputContainer>
                    <SearchButton>
                        <ButtonIcon alt="" src= { SearchIcon } />
                    </SearchButton>
                    <ButtonContainer margin= '0 0 0 10px'>
                        <ButtonIcon alt="" src= { MicroIcon }/>
                    </ButtonContainer>
            </SearchContainer>

            <HeaderButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src= { VideoIcon } />
                </ButtonContainer>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src= { NotificationIcon } />
                </ButtonContainer>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src= { PerfilPhoto } />
                </ButtonContainer>
            </HeaderButton>   
                 
        </Container>
    )
}

export default Header;