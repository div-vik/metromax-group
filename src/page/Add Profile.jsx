// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Add_Profile = () => {
  return (
    <div className="px-5 shadow-lg py-4 max-w-[370px] md:max-w-[640px] lg:max-w-[1000px] lg:flex lg:justify-center lg:items-center mx-auto my-5 rounded-xl">
      <div className="px-5 py-3 rounded-xl w-full">
        <div className="flex justify-center items-center mb-14 mt-2">
          <img
            className="w-52"
            src="https://themetromaxgroup.com/wp-content/uploads/2022/01/admin-ajax-removebg-preview.png"
            alt="logo"
          />
        </div>

        <div className="">
          <h2 className="text-lg border-b mb-3 pb-2">Add Profile</h2>
          <h5 className="mb-5 text-red-500">* Required field</h5>
          <form className="mb-5 grid lg:grid-cols-2 gap-7">
            <div>
              <h4>
                Full Name <span className="text-red-500">*</span>
              </h4>
              <input
                className="rounded-md ring-1 ring-black mt-2 w-full focus:outline-none px-2 py-2"
                type="text"
              />
              <p className="text-red-500 mb-4 mt-2">
                Please fill the required field
              </p>
            </div>

            <div>
              <h4>
                Email ID <span className="text-red-500">*</span>
              </h4>
              <input
                className="rounded-md ring-1 ring-black mt-2 w-full focus:outline-none px-2 py-2"
                type="text"
              />
              <p className="text-red-500 mb-4 mt-2">
                Please fill the required field
              </p>
            </div>

            <div>
              <h4>
                Phone No. <span className="text-red-500">*</span>
              </h4>
              <input
                className="rounded-md ring-1 ring-black mt-2 w-full focus:outline-none px-2 py-2"
                type="text"
              />
              <p className="text-red-500 mb-4 mt-2">
                Please fill the required field
              </p>
            </div>

            <div>
              <h4>
                Date of Birth <span className="text-red-500">*</span>
              </h4>
              <input
                className="rounded-md ring-1 ring-black mt-2 w-full focus:outline-none px-2 py-2"
                type="text"
              />
              {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker />
              </LocalizationProvider> */}
              <p className="text-red-500 mb-4 mt-2">
                Please fill the required field
              </p>
            </div>

            <div>
              <h4>
                State <span className="text-red-500">*</span>
              </h4>
              <input
                className="rounded-md ring-1 ring-black mt-2 w-full focus:outline-none px-2 py-2"
                type="text"
              />
              <p className="text-red-500 mb-4 mt-2">
                Please fill the required field
              </p>
            </div>

            <div>
              <h4>
                Gender <span className="text-red-500">*</span>
              </h4>
              {/* <input
                className="rounded-md ring-1 ring-black mt-2 w-full focus:outline-none px-2 py-2"
                type="text"
              /> */}
              <select className="rounded-md ring-1 ring-black mt-2 w-full focus:outline-none px-2 bg-white py-[0.6rem]">
                <option value="gender">Select gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
              <p className="text-red-500 mb-4 mt-2">
                Please fill the required field
              </p>
            </div>

            <div>
              <h4>
                City <span className="text-red-500">*</span>
              </h4>
              <input
                className="rounded-md ring-1 ring-black mt-2 w-full focus:outline-none px-2 py-2"
                type="text"
              />
              <p className="text-red-500 mb-4 mt-2">
                Please fill the required field
              </p>
            </div>
          </form>
          <button className="bg-orange-500 rounded-lg px-4 py-3 mb-2 hover:shadow-lg">
            Add Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Add_Profile;
