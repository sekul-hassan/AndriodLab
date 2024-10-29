import React, {Fragment} from 'react';
import HeaderShared from "../../components/HeaderShared";
import NotificationList from "../../components/Student/Notification/NotificationList";

function Notification(props) {
    return (
        <Fragment>
            <HeaderShared/>
            <NotificationList/>
        </Fragment>
    );
}

export default Notification;
