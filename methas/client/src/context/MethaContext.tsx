import { createContext } from "react";
import { ReactNode } from "react";

import useAuth from "../hooks/useAuth";
import useMetha from "../hooks/useMetha";


export interface IMethaContext {
    addMetha: (metha: {
        id?: string | undefined;
        category: string;
        title: string;
    }) => Promise<void>,
    completeMetha: (id: string) => Promise<void>,
    isUpdate: boolean,
    removeMetha: (id: string) => Promise<void>,
    uncompleteMetha: (id: string) => Promise<void>
}

type IUserContextProvider = {
    children: ReactNode
}

const MethaContext = createContext({} as IMethaContext);

function MethaProvider({ children }: IUserContextProvider) {

    const { addMetha, completeMetha, isUpdate, removeMetha, uncompleteMetha } = useMetha()

    return (
        <MethaContext.Provider value={{ addMetha, completeMetha, isUpdate, removeMetha, uncompleteMetha }} >
            {children}
        </MethaContext.Provider>
    );
}

export { MethaContext, MethaProvider };