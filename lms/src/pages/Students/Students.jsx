import React, { useState } from "react";
import { Stack } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Pagination from "@mui/material/Pagination";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const options = ["short listed", "Favourite"];
const candidateStatus = [
  {
    status: "Live",
    value: "1",
  },
  {
    status: "Offline",
    value: "0",
  },
  {
    status: "Away",
    value: "2",
  },
];
const dummyData = [
  {
    qualified: "1",
    name: "John Doe",
    jobtitle: "Software Engineer",
    experience: "5 years",
    degree: "BSCS",
    match: "3",
    id: "1",
  },
  {
    qualified: "1",
    name: "Jane Smith",
    jobtitle: "Product Manager",
    experience: "8 years",
    degree: "BSCS",
    match: "3",
    id: "1",
  },
  {
    qualified: "1",
    name: "Alice Johnson",
    jobtitle: "UX/UI Designer",
    experience: "3 years",
    degree: "BSCS",
    match: "3",
    id: "1",
  },
  {
    qualified: "0",
    name: "Bob Williams",
    jobtitle: "Data Analyst",
    experience: "6 years",
    degree: "BSCS",
    match: "3",
    id: "1",
  },
  {
    qualified: "1",
    name: "Alice Johnson",
    jobtitle: "UX/UI Designer",
    experience: "3 years",
    degree: "BSCS",
    match: "3",
  },
  {
    qualified: "0",
    name: "Bob Williams",
    jobtitle: "Data Analyst",
    experience: "6 years",
    degree: "BSCS",
    match: "3",
  },
];


