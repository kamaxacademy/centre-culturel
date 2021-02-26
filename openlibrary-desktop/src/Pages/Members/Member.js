
import React, { useState } from 'react'
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import MemberForm from "./MemberForm";
import useTable from '../../component/useTable';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import Controls from '../../component/controls/Controls'
import * as employeeService from '../../services/employeeService'
import Popup from '../../component/Popup'
// const useStyles = makeStyles()
const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '75%'
    },
    newButton: {
        position: 'absolute',
        right: '10px'
    }
}))

const headCells = [
    { id: 'fullName', label: 'Employee Name' },
    { id: 'email', label: 'Email Address (Personal)' },
    { id: 'mobile', label: 'Mobile Number' },
    { id: 'department', label: 'Department', disableSorting: true },
]



export default function Members() {
    const classes = useStyles();
    const [records, setRecords] = useState(employeeService.getAllEmployees())
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [openPopup, setOpenPopup] = useState(false)
    const [recordForEdit, setRecordForEdit] = useState(null)


    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value == "")
                    return items;
                else
                    return items.filter(x => x.fullName.toLowerCase().includes(target.value))
            }
        })
    }


    
    return (
        <>
        {/* <MemberForm /> */}
            <Controls.Button
                text="Add New"
                variant="outlined"
                // className={classes.newButton}
                startIcon={<AddIcon />}
                onClick = {()=>setOpenPopup(true)}
                // onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
            />
        <Paper className={classes.pageContent}>
                {/* <EmployeeForm /> */}
                <Toolbar>
                    <Controls.Input
                        label="Search Employees"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />

                    

                </Toolbar>


                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map(item =>
                                (<TableRow key={item.id}>
                                    <TableCell>{item.fullName}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.mobile}</TableCell>
                                    <TableCell>{item.department}</TableCell>
                                </TableRow>)
                            )
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination />
            </Paper>
            
            <Popup
                title="Employee Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}

            >
                <MemberForm />
            </Popup>
        </>
    )
}