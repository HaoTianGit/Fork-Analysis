import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
interface IState {
   stargazers_count:any,
   full_name:any,
   url:any,
   forks_count:any,
   size:any,
   pushed_at:any,
   default_branch:any

}
interface ITableDisplayProps{
    user: (String | null);
    repo: (String | null);
    

}
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
});

//techgaun/active-forks
//https://api.github.com/repos/techgaun/active-forks/forks?sort=stargazers&per_page=100
function TableDisplay(props: ITableDisplayProps){
    const [ItemArray, setItemArray] = useState<IState[]>([{stargazers_count:"",full_name:"", url:"", forks_count:"",size:"",pushed_at:"",default_branch:""}])
    useEffect(() => {
        fetch('https://api.github.com/repos/'+ props.user+'/'+props.repo+'/forks?sort=stargazers&per_page=10')//change later
            .then(response =>response.json())
            //.then(data => console.log(data))
            .then(response => setItemArray(response))
            .catch(() => console.log("it didn't work")
        );

    }, [props.user,props.repo]);


    var tableBody: JSX.Element[] = []
    for(var i = 0;i <ItemArray.length;i++){
        console.log(i);
        tableBody.push(
            <TableBody>
                <TableRow>
                    <TableCell align="right">{ItemArray[i]?.full_name}</TableCell>
                    <TableCell align="right">{ItemArray[i]?.url}</TableCell>
                    <TableCell align="right">{ItemArray[i]?.stargazers_count}</TableCell>
                    <TableCell align="right">{ItemArray[i]?.default_branch}</TableCell>
                    <TableCell align="right">{ItemArray[i]?.forks_count}</TableCell>
                    <TableCell align="right">{ItemArray[i]?.size}</TableCell>
                    <TableCell align="right">{ItemArray[i]?.pushed_at}</TableCell>
                </TableRow>
            </TableBody>      
        );
    }
        
    const classes = useStyles();
    return(
        <div>
            <TableContainer component = {Paper}>
                <Table className={classes.table} size = "small">    
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">full name</TableCell>
                            <TableCell align="right">url</TableCell>
                            <TableCell align="right">star count</TableCell>
                            <TableCell align="right">branch</TableCell>
                            <TableCell align="right">forks</TableCell>
                            <TableCell align="right">size(kb)</TableCell>
                            <TableCell align="right">last push</TableCell>
                        </TableRow>
                    </TableHead>
                    {tableBody}
                </Table>
            </TableContainer>
        </div>
    )
}


export default TableDisplay