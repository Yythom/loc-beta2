/* eslint-disable import/no-anonymous-default-export */

import { ConfirmProps } from "@douyinfe/semi-ui/lib/es/modal";
import logger from "../utils/js_utils/logger";
import { Modal } from '@douyinfe/semi-ui'
// 注册modal-1
export interface _modalInterface {
    destroy: () => void;
    update: (newConfig: ConfirmProps) => void;
    title?: string;
}
class BindKey {
    static _modal_arr: _modalInterface[] = [];

    static open(_modal: _modalInterface) {
        this._modal_arr.push(_modal);
        logger('open', this._modal_arr)
    }

    static close() {
        this._modal_arr.pop()?.destroy();
    }

    static clear() {
        Modal.destroyAll();
    }
}
export default BindKey;