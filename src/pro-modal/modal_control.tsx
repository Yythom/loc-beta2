// import store from "@/store";
import { Modal, Toast } from "@douyinfe/semi-ui";
import { memo } from "react";
// import { Provider } from "react-redux";
import BindKey, { _modalInterface } from ".";
import Widget from "./widget";

// 注册modal-2
export type bindKeyInterface = string

const ModalControl = memo(
    ({
        bindKey,
        onClick,
        children,
        style,
        className,
    }: {
        children: React.ReactNode;
        bindKey: string;
        onClick?: () => any;
        style?: React.CSSProperties;
        className?: string;
    }) => {
        function showModal() {
            const sign_modal = Widget(bindKey);
            if (sign_modal[bindKey]) setTimeout(() => {
                sign_modal[bindKey]();
            }, 100);
            else Toast.info("弹框未注册");
        }
        return (
            <div
                className={`modal-control ${className} hover`}
                style={style}
                onClick={async () => {
                    if (onClick) {
                        if (await onClick()) return;
                    }
                    showModal();
                }}
            >
                {children}
            </div>
        );
    }
);

export const ProModal = (content: JSX.Element, title?: string) => {
    const initProps: any = {
        icon: false,
    };

    const _modal = Modal.info({
        ...initProps,
        onCancel: () => BindKey.close(),
        title,
        // content: <Provider store={store}>{content}</Provider>,
        content: content,
        footer: null,
    });
    BindKey.open({ ..._modal, title });
};


export function openCustomModal({ title, content, footer }: {
    title: string | JSX.Element,
    content: string | JSX.Element,
    footer?: string | JSX.Element
}) {
    const _modal: _modalInterface = Modal.info({
        icon: false,
        onCancel: () => _modal.destroy(),
        title: title,
        content: content,
        footer: footer || null
    });
    return _modal;
}
export default ModalControl;
