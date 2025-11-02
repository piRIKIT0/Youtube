import {
    Container, MenuItem,
} from "./styles";
import notificationIcon from '../../assetes/sino.png'
import { ButtonIcon } from "../header/styles";
import { useNavigate } from "react-router-dom";

const itens= [ 
  { name: 'Inicio', link: '/' },
  { name: 'Bibilioteca', link: '/biblioteca' },
  { name: 'Inscrições', link: '/inscriçoes' },
]

interface IProps{
    openMenu: boolean;
}

function Menu({ openMenu }: IProps){
    const navigate = useNavigate();


    return (
        <Container openMenu={openMenu}>
            {itens.map((item) => (
                <MenuItem openMenu={openMenu} onClick={() => navigate (item.link)}>
                    <ButtonIcon alt="" src={notificationIcon} />
                    <span>{item.name}</span>
                </MenuItem>
            ))}
        </Container>
    )
}

export default Menu;