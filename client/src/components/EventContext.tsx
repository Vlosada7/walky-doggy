
//creating a context store for multiple components access to one state data
//bring in createContext from react lib
import { createContext } from 'react';

//initiate context
const EventContext = createContext(null);

//export context 
export default EventContext;