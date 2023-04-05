import { createGlobalState } from 'react-hooks-global-state';
 const {setGlobalState , useGlobalState} = createGlobalState({
 sLocation : 'newbook',
 });
 export {setGlobalState , useGlobalState};