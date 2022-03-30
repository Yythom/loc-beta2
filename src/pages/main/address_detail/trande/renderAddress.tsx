import Text from "@douyinfe/semi-ui/lib/es/typography/text"

const renderAddress = (record: any, tokenMap: any, address: string, useaddress: string) => {
    const text = address
    const isCurrentAddress = address === useaddress
    const tokenLogo = tokenMap && tokenMap[text]?.logo_url
    const tokenName = tokenMap && tokenMap[text]?.name
    const keys = tokenMap[text] && Object.keys(tokenMap[text]).filter(e => e.indexOf('token') !== -1)
    if (!tokenMap[text]) return 'Unknown'
    if (tokenMap[text] && keys && keys[0]) {
        return (
            <div className='flex' style={{ cursor: 'pointer' }} onClick={() => window.open(`https://eth.tokenview.com/en/address/${text}`)}>
                {
                    isCurrentAddress ? <Text className="font-bold" style={{ color: ' var(--semi-color-primary-light-default)' }}>Current Address</Text> :
                        keys.map((e: any, i: number) => {
                            const token = tokenMap[text][e]
                            const { logo_url, name } = token
                            return (
                                <div key={name} className='flex'>
                                    {i % 2 === 1 && '/'}
                                    <img src={logo_url} alt="" style={{ width: 20, height: 20, borderRadius: '50%', marginRight: '6px' }} />
                                    {name}
                                </div>
                            )
                        })
                }
            </div>
        )
    }
    return <div className='flex' style={{ cursor: 'pointer' }} onClick={() => window.open(`https://eth.tokenview.com/en/address/${text}`)}>
        {isCurrentAddress ? <Text className="font-bold" style={{ color: ' var(--semi-color-primary-light-default)' }}>Current Address</Text>
            : <div className='flex'>
                <img src={tokenLogo} alt="" style={{ width: 20, height: 20, borderRadius: '50%', marginRight: '6px' }} />
                {tokenName}
            </div>}
    </div>;
}
export default renderAddress