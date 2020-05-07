import { useState, useEffect } from 'react';

let globalState = {};
let listeners = [];
let actions = {};
let middleware = {};

export const useStore = () => {
  const setState = useState(globalState)[1];

  const dispatch = async (action, payload) => {
    console.log('before Middleware', action, payload);
    const newPayload = await middleware[action](globalState, payload);
    console.log('before Store', action, newPayload);
    const newState = actions[action](globalState, newPayload);
    globalState = { ...globalState, ...newState };
    console.log('after Store', action, globalState);
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
