import React, {Fragment} from 'react';
import HeaderShared from "../../components/HeaderShared";
import TransactionList from "../../components/Student/Transaction/TransactionList";

function Transaction(props) {
    return (
       <Fragment>
           <HeaderShared name={"Transaction"} />
           <TransactionList />
       </Fragment>
    );
}

export default Transaction;
