import { Input } from "@douyinfe/semi-ui/lib/es/input";
import { Fragment, memo, useState } from "react";
import { IconChevronDown, IconSearch } from "@douyinfe/semi-icons";
import Text from "@douyinfe/semi-ui/lib/es/typography/text";

const TrandeSearch = memo(({ search, setSearch }: any) => {

    return (
        <div>
            {/* className="fb" style={{ flexWrap: 'wrap' }} */}
            <div className="search_wrap">
                <div className='search flex'>
                    <Text style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px', width: '110px' }}>Invest</Text>
                    <Input
                        value={search?.total_invest_start}
                        autofocus
                        placeholder='Total invest start' style={{ width: 260, }}
                        onChange={(e) => {
                            setSearch({
                                ...search, total_invest_start: e
                            })
                        }} suffix={<IconSearch />} showClear
                    />
                    <Text style={{ fontWeight: 'bold', fontSize: '20px', margin: '0 10px' }}>-</Text>
                    <Input
                        value={search?.total_invest_end}
                        autofocus
                        placeholder='Total invest end' style={{ width: 260, }}
                        onChange={(e) => {
                            setSearch({
                                ...search, total_invest_end: e
                            })
                        }} suffix={<IconSearch />} showClear
                    />
                </div>

                {/*  */}
                <div className='search flex'>
                    <Text style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px', width: '110px' }}>Profit</Text>
                    <Input
                        value={search?.total_profit_start}
                        autofocus
                        placeholder='Total profit start' style={{ width: 260, }}
                        onChange={(e) => {
                            setSearch({
                                ...search, total_profit_start: e
                            })

                        }} suffix={<IconSearch />} showClear
                    />
                    <Text style={{ fontWeight: 'bold', fontSize: '20px', margin: '0 10px' }}>-</Text>
                    <Input
                        value={search?.total_profit_end}
                        autofocus
                        placeholder='Total profit end' style={{ width: 260, }}
                        onChange={(e) => {
                            setSearch({
                                ...search, total_profit_end: e
                            })
                        }} suffix={<IconSearch />} showClear
                    />
                </div>

                {/*  */}
                <div className='search flex'>
                    <Text style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px', width: '110px' }}>Profit Rate</Text>
                    <Input
                        value={search?.total_profit_rate_start}
                        autofocus
                        placeholder='Total profit rate start' style={{ width: 260, }}
                        onChange={(e) => {
                            setSearch({
                                ...search, total_profit_rate_start: e
                            })

                        }} suffix={<IconSearch />} showClear
                    />
                    <Text style={{ fontWeight: 'bold', fontSize: '20px', margin: '0 10px' }}>-</Text>
                    <Input
                        value={search?.total_profit_rate_end}
                        autofocus
                        placeholder='Total profit rate end' style={{ width: 260, }}
                        onChange={(e) => {
                            setSearch({
                                ...search, total_profit_rate_end: e
                            })
                        }} suffix={<IconSearch />} showClear
                    />
                </div>
            </div>
        </div>
    )
})

export default TrandeSearch