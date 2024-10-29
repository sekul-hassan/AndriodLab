import React, {Fragment, useEffect} from 'react';
import HeaderShared from "../../components/HeaderShared";
import NotificationList from "../../components/Student/Notification/NotificationList";
import {useNavigation} from "@react-navigation/native";

function Notification(props) {
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []);

    return (
        <Fragment>
            <HeaderShared/>
            <NotificationList/>
        </Fragment>
    );
}

export default Notification;
