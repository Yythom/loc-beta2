import { Button, Modal, Notification } from "@douyinfe/semi-ui";
import { Fragment, useState } from "react";

function showNotic(type = 'success', opt = { content: ` ` }) {
	Notification[type](opt)
}
const ctro = []
export const closeModal = async (isFetch = false) => {
	if (isFetch) {
		await ctro[ctro.length - 1].close()
	} else {
		ctro[ctro.length - 1].destroy()
		ctro.splice(ctro.length - 1, 1)
	}
}
const ProModal = (Content, title, cb = function () { }, Footer = null,) => {
	const initProps = {
		icon: false,
	};
	const _modal = Modal.info({
		...initProps,
		onCancel: () => {
			ctro[ctro.length - 1].destroy()
			ctro.splice(ctro.length - 1, 1)
		},
		title,
		content: <Fragment>
			{Content}
			<div style={{ height: '2rem' }}></div>
		</Fragment>,
		footer: Footer ? () => {
			return Footer;
		} : null,
	});

	ctro.push((() => {
		const modalOpenItem = { ..._modal, }
		modalOpenItem.close = async () => {
			await cb()
			modalOpenItem.destroy()
		}
		return { ...modalOpenItem }
	})());
};

const ModalFooter = ({ onOk }) => {
	const [loading, setLoading] = useState(false)

	return <div className="modal-footer flex" style={{ justifyContent: 'flex-end', padding: '2rem 0 ' }}>
		<Button
			style={{ marginRight: '1rem' }}
			onClick={async () => await ctro[ctro.length - 1].destroy()}>
			cencel
		</Button>
		<Button
			loading={loading}
			style={{ background: loading && '#ccc' }}
			theme='solid'
			onClick={async () => {
				if (loading) return
				setLoading(true)
				await onOk();
				ctro[ctro.length - 1].close();
				ctro.splice(ctro.length - 1, 1)
				setLoading(false)
			}}>
			confirm
		</Button>
	</div>
}

export {
	showNotic,
	ProModal,
	ModalFooter
}