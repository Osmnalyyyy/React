import { createContext, useContext, useReducer } from "react";
import { counterInitialState } from "./counter/Counter-initial-state";
import { counterReducer } from "./counter/Counter-reducer";

const StoreContext = createContext(); //Boş bir merkezi state oluşturuldu

export const useStore = () => useContext(StoreContext); // Componentlerde merkezi state'e erişimi kolaylaştırmak için kendi hook'umuzu yazdık

export const StoreProvider = ({ children }) => {
  const [counterState, dispatchCounter] = useReducer(
    //useRducer Hook'una reduce ve initial state parametre olarak verilir ...
    //useReducer fonksiyonu ise geriye getter ve setterları döner(counterState,dispatchCounter)
    counterReducer,
    counterInitialState
  );

  return (
    <StoreContext.Provider value={{ counterState, dispatchCounter }}>
      {children}
    </StoreContext.Provider>
  );
};
