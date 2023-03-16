import { createContext } from "react";
import { ReactNode } from "react";
import useMetha from "../hooks/useMetha";

export interface IMethaContext {
    doneMetha: (id: string) => Promise<void>,
    notDoneMetha: (id: string) => Promise<void>,
    deleteMetha: (id: string) => Promise<void>,
    saveMetha: (metha: {
        id: string | undefined;
        title: string;
        category: string;
    }) => Promise<void>,
    allMetha: (metha: {
        id: string | undefined;
    }) => Promise<any>,
    update: boolean
}

type IMethaProvider = {
    children?: ReactNode
}


const MethaContext = createContext({} as IMethaContext)

function MethaProvider({ children }: IMethaProvider) {
    const { doneMetha, deleteMetha, saveMetha, notDoneMetha, update, allMetha } = useMetha()
    return (
        <MethaContext.Provider value={{ doneMetha, notDoneMetha, deleteMetha, saveMetha, allMetha, update }}>
            {children}
        </MethaContext.Provider>
    )
}

export { MethaContext, MethaProvider }