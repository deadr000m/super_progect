import React from 'react';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { selectErrorMessage, clearError } from '../../redux/slices/errorSlice';

function Error() {
  const errorMeassge = useSelector(selectErrorMessage);
  const dispatch = useDispatch();
  useEffect(() => {
    if (errorMeassge) {
      toast.info(errorMeassge);
      dispatch(clearError());
    }
  }, [errorMeassge, dispatch]);
  return <ToastContainer position="top-right" autoClose={2000} />;
}

export default Error;
