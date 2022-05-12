import { formatUrl } from "@/utils/js_utils/format";
import { memo } from "react";
import TableIn from "./table_in";
import TableOut from "./table_out";

const DetailcConsistentTrack = memo(() => {
    const params: any = formatUrl();
    console.log(params);

    return <div>
        Token Flow {params?.type}
        {params?.type === 'in' ? <TableIn /> : <TableOut />}
    </div>
})

export default DetailcConsistentTrack;