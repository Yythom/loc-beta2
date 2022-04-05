import { formatUrl } from "@/utils/js_utils/format";
import { memo } from "react";
import TableIn from "./table_in";
import TableOut from "./table_out";

const DetailTokenFlow = memo(() => {
    const params: any = formatUrl();

    return <div>
        Token Flow {params?.type}
        {params?.type === 'in' ? <TableIn /> : <TableOut />}
    </div>
})

export default DetailTokenFlow;