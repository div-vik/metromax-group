import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { green, red } from "@mui/material/colors";
import Tooltip from "@mui/material/Tooltip";
import { Modal, TableSortLabel } from "@mui/material";
import Add_Profile from "../components/Add Profile";
// import XLSX from "xlsx";

const columns = [
  {
    id: "fullName",
    label: "Full Name",
  },
  {
    id: "phone",
    label: "Phone No.",
  },
  {
    id: "email",
    label: "Email ID",
  },
  {
    id: "gender",
    label: "Gender",
  },
  {
    id: "dateOfBirth",
    label: "D.O.B",
  },
  {
    id: "city",
    label: "City",
  },
  {
    id: "state",
    label: "State",
  },
  {
    id: "action",
    label: "Action",
  },
];

const Profiles = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [rows, setRows] = React.useState([]);
  const [rowsToEdit, setRowsToEdit] = React.useState(null);
  const [search, setSearch] = React.useState("");
  // const [order, setOrder] = React.useState();
  // const [orderBy, setOrderBy] = React.useState();

  // console.log(rows);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setRowsToEdit(null);
  };

  const handleDelete = (idx) => {
    console.log(idx);
    const data = rows.filter((row, index) => index !== idx);
    setRows(data);
    localStorage.setItem("profiles", JSON.stringify(data));
  };

  // console.log(rowsToEdit);

  const handleEdit = (idx) => {
    setRowsToEdit(idx);
    setOpen(true);
  };

  // const handleSorting = (cellId) => {
  //   const isAsc = orderBy === cellId && order === "asc";
  //   setOrder(isAsc ? "desc" : "asc");
  //   setOrderBy(cellId);
  // };

  // const handleExportToExcel = () => {
  //   var wb = XLSX.utils.book_new(),
  //     ws = XLSX.utils.json_to_sheet(rows);

  //   XLSX.utils.book_append_sheet(wb, ws, "MySheet1");

  //   XLSX.writeFile(wb, "Profiles.xlsx");
  // };

  React.useEffect(() => {
    const profiles = localStorage.getItem("profiles");
    setRows(JSON.parse(profiles));
  }, []);

  return (
    <div className="px-5 shadow-lg py-4 max-w-[370px] md:max-w-[640px] lg:max-w-[1000px] md:flex md:justify-center md:items-center mx-auto my-5 lg:my-16 rounded-xl">
      <div className="px-5 py-3 rounded-xl w-full">
        <div className="flex justify-center items-center mb-14 mt-2">
          <img
            className="w-52"
            src="https://themetromaxgroup.com/wp-content/uploads/2022/01/admin-ajax-removebg-preview.png"
            alt="logo"
          />
        </div>

        <div className="">
          <h2 className="text-lg border-b mb-3 pb-2">Profiles</h2>

          <div className="flex justify-end my-3">
            <div className="mr-5 ring-1 ring-black px-2 h-fit rounded-md">
              <input
                onChange={(e) => setSearch(e.target.value)}
                className="py-3 focus:outline-none"
                type="text"
                placeholder="Search"
              />
            </div>
            <button
              onClick={handleOpen}
              className="bg-orange-500 rounded-lg px-4 py-3 mb-2 hover:shadow-lg"
            >
              Add Profile
            </button>

            {rowsToEdit === null ? (
              <Modal open={open} onClose={handleClose}>
                <Add_Profile
                  setOpen={setOpen}
                  defaultValues=""
                  rowsToEdit={rowsToEdit}
                />
              </Modal>
            ) : (
              <Modal open={open} onClose={handleClose}>
                <Add_Profile
                  setOpen={setOpen}
                  defaultValues={rowsToEdit !== null && rows[rowsToEdit]}
                  rowsToEdit={rowsToEdit}
                />
              </Modal>
            )}
          </div>

          <div>
            {rows && rows.length > 0 ? (
              <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        {columns.map((column) => (
                          <TableCell key={column.id}>
                            {/* <TableSortLabel
                              active={orderBy === column.id}
                              direction={orderBy === column.id ? order : "asc"}
                              onClick={() => handleSorting(column.id)}
                            > */}
                            {column.label}
                            {/* </TableSortLabel> */}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows
                        .filter((row) => {
                          return search?.toLowerCase() === ""
                            ? row
                            : row.fullName?.toLowerCase().includes(search) ||
                                row.city?.toLowerCase().includes(search) ||
                                row.state?.toLowerCase().includes(search) ||
                                row.gender?.toLowerCase().includes(search);
                        })
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        ?.map((row, index) => {
                          return (
                            <TableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}
                              key={index}
                            >
                              {columns.map((column) => {
                                const value = row[column.id];
                                return (
                                  <TableCell key={column.id}>
                                    {value === undefined ? (
                                      <>
                                        <Tooltip title="Edit">
                                          <button
                                            onClick={() => handleEdit(index)}
                                          >
                                            <EditIcon
                                              sx={{ color: green[500] }}
                                            />
                                          </button>{" "}
                                        </Tooltip>

                                        <Tooltip title="Delete">
                                          <button
                                            onClick={() => handleDelete(index)}
                                          >
                                            <DeleteIcon
                                              sx={{ color: red[500] }}
                                            />
                                          </button>
                                        </Tooltip>
                                      </>
                                    ) : (
                                      value
                                    )}
                                  </TableCell>
                                );
                              })}
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, 100]}
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
            ) : (
              "No data found"
            )}
          </div>

          {/* <div className="mt-5 flex justify-end">
            <button
              onClick={handleExportToExcel}
              className="bg-orange-500 rounded-lg px-4 py-3 mb-2 hover:shadow-lg"
            >
              Export Data to Excel
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Profiles;
