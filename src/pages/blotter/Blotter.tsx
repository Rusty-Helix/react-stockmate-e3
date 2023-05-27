// import {Typography} from '@mui/material'
// import {DataGrid} from '../../components/DataGrid/DataGrid'
import React, {useState, useCallback} from 'react'
import {DataGrid} from '../../components/DataGrid/DataGrid'
import {useGetTradesQuery} from '../../services/tradesApi'
import {tradeBlotterColDef} from './config'

export const Blotter: React.FC = (): JSX.Element => {
    const [showNoRowsOverlay, setShowNoRowsOverlay] = useState<boolean>(false)
    const {data} = useGetTradesQuery(undefined, {pollingInterval: 30000})
    const rowClickHandler = useCallback(()=>{
        
    }, []);
    
    return (
            <div>
                <DataGrid
                    // gridData={[{name:'typescript'}]}
                    gridData={data || []}
                    colDef={tradeBlotterColDef}
                    showNoRowsOverlay={showNoRowsOverlay}
                    rowClickHandler={rowClickHandler}
                    size={{width: '100%', height: 1000}}
                >
                </DataGrid>
                {/* <Typography
                    component='div'
                    variant='h3'
                >
                    Trade Blotter
                </Typography> */}
            </div>
        )
}