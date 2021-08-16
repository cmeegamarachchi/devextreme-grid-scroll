import React, {useEffect, useState} from 'react';
import {Card, CardContent, createStyles, makeStyles, Theme} from '@material-ui/core';
import DataGrid, {Column, Pager, Scrolling, SearchPanel, StateStoring} from 'devextreme-react/data-grid';
import {generateData} from './util/util';

const useStyles = makeStyles((theme: Theme) => createStyles({
    grid: {
        height: '440px'
    }
}))

function App() {
    const classes = useStyles()
    const [dataSource, setDataSource ] = useState<any[]>([]);

    useEffect(() => {
        setDataSource(generateData(1000));
    },[])

    return (
        <div className="App">
            <Card>
                <CardContent>
                    <DataGrid
                        className={classes.grid}
                        dataSource={dataSource}
                        keyExpr="id"
                        showBorders={true}
                    >
                        <Pager visible={false}/>
                        <Scrolling mode="virtual" />
                        <SearchPanel visible={true} />
                    </DataGrid>
                </CardContent>
            </Card>
        </div>
    );
}

export default App;
