import { useState, useEffect } from 'react';

let globalState = {};
let listeners = [];
let actions = {};
let middleware = {};

export const useStore = () => {
  const setState = useState(globalState)[1];

  const dispatch = async (action, payload) => {
    const middleWarePayload = await middleware[action](globalState, payload);
    console.log('middleware - ', action, middleWarePayload);
    const newState = actions[action](globalState, middleWarePayload);
    globalState = { ...globalState, ...newState };
    console.log('action - ', action, globalState);
    listeners.forEach(listener => {
      listener(globalState);
    });
  };

  useEffect(() => {
    listeners.push(setState);
    return () => {
      listeners = listeners.filter(li => li !== setState);
    };
  }, [setState]);

  return [globalState, dispatch];
};

export const initStore = (userActions, userMiddleware, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
  middleware = { ...middleware, ...userMiddleware };
};
