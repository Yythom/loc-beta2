import Icon from '@/global-component/icon';
import { Input } from '@douyinfe/semi-ui';
import { CSSProperties, Fragment, memo, ReactNode, useState } from 'react';
const EditInput = memo(({ defaultValue, children, style, onOK, permission_id }: {
	defaultValue: string | number,
	children: ReactNode,
	style?: CSSProperties,
	permission_id?: number
	onOK?: (value: string | number) => void | Promise<any>
}) => {
	const [edit, setEdit] = useState(false);
	const [v, setV] = useState(defaultValue);

	return <div className='EditInput' style={{ margin: '0.4rem 0' }}>
		{
			edit ?
				<Fragment>
					<div className="flex">
						<Input
							value={v}
							style={{ ...style, border: 'none' }}
							onChange={(e) => { setV(e) }}
						/>
						<div className='flex'>
							<div
								onClick={async () => {
									setEdit(false);
									onOK && await onOK(v)
								}}
							>
								<Icon icon="icondanxuan" color='green' />
							</div>
							<div
								onClick={async () => { setEdit(false); }}
							>
								<Icon icon="iconguanbi" color='red' />
							</div>
						</div>
					</div>
				</Fragment>

				: <Fragment>
					<div className="flex">
						{children}
						<div onClick={() => setEdit(true)}>
							<Icon
								icon="icon-edit"
							/>
						</div>
					</div>
				</Fragment>
		}
	</div>
})

export default EditInput;