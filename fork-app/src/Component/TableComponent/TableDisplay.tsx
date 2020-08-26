import React, { useState, useEffect } from 'react';
//import Table from '@material-ui/core/Table';
//import TableBody from '@material-ui/core/TableBody';
//import TableCell from '@material-ui/core/TableCell';
//import TableHead from '@material-ui/core/TableHead';
//import TableRow from '@material-ui/core/TableRow';

interface IState {
   stargazers_count:any,
   full_name:any,
   url:any,
   forks_count:any


}
interface ITableDisplayProps{
    SearchQuery: (String | null);
    

}
//techgaun/active-forks
//https://api.github.com/repos/techgaun/active-forks/forks?sort=stargazers&per_page=100
function TableDisplay(props: ITableDisplayProps){
    const [ItemArray, setItemArray] = useState<IState[]>([{stargazers_count:"",full_name:"", url:"", forks_count:""}])
    useEffect(() => {
        fetch('https://api.github.com/repos/'+ props.SearchQuery+'/forks?sort=stargazers&per_page=10')//change later
            .then(response =>response.json())
            //.then(data => console.log(data))
            .then(response => setItemArray(response))
            .catch(() => console.log("it didn't work")
        );

    }, [props.SearchQuery]);


    var tableBody: JSX.Element[] = []
    for(var i = 0;i <ItemArray.length;i++){
        console.log(i);
        tableBody.push(
        <tr>
            <td>{ItemArray[i]?.full_name}</td>
            <td>{ItemArray[i]?.url}</td>
            <td>{ItemArray[i]?.stargazers_count}</td>
        </tr>);
    }
        
    
    return(
        <div>
            <table>
                <tr>
                    <th>full name</th>
                    <th>url</th>
                    <th>star count</th>
                </tr>
                <tbody >
                {tableBody}
                </tbody>

            </table>
          
            
        </div>
    )
}


export default TableDisplay