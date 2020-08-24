import React, { useState, useEffect } from 'react';
//import Table from '@material-ui/core/Table';
//import TableBody from '@material-ui/core/TableBody';
//import TableCell from '@material-ui/core/TableCell';
//import TableHead from '@material-ui/core/TableHead';
//import TableRow from '@material-ui/core/TableRow';

interface IState {
   

}
interface ITableDisplayProps{
    SearchQuery: (String | null);
}
//techgaun/active-forks
//https://api.github.com/repos/techgaun/active-forks/forks?sort=stargazers&per_page=100
function TableDisplay(props: ITableDisplayProps){
    const [ItemArray, setItemArray] = useState<IState[]>([{}])
    useEffect(() => {
        fetch('https://api.github.com/repos/'+ props.SearchQuery+'/forks?sort=stargazers&per_page=5')//change later
            .then(response =>response.json())
            .then(data => console.log(data))
            //.then(response => setItemArray(response))
        
            .catch(() => console.log("it didn't work")
        );

    }, [props.SearchQuery]);
                    
   //<h3>{JSON.stringify(ItemArray[1])}</h3>
    return(
        <div>

        </div>
    )
}


export default TableDisplay