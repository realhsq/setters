import { useState, Dispatch, SetStateAction } from 'react';

function useStateWithLog<T>(initialState: T): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState(initialState);

  const setStateWithLog: Dispatch<SetStateAction<T>> = (newState: any) => {
    const prevState = typeof state === 'function' ? state() : state;
    setState(newState);

    const updatedState = typeof newState === 'function' ? newState(prevState) : newState;
    console.log('Updated State:', updatedState);
  };

  return [state, setStateWithLog];
}

export default useStateWithLog;
