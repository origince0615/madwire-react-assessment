import React, { useState } from 'react';
import {
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  TablePagination,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const UsersTable = ({ data }) => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const sortedData = data.sort((item1, item2) => {
    return item1.username
      .toLowerCase()
      .localeCompare(item2.username.toLowerCase());
  });

  const handleEditButton = (index) => {
    onEditData(index);
  };

  return (
    <>
      <TableContainer
        component={Paper}
        style={{
          borderRadius: '10px',
          border: '1px solid rgb(220, 220, 220)',
          boxShadow: '5px 5px 1px 1px rgba(220, 220, 220, 0.2),',
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: 'rgb(245, 245, 245)' }}>
              <TableCell align="left" style={{ fontWeight: 'bold' }}>
                NAME
              </TableCell>
              <TableCell align="left" style={{ fontWeight: 'bold' }}>
                USERNAME
              </TableCell>
              <TableCell align="left" style={{ fontWeight: 'bold' }}>
                EMAIL
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow
                  key={page * rowsPerPage + index}
                  style={
                    index % 2 === 0
                      ? {}
                      : { backgroundColor: 'rgb(245, 245, 245)' }
                  }
                >
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.username}</TableCell>
                  <TableCell
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    {row.email}
                    <IconButton
                      aria-label="edit-button"
                      onClick={() =>
                        handleEditButton(page * rowsPerPage + index)
                      }
                    >
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default UsersTable;
