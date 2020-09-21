import React, { createContext, useContext, useReducer } from 'react'

// preparing the DataLayer
export const DataLayerContext = createContext()

// provides the DataLayer, children is  <App />  jsx in index.js
export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}   
  </DataLayerContext.Provider>
)

// pull information from the Data Layer
export const useDataLayerValue = () => useContext(DataLayerContext)