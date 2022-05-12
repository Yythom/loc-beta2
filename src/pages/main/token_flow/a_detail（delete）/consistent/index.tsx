import { formatUrl } from "@/utils/js_utils/format";
import { memo } from "react";
import TableIn from "./table_in";
import TableOut from "./table_out";

const DetailDexTrack = memo(() => {
    const params: any = formatUrl();

    return <div  >
        Consistent {params?.type}
        {params?.type === 'in' ? <TableIn /> : <TableOut />}
    </div>
})

export default DetailDexTrack;