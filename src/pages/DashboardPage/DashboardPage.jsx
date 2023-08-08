import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Header from 'components/Header/Header';
import { Modal } from 'components/Modal/Modal';
import { ModalAddTransaction } from 'components/ModaAddlTransaction/ModaAddlTransaction';
import {
  selectIsModalAddTransactionOpen,
  selectIsModalEditTransactionOpen,
} from 'redux/selectors';
import {
  openModalAddTransaction,
  closeModalAddTransaction,
} from 'redux/globalSlice';
import { StyledSharedLayout } from 'components/SharedLayout/SharedLayout.styled';
import  AsideBar from 'components/SideBar/SideBalance/SideBalance';
import  EditTransactions  from 'components/TransactionsList/TransactionsList';
import { StyledMain } from './DashboardPage.styled';
import  BigLoader  from 'components/Loader/Loader';
import {
  desktopLoaderStyles,
  loaderStyles,
} from 'components/Loader/Loader.styled';

const DashboardPage = () => {
  const isModalAddOpen = useSelector(selectIsModalAddTransactionOpen);
  const isModalEditOpen = useSelector(selectIsModalEditTransactionOpen);
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <>
      <Header />
      <StyledSharedLayout>
        <AsideBar />
        <StyledMain>
          <Suspense
            fallback={
              <BigLoader
                styles={isDesktop ? desktopLoaderStyles : loaderStyles}
              />
            }
          >
            <Outlet />
          </Suspense>
          {isModalAddOpen && (
            <Modal closeReducer={openModalAddTransaction}>
              <ModalAddTransaction />
            </Modal>
          )}
          {isModalEditOpen && (
            <Modal closeReducer={closeModalAddTransaction}>
              <EditTransactions />
            </Modal>
          )}
        </StyledMain>
      </StyledSharedLayout>
    </>
  );
};

export default DashboardPage;
