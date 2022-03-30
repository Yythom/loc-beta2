// const logo = require('../image/logo/Tbank.png').default
import logo from '../image/logo/logo.jpg'

import dashboard from '../image/left-icon/dark/dashboard.svg'
import exchange from '../image/left-icon/dark/exchange-fill.svg'
import pool from '../image/left-icon/dark/pool.svg'
import send from '../image/left-icon/dark/send.svg'
import bank from '../image/left-icon/dark/Bank.svg'
import wattle from '../image/left-icon/dark/personal.svg'
import ranking from '../image/left-icon/dark/ranking.svg'

import dashboard_light from '../image/left-icon/light/dashboard.svg'
import exchange_light from '../image/left-icon/light/exchange-fill.svg'
import pool_light from '../image/left-icon/light/pool.svg'
import send_light from '../image/left-icon/light/send.svg'
import bank_light from '../image/left-icon/light/Bank.svg'
import ranking_light from '../image/left-icon/light/ranking.svg'

import wattle_light from '../image/left-icon/light/personal.svg'


const icon: any = {
    "logo": logo,
    "dark": {
        "dashboard": dashboard,
        "exchange": exchange,
        "pool": pool,
        "bank": bank,
        "wattle": wattle,
        "send": send,
        'ranking': ranking
    },
    "light": {
        "dashboard": dashboard_light,
        "exchange": exchange_light,
        "pool": pool_light,
        "bank": bank_light,
        "wattle": wattle_light,
        "send": send_light,
        "ranking": ranking_light
    }
}


export default icon