export default function Students() {
  const [isResumeClicked, setIsResumeClicked] = useState(false);
  const [isInterviewClicked, setIsInterviewClicked] = useState(false);
  const [jobPosition, setJobPosition] = useState("");
  const [anchorEl, setAnchorEl] = useState(Array(dummyData.length).fill(null));
  const [anchorElResume, setAnchorElResume] = useState(null);
  const [age, setAge] = React.useState("");
  const [status, setStatus] = useState("");
  const [showAutocomplete, setShowAutocomplete] = useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [selectedItem, setSelectedItem] = useState(
    Array(dummyData.length).fill(null)
  );

  const handleClickResumeDiv = () => {
    setIsResumeClicked(!isResumeClicked);
  };

  const handleClickInterviewDiv = () => {
    setIsInterviewClicked(!isInterviewClicked);
  };

  const handleClick = (event, index) => {
    setAnchorEl((prev) => {
      const newAnchorEl = [...prev];
      newAnchorEl[index] = event.currentTarget;
      return newAnchorEl;
    });
  };

  const handleClose = (index) => {
    setAnchorEl((prev) => {
      const newAnchorEl = [...prev];
      newAnchorEl[index] = null;
      return newAnchorEl;
    });
  };

  const handleMenuItemClick = (index, selectedOption) => {
    handleClose(index);
    // Update the selected item state based on the clicked option
    setSelectedItem((prev) => {
      const newSelectedItem = [...prev];
      newSelectedItem[index] = selectedOption;
      return newSelectedItem;
    });
  };

  const handleChangeJobPosition = (event) => {
    setJobPosition(event.target.value);
  };

  const handleClickResume = (event) => {
    setAnchorElResume(event.currentTarget);
  };

  const handleCloseResume = () => {
    setAnchorElResume(null);
  };

  // pagination logic is writeen below
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleData = dummyData.slice(startIndex, endIndex);

  const statusHandleChange = (event) => {
    setStatus(event.target.value);
  };
  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const CustomIcon = () => {
    // Your custom icon component (can be an SVG or any React component)
    return (
      <div className="flex justify-start items-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="12"
          width="10"
          viewBox="0 0 448 512"
        >
          <path
            opacity="1"
            fill="#1E3050"
            d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
          />
        </svg>
      </div>
    );
  };

  const handleSearchIconClick = () => {
    setShowAutocomplete(!showAutocomplete);
  };
  const svgClass = showAutocomplete
    ? "bg-[#E4E4E4] p-2 w-10 h-[40px] border border-r-gray-400 border-t-gray-400 border-b-gray-400"
    : "bg-[#E4E4E4] p-2 w-10 h-10 rounded-md";

  const tableHead = [
    { id: 1, label: "#" },
    { id: 2, label: "First Name" },
    { id: 3, label: "Last Name" },
    { id: 4, label: "Email" },
    { id: 5, label: "Degree" },
    { id: 6, label: "Status" },
    { id: 7, label: "Action" },
  ];

  const tableData = [
    {
      id: 1,
      firstName: "Mark",
      lastName: "Otto",
      email: "@mdo",
      degree: "B.Sc",
      status: "Active",
    },
    {
      id: 2,
      firstName: "Jacob",
      lastName: "Thornton",
      email: "@fat",
      degree: "M.Sc",
      status: "Inactive",
    },
    {
      id: 3,
      firstName: "Larry",
      lastName: "Bird",
      email: "@twitter",
      degree: "Ph.D",
      status: "Pending",
    },
    {
        id: 3,
        firstName: "Larry",
        lastName: "Bird",
        email: "@twitter",
        degree: "Ph.D",
        status: "Pending",
      },
      {
        id: 3,
        firstName: "Larry",
        lastName: "Bird",
        email: "@twitter",
        degree: "Ph.D",
        status: "Pending",
      },
      {
        id: 3,
        firstName: "Larry",
        lastName: "Bird",
        email: "@twitter",
        degree: "Ph.D",
        status: "Pending",
      },
      {
        id: 3,
        firstName: "Larry",
        lastName: "Bird",
        email: "@twitter",
        degree: "Ph.D",
        status: "Pending",
      },
      {
        id: 3,
        firstName: "Larry",
        lastName: "Bird",
        email: "@twitter",
        degree: "Ph.D",
        status: "Pending",
      },
      {
        id: 3,
        firstName: "Larry",
        lastName: "Bird",
        email: "@twitter",
        degree: "Ph.D",
        status: "Pending",
      },
      {
        id: 3,
        firstName: "Larry",
        lastName: "Bird",
        email: "@twitter",
        degree: "Ph.D",
        status: "Pending",
      },
      {
        id: 3,
        firstName: "Larry",
        lastName: "Bird",
        email: "@twitter",
        degree: "Ph.D",
        status: "Pending",
      },
      
  ];
  return (
    <>
      <section>
        <div className="flex items-center justify-between gap-5 mt-3">
          <h2 className="text-[#161E54] text-3xl font-semibold pl-5">
            Candidates
          </h2>
          <div>
            <Stack direction={"row"} gap={2} alignItems="center">
              <div className="flex justify-center items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 28 27"
                  className={svgClass}
                  fill="none"
                >
                  <path
                    d="M26.5144 26L18.3184 17.5352M21.4721 10.9276C21.2392 16.1352 16.5805 20.1569 11.0666 19.9102C5.55272 19.6636 1.27164 15.2422 1.50455 10.0346C1.73746 4.82703 6.39616 0.805386 11.91 1.052C17.4239 1.29861 21.705 5.72009 21.4721 10.9276Z"
                    stroke="#49575F"
                    stroke-width="1.9846"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div
                onClick={handleClickResumeDiv}
                className={` flex items-center justify-center w-96 pb-0  pt-2 px-3 rounded-lg cursor-pointer ${
                  isResumeClicked ? "bg-[#93509E]" : "bg-[#E4E4E4]"
                }`}
              >
                <p
                  className={`font-medium text-base ${
                    isResumeClicked ? "text-white" : "text-[#35373C]"
                  }`}
                >
                  Documents Uploaded
                </p>
              </div>

              <div
                onClick={handleClickInterviewDiv}
                className={` flex items-center pt-2 px-3 pb-0 w-96 justify-center rounded-lg cursor-pointer ${
                  isInterviewClicked ? "bg-[#93509E]" : "bg-[#E4E4E4]"
                }`}
              >
                <p
                  className={`font-medium text-base ${
                    isInterviewClicked ? "text-white" : "text-[#35373C]"
                  }`}
                >
                  Interview Taken
                </p>
              </div>
              <Form.Select size="lg" aria-label="Default select example">
                <option>Select Admission Status</option>
                <option value="1">Selected</option>
                <option value="2">Not Selected</option>
                <option value="3">Pending</option>
              </Form.Select>
            </Stack>
          </div>
        </div>
        <div className="mx-5 mt-5">
          <Table className="rounded-lg" striped bordered hover variant="dark">
            <thead>
              <tr>
                {tableHead.map((head) => (
                  <th key={head.id}>{head.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.firstName}</td>
                  <td>{row.lastName}</td>
                  <td>{row.email}</td>
                  <td>{row.degree}</td>
                  <td>{row.status}</td>
                  <td>
                    <ButtonGroup aria-label="Basic example">
                      <Button variant="secondary">Left</Button>
                      <Button variant="secondary">Middle</Button>
                      <Button variant="secondary">Right</Button>
                    </ButtonGroup>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
}
