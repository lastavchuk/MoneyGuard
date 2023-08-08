import { CustomSelect } from 'components/CustomSelect/CustomSelect';
import { Button } from 'components/Button/Button';
import { Formik } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalAddTransaction } from 'redux/globalSlice';
import { selectCategories, selectModalData } from 'redux/selectors';
import {
    ButtonWrapper,
    InputWrapper,
    ExpenseSpan,
    IncomeSpan,
    MinusButton,
    ModalAddWrapper,
    ModalTransactionTitle,
    PlusButton,
    RadioWrapper,
    RadioWrapperChoose,
    RoundedButton,
    StyledLabelWrapper,
    StyledField,
    StyledForm,
} from './ModaAddlTransaction.styled';
import { useCategoriesType } from 'hooks/categoriesFilter';
import { modalTransactionsSchema } from 'services/validation/validationTransactions';
import { FormError } from 'components/FormError/FormError';
import { toast } from 'react-toastify';
import {
    createTransactionThunk,
    updTransactionThunk,
} from 'redux/finance/financeThunks';

let initialValues;
let textButton = 'ADD';

export const ModalAddTransaction = () => {
    const modalData = useSelector(selectModalData);

    const dispatch = useDispatch();

    const [selectedOption, setSelectedOption] = useState('Car');
    const [selectedType, setSelectedType] = useState(
        modalData?.type === 'INCOME' ? true : false
    );

    if (!!modalData) {
        textButton = 'SAVE';

        initialValues = {
            transactionDate: modalData.transactionDate,
            type: modalData.type,
            categoryId: modalData.categoryId,
            comment: modalData.comment,
            amount:
                modalData.amount < 0 ? modalData.amount * -1 : modalData.amount,
        };
    } else {
        initialValues = {
            transactionDate: new Date().toISOString().slice(0, 10),
            type: selectedType ? 'INCOME' : 'EXPENSE',
            categoryId: '',
            comment: '',
            amount: '',
        };
    }

    // useEffect(() => {
    //     dispatch(getTransactionCategoriesThunk());
    // }, [dispatch]);

    const allCategories = useSelector(selectCategories);
    const [expenseCategories, incomeCategories] =
        useCategoriesType(allCategories);

    const handleSubmit = (value, { resetForm }) => {
        const defCategoryId = 'c9d9e447-1b83-4238-8712-edc77b18b739';
        const newData = {
            ...value,
            type: selectedType ? 'INCOME' : 'EXPENSE',
            amount: !selectedType
                ? Number(value.amount) * -1
                : Number(value.amount),
            categoryId: !selectedType
                ? selectedOption?.id ?? defCategoryId
                : incomeCategories[0].id,
        };

        if (!!modalData) {
            newData.transactionId = modalData.id;
        }

        dispatch(
            !modalData
                ? createTransactionThunk(newData)
                : updTransactionThunk(newData)
        )
            .unwrap()
            .then(data =>
                toast.success(
                    `${
                        data.type.charAt(0) + data.type.slice(1).toLowerCase()
                    } transaction added to your list.`
                )
            )
            .catch(error =>
                toast.error('Something went wrong, please try again!')
            );
        dispatch(closeModalAddTransaction());
    };

    const handleChangeSelect = item => {
        setSelectedOption(item);
    };
    const selectOptionsData = expenseCategories.map(item => ({
        id: item.id,
        value: item.name,
        label: item.name,
    }));

    const changeTypeOfTransaction = () => {
        setSelectedType(prev => !prev);
    };
    return (
        <ModalAddWrapper>
            <ModalTransactionTitle>
                {!!modalData ? 'Edit' : 'Add'} transaction
            </ModalTransactionTitle>
            <Formik
                validationSchema={modalTransactionsSchema}
                onSubmit={handleSubmit}
                initialValues={initialValues}
            >
                <StyledForm>
                    <RadioWrapperChoose>
                        <IncomeSpan isSelected={selectedType}>
                            Income
                        </IncomeSpan>
                        <RadioWrapper onClick={changeTypeOfTransaction}>
                            <StyledLabelWrapper>
                                <RoundedButton type={selectedType.toString()}>
                                    {selectedType ? (
                                        <PlusButton />
                                    ) : (
                                        <MinusButton />
                                    )}
                                </RoundedButton>
                            </StyledLabelWrapper>
                        </RadioWrapper>
                        <ExpenseSpan isSelected={!selectedType}>
                            Expense
                        </ExpenseSpan>
                    </RadioWrapperChoose>
                    {!selectedType && (
                        <CustomSelect
                            options={selectOptionsData}
                            nameOfSelect="category"
                            onChange={handleChangeSelect}
                        />
                    )}
                    <InputWrapper>
                        <StyledField
                            type="number"
                            name="amount"
                            placeholder="0.00"
                            weight="600"
                            required
                            autoComplete="off"
                            autoFocus={true}
                        />
                        <StyledField
                            autoComplete="off"
                            type="date"
                            name="transactionDate"
                        />
                    </InputWrapper>
                    <StyledField
                        autoComplete="off"
                        type="text"
                        name="comment"
                        placeholder="Comment"
                    />
                    <ButtonWrapper>
                        <FormError name="amount" />
                        <Button text={textButton} type="submit" />
                        <Button
                            name="cancel"
                            text="CANCEL"
                            variant="secondary"
                            onClick={() => dispatch(closeModalAddTransaction())}
                        />
                    </ButtonWrapper>
                </StyledForm>
            </Formik>
        </ModalAddWrapper>
    );
};
