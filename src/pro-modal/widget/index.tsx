import DetailcConsistentTrack from "@/pages/main/token_flow/a_detail/consistent";
import DetailTokenFlow from "@/pages/main/token_flow/a_detail/flow";
import { ProModal } from "../modal_control";
// 注册modal-3
function Widget(bindKey?: string): Record<string, any> {
    return {
        'token_flow_detail': () => ProModal(<DetailTokenFlow />,),
        'consistent_detail': () => ProModal(<DetailcConsistentTrack />,),
    };
}

export default Widget;
