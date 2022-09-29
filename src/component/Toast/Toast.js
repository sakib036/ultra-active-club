import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Toast.css'

const Toast = () => {
    const showToastMessage = () => {
        toast.success('Activity Completed Success Notification !', {
            position: toast.POSITION.TOP_CENTER,
            className: 'toast-message'
        });
    };
    return (
        <div>
             <button className='btn-activity' onClick={showToastMessage}>Activity Completed</button>
             <ToastContainer />
        </div>
    );
};

export default Toast;