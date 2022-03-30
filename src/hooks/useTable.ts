/* eslint-disable react-hooks/exhaustive-deps */
import { useLayoutEffect, } from "react";
import useRequest from "./useRequest";

function useTable<T, P = undefined>(
    promise: (data: any) => Promise<any>,
    option: {
        start_owner?: boolean,
        initParams: {},
    },
): {
    params: P | undefined;
    setParams: (key: string | P, v?: any) => void;
    tableData: T | undefined;
    fetch: () => Promise<void>;
    loading: boolean
} {
    const [
        ret,
        fetch,
        setParams,
        loading,
        params
    ] = useRequest<T, P>(promise, {
        initParams: option?.initParams,
        start_owner: option?.start_owner,
    })

    useLayoutEffect(() => {
        fetch()
    }, [])

    return {
        params,
        setParams,
        tableData: ret,
        fetch,
        loading
    }
}


export default useTable;