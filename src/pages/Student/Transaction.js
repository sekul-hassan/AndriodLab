import React, {Fragment, useEffect} from 'react';
import HeaderShared from "../../components/HeaderShared";
import TransactionList from "../../components/Student/Transaction/TransactionList";
import {useNavigation} from "@react-navigation/native";

function Transaction(props) {
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []);

    return (
       <Fragment>
           <HeaderShared name={"Transaction"} />
           <TransactionList />
       </Fragment>
    );
}

export default Transaction;
