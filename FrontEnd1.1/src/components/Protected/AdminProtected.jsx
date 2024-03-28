import React, { useEffect, useState } from 'react';
import NavBarDashboard from '../Dashboard/NavBarDashboard';
import '../ModifyData/css/ModifyData.css'

const AdminProtected = ({ Authorized, NonAuthorized }) => {
    const [isAuthorized, setIsAuthorized] = useState(null);
    const privilege = localStorage.getItem('privilage');

    useEffect(() => {
        if (privilege === `"Admin"`) {
            setIsAuthorized(true);
        } else {
            setIsAuthorized(false);
        }
    }, []);

    if(isAuthorized === null){
        return <div>Loading...</div>;
    }else if (isAuthorized) {
        return (
        <div className='ModifyData'>
            <NavBarDashboard />
            <Authorized />
        </div>
        );
    } else if(!isAuthorized){
        return (
            <div className='ModifyData'>
                <NavBarDashboard />
                <NonAuthorized />
            </div>
            );
    }
}

export default AdminProtected;