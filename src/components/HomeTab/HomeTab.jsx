import { StyledHomeTab } from './HomeTab.styled';
import TransactionsList from 'components/TransactionsList/TransactionsList';
import { useSelector } from 'react-redux';
import { selectFinanceData } from 'redux/selectors';
import { getTransactionCategories } from 'services/api';

function HomeTab() {

    getTransactionCategories()

  const transactions = [
        {
          "id": "0875d8da-a81c-4853-8158-5d1b44f8c41e",
          "transactionDate": "2022-08-03",
          "type": "EXPENSE",
          "comment": "buy",
          "amount": 2500,
          "balanceAfter": 7300,
          "categoryId": "3caa7ba0-79c0-40b9-ae1f-de1af1f6e386",
          "userId": "72ff8fb1-0433-465c-b3b1-de7e307002c1"
        },
        {
          "id": "32eb0a4f-69f1-4a8b-85e7-3a5b82d5e76b",
          "transactionDate": "2022-05-20",
          "type": "INCOME",
          "comment": "purchase",
          "amount": 300,
          "balanceAfter": 6500,
          "categoryId": "c9d9e447-1b83-4238-8712-edc77b18b739",
          "userId": "7240e6e2-ae06-4215-bec0-4cd96d6b2e39"
        },
        {
          "id": "a881d7be-1c38-4b4e-a3a8-7e23b3c6c8e8",
          "transactionDate": "2022-12-02",
          "type": "EXPENSE",
          "comment": "shopping",
          "amount": 16,
          "balanceAfter": 8100,
          "categoryId": "bbdd58b8-e804-4ab9-bf4f-695da5ef64f4",
          "userId": "683a65d2-964f-43c8-81a7-5dbd29d17820"
        },
        {
          "id": "9f6f66b3-c7c3-4c8a-948d-92cf1e04bcb5",
          "transactionDate": "2022-11-12",
          "type": "EXPENSE",
          "comment": "groceries",
          "amount": 400,
          "balanceAfter": 6900,
          "categoryId": '76cc875a-3b43-4eae-8fdb-f76633821a34',
          "userId": "9b305dbf-90bb-46b2-85f2-8ac373ca1257"
        },
        {
          "id": "fd75184b-37a4-4c37-8ce1-2e7edac52b9d",
          "transactionDate": "2022-09-28",
          "type": "INCOME",
          "comment": "dining",
          "amount": 300,
          "balanceAfter": 6800,
          "categoryId": 'c143130f-7d1e-4011-90a4-54766d4e308e',
          "userId": "7b3a8191-6d84-4f28-b703-d7c60d1a32a5"
        },
        {
            "id": "fd75184b-37a4-4c37-8bh1-2e7edac52b9d",
            "transactionDate": "2020-11-30",
            "type": "INCOME",
            "comment": "dining",
            "amount": 600000,
            "balanceAfter": 6800,
            "categoryId": 'c9d9e447-1b83-4238-8712-edc77b18b739',
            "userId": "7b3a8191-6d84-4f28-b703-d7c60d1a32a5"
          },
          {
            "id": "fd75184b-37a4-4c37-8ckd1-2e7edac52b9d",
            "transactionDate": "2021-06-01",
            "type": "EXPENSE",
            "comment": "dining",
            "amount": 1200200,
            "balanceAfter": 6800,
            "categoryId": '3caa7ba0-79c0-40b9-ae1f-de1af1f6e386',
            "userId": "7b3a8191-6d84-4f28-b703-d7c60d1a32a5"
          }
      ]
    // const transactions = useSelector(selectFinanceData);

    return (
        <StyledHomeTab>
            <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Category</th>
                    <th>Comment</th>
                    <th>Sum</th>
                    <th></th>
                </tr>
            </thead>
            <TransactionsList transactions={transactions} />
            </table>
        </StyledHomeTab>
    );
}

export default HomeTab;
