import HomeIcon from '@mui/icons-material/Home'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber'
import TableViewIcon from '@mui/icons-material/TableView'
import {SvgIconTypeMap} from '@mui/material'
import {OverridableComponent} from '@mui/material/OverridableComponent'

export const MAIN = '/' as const;
export const BLOTTER = '/blotter' as const;
export const TRADE_TICKET= '/trade-ticket' as const;



type IconType = OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
}
export type RouteType = {
    label: string,
    icon: IconType,
    path:
        typeof MAIN |
        typeof BLOTTER |
        typeof TRADE_TICKET
}
export const ROUTES: RouteType[] = [
    {'label': 'Dashboard', path: MAIN, icon: HomeIcon},
    {'label': 'Trade Blotter', path: BLOTTER, icon: TableViewIcon},
    {'label': 'Trade Ticket', path: TRADE_TICKET, icon: ConfirmationNumberIcon}
]
