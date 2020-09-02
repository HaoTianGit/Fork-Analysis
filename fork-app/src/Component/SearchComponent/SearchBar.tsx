import React, { useState } from 'react';
import { IUserInput } from '../../Common/Interface';
import { Button, Grid, TextField } from '@material-ui/core';

interface ISearchBarProps{
    SetUserInput: (a: IUserInput) => void;
}

function SearchBar(props: ISearchBarProps) {
    //const [SearchQuery, setSearchQuery] = useState<string | null>("");
    const [UserQuery, setUserQuery] = useState<string | null>("");
    const [RepoQuery, setRepoQuery] = useState<string | null>("");
    //const handleSearchQueryChange = (s: string | null) =>{
    //    setSearchQuery(s);          
    //}
    const handleUserQueryChange = (s: string | null) =>{
        setUserQuery(s);
    }
    const handleRepoQueryChange = (s: string | null) =>{
        setRepoQuery(s);
    }

    const [HasFocus, setHasFocus] = useState<boolean>(false);
    const handleSubmit = () => {
        
        //console.log(SearchQuery);
        if (UserQuery?.length !== 0 && UserQuery !== null && UserQuery !== ""&&RepoQuery?.length !== 0 && RepoQuery !== null && RepoQuery !== "") {
            let UserInput: IUserInput = {
                UserQuery:UserQuery,
                RepoQuery:RepoQuery

             
            }
            props.SetUserInput(UserInput);
        } else {
            setHasFocus(true);
        }
    }

    return <div className="SearchBarContainer">
        <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
                <TextField
                    required
                    id="outlined-required"
                    label="Search"
                    variant="outlined"
                    error={HasFocus && UserQuery === ""}
                    onClick={() => setHasFocus(true)}
                    value={UserQuery}
                    onChange={e => handleUserQueryChange(e.target.value)}
                />
            </Grid>
            <Grid item xs={6} sm={3}>
                <TextField
                        required
                        id="outlined-required"
                        label="Search"
                        variant="outlined"
                        error={HasFocus && RepoQuery === ""}
                        onClick={() => setHasFocus(true)}
                        value={RepoQuery}
                        onChange={e => handleRepoQueryChange(e.target.value)}
                    />
            </Grid>
            <Grid item xs={6} sm={3}>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Find
                </Button>
            </Grid>
        </Grid>
    </div>
}

export default SearchBar