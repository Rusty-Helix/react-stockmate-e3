import {ColDef} from 'ag-grid-community'

export const tradeBlotterColDef = [
    {field: 'ticketId', sortable: true},
    {field: 'startDate', sortable: true, filter: 'agDataColumnFilter'},
    {field: 'endDate', sortable: true, filter: 'agDataColumnFilter'},
    {field: 'fullname', headerName: 'Cpty Name'},
    {field: 'quantity', filter: 'agNumberColumnFilter'},
    {field: 'fixed'},
    {field: 'isin'},
    {field: 'haircut', filter: 'agNumberColumnFilter'},
    {field: 'dirtyPrice', filter: 'agNumberColumnFilter'},
    {field: 'cleanPrice', filter: 'agNumberColumnFilter'},
    {field: 'startCash', filter: 'agNumberColumnFilter'},
    {field: 'endCash', filter: 'agNumberColumnFilter'},
    {field: 'repoRate', filter: 'agNumberColumnFilter'},
    {field: 'repoRateType'},
    {field: 'repoYearBasis'},
    {field: 'settlementCcy'},
    {field: 'trader'},
    {field: 'yieldValue'},
]