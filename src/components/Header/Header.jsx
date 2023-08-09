import { StyledHeader } from './Header.styled';
import { IoExitOutline } from 'react-icons/io5';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { selectIsModalLogoutOpen, selectUserData } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { closeModalLogout, openModalLogout } from 'redux/globalSlice';
import { Modal } from 'components/Modal/Modal';
import { ModalLogout } from 'components/Modal/ModalLogout';
// import logo from "../../assests/images/symbol-defs.svg#icon-logo_MoneyGuard";

function Header() {
    const isModalOpen = useSelector(selectIsModalLogoutOpen);
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const userData = useSelector(selectUserData);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(openModalLogout());
    };

    return (
        <>
            <StyledHeader>
                <div>
                    {isMobile ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="none"
                        >
                            <path
                                fill="#FFC727"
                                fillRule="evenodd"
                                d="M12.516 2.352c-1.212-.303-2.423-.909-3.331-1.817-.909.908-2.12 1.514-3.332 1.817.303 2.725 1.212 4.542 3.332 6.057 2.12-1.515 3.33-3.332 3.33-6.057Z"
                                clipRule="evenodd"
                            />
                            <path
                                fill="#FBFBFB"
                                fillRule="evenodd"
                                d="m11.304 13.627-8.48-9.993v4.845l6.663 7.571 1.817-2.423ZM12.213 12.719l3.634-4.24V3.937l-5.754 6.662 2.12 2.12ZM12.516 14.233v2.726l3.33-3.937v-2.725l-3.33 3.936ZM6.156 14.233l-3.331-3.936v2.725l3.331 3.937v-2.726Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="23"
                            height="22"
                            fill="none"
                        >
                            <g
                                fillRule="evenodd"
                                clipPath="url(#a)"
                                clipRule="evenodd"
                            >
                                <path
                                    fill="#FFB627"
                                    d="M17.069 3.089c-1.664-.398-3.327-1.194-4.575-2.387-1.247 1.193-2.91 1.989-4.574 2.387.416 3.58 1.664 5.966 4.574 7.955 2.911-1.989 4.575-4.376 4.575-7.955Z"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                )}
                <p>Money Guard</p>
            </div>
            <span>{userData?.username}</span>
            <button onClick={handleLogout}>
                <IoExitOutline
                    style={
                        isMobile
                            ? {
                                  width: 18,
                                  height: 18,
                                  verticalAlign: 'sub',
                                  transform: 'scaleY(1.4)',
                              }
                            : {
                                  width: 18,
                                  height: 18,
                                  verticalAlign: 'sub',
                                  marginRight: '8px',
                                  transform: 'scaleY(1.4)',
                              }
                    }
                />
                {isMobile ? '' : 'Exit'}
            </button>
            <span className='animation'></span>
        </StyledHeader>
    );
}

export default Header;
