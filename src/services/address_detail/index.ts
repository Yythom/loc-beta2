import request from "../config";
import { HoldingInterface } from "./hold_interface";
import { TransactionInterface, TransactionParams } from "./transation_interface";

class AddressService {
    static getTransactions = async (data: TransactionParams) => {
        const res = await request<TransactionInterface>({
            url: `/address/transactions`,
            data: {
                ...data,
                page_size: 30,
                sort: {
                    'height': 'desc'
                }
            }
        })
        return res
    }

    static getHoldings = async (data: { address: string, }) => {
        const res = await request<HoldingInterface>({
            url: `/address/holding`,
            data
        })
        return res
    }
}
export default AddressService