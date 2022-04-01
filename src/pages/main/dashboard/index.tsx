import './index.scss'
import Text from "@douyinfe/semi-ui/lib/es/typography/text";
import Table from "./table/Table";
import ProEchart from '@/components/echart/pro_echart';
const Dashboard = () => {
    return (
        <div className="overview">
            <ProEchart
                classname='test'
                option={{
                    x_option: {
                        name: 'X',
                        data: [1, 2, 3, 4, 5, 6, 7],
                    },
                    y_option: {
                        name: 'Y'
                    },
                    dataSource: [140, 232, 101, 264, 90, 340, 250],
                }}
            />
            <div className='content-head' style={{ marginBottom: '12px' }}>
                <div className='desc' style={{ width: '80%', wordBreak: 'break-all', lineHeight: '24px' }}><Text>Lookonchain is a web3 data analysis tool: we grab the data from Dex and list the valuable data. This page list the most profitable account in Uniswap V3. You can filter them in two dimension: time, number of swaps(filter bots). You can also enter a specific wallet address to check its transitory.</Text></div>
            </div>
            <Table />
        </div >
    );
}

export default Dashboard;



