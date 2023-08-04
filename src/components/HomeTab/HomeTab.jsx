import { StyledHomeTab } from "./HomeTab.styled"
import TransactionsList from "components/TransactionsList/TransactionsList";

//finance.data

function HomeTab() {
  return (
    <StyledHomeTab>
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
        <TransactionsList/>
    </StyledHomeTab>
  )
}

export default HomeTab