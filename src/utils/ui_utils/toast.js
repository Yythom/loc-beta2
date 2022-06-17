import { Button, Notification, } from "@douyinfe/semi-ui";
import { useState } from "react";
import ReactDOM from 'react-dom'
import CoutomModal from "./Modal";
// http://reactcommunity.org/react-modal/styles/transitions/
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
	const doc = window.document //或者可以指定index.html里的元素,参照官方文档
	const elem = doc.createElement('div')
	ReactDOM.render(
		<CoutomModal elem={elem}>
			<div className="modal-content">
				<div className="title">{title}</div>
				{Content}
			</div>
		</CoutomModal>,
		elem
	)
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