/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeInfo, ColumnProps } from "@douyinfe/semi-ui/lib/es/table";
import React, { memo, MemoExoticComponent, useLayoutEffect } from "react";
import BuildTable from "@/pages/BuildTable/BuildTable";
import useRequest from "./useRequest";
useTable.initPage = 1;
function useTable<T, P = undefined>(
    promise: (data: any) => Promise<any>,
    option: {
        start_owner?: boolean,
        initParams: {},
        // callback?:()
    },
): {
    params: P | undefined;
    setParams: (key: P | keyof P, v?: any) => void;
    BuildTable: MemoExoticComponent<({ columns, onChange, hidePage }: {
        columns: ColumnProps<any>[];
        onChange?: any;
        hidePage?: boolean;
    }) => JSX.Element>;
    tableData: T | undefined;
    fetch: (_params?: P) => Promise<void>;
    loading: boolean,
    handle: {
        setSearch: (key: string | Record<string, any>, v?: any) => void,
        onTableChange: (e: ChangeInfo<any>) => any;
        initFetch: () => void;
    }
} {
    const [
        ret,
        fetch,
        setParams,
        loading,
        params
    ] = useRequest<T, P>(promise, {
        initParams: { page: useTable.initPage, ...option?.initParams },
        start_owner: option?.start_owner,
    })

    useLayoutEffect(() => {
        option?.start_owner && fetch();
    }, []);

    async function initFetch() {
        const initParams = { ...option?.initParams, page: useTable.initPage } as any
        setParams(initParams);
        return await fetch(initParams)
    }
    function setSearch(key: string | Record<string, any>, v?: any) {
        /** 自定义操作 */
        const _params: any = {
            ...params,
            page: useTable.initPage,
            search: {
                ...origin?.search,
            }
        }
        if (typeof key === 'object') {
            _params.search = { ...key }
        } else _params.search[key] = v
        setParams(_params);
    }

    // table云端排序
    function onTableChange(e: ChangeInfo<any>) {
        const { sorter } = e;
        if (sorter) {
            const { sortOrder, dataIndex } = sorter;
            const sortRet: any = {}
            sortRet[dataIndex] = sortOrder ? `${sortOrder}`?.replace('end', '') : '';
            setParams({
                ...params,
                page: useTable.initPage,
                sort: sortRet
            } as any)
            return sortOrder
        }
    };

    return {
        params,
        setParams,
        /**
         * 业务逻辑
         */
        BuildTable: memo(({ columns, onChange, hidePage }:
            { columns: ColumnProps<any>[], onChange?: any, hidePage?: boolean }) =>
            <BuildTable
                buildDataSource={(ret as any)?.list || []}
                loading={loading}
                columns={columns}
                setParams={setParams}
                ret={ret}
                onChange={(e: ChangeInfo<any>) => { onTableChange(e) }}
                hidePage={hidePage}
            />
        ),
        handle: {
            setSearch, //// table 自定义search
            onTableChange,
            initFetch,
        },
        // end

        tableData: ret,
        fetch,
        loading,
    }
}

export default useTable;