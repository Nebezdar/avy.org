import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import * as catalogActions from '../store/catalogSlice';
import * as downloadActions from '../store/downloadSlice';
import * as searchActions from '../store/searchSlice';

export const useAppDispatch = () => {
  const dispatch = useDispatch();

  return {
    ...bindActionCreators(
      {
        ...catalogActions,
        ...downloadActions,
        ...searchActions,
      },
      dispatch
    ),
    dispatch,
  };
}; 