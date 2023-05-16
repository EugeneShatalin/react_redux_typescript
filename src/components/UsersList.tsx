import React from 'react';
import {useSelector} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";

const UsersList: React.FC = () => {
    const {users, loading, error} = useTypedSelector(state => state.users)
    return (
        <div>

        </div>
    );
};

export default UsersList: React.FC;