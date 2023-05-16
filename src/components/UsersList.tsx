import React from 'react';
import {useSelector} from "react-redux";

const UsersList: React.FC = () => {
    const state = useSelector(state => state.users)
    return (
        <div>

        </div>
    );
};

export default UsersList: React.FC;