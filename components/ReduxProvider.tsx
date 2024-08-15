"use client"
import React from "react";
import { store } from "@/redux";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

export const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
};