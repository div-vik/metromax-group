/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

const Add_Profile = ({ setOpen, defaultValues, rowsToEdit }) => {
  const initialValues = {
    fullName: "",
    phone: "",
    email: "",
    gender: "",
    dateOfBirth: "",
    city: "",
    state: "",
  };
  const [formValues, setFormValues] = useState(defaultValues || initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      if (rowsToEdit !== null) {
        let profiles =
          localStorage.getItem("profiles") &&
          localStorage.getItem("profiles").length > 0
            ? JSON.parse(localStorage.getItem("profiles"))
            : [];

        const _profile = profiles.map((profile, profileIdx) => {
          if (profileIdx == rowsToEdit) {
            return formValues;
          } else {
            return profile;
          }
        });
        console.log(_profile);
        localStorage.setItem("profiles", JSON.stringify(_profile));
      } else {
        const _profiles =
          localStorage.getItem("profiles") &&
          localStorage.getItem("profiles").length > 0
            ? JSON.parse(localStorage.getItem("profiles"))
            : [];
        localStorage.setItem(
          "profiles",
          JSON.stringify([..._profiles, formValues])
        );
      }
      window.location.reload(true);
      setOpen(false);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.fullName) {
      errors.fullName = "Full Name is required!";
    }
    if (!values.phone) {
      errors.phone = "Phone Number is required!";
    } else if (values.phone.length !== 10) {
      errors.phone = "Please enter valid phone number!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.gender) {
      errors.gender = "Gender is required!";
    }
    if (!values.dateOfBirth) {
      errors.dateOfBirth = "D.O.B is required!";
    }
    if (!values.city) {
      errors.city = "City is required!";
    }
    if (!values.state) {
      errors.state = "State is required!";
    }

    return errors;
  };

  return (
    <div className="bg-white px-5 shadow-lg py-4 max-w-[370px] md:max-w-[640px] lg:max-w-[1000px] lg:flex lg:justify-center lg:items-center mx-auto my-5 rounded-xl">
      <div className="px-5 py-3 rounded-xl w-full">
        <div className="flex justify-center items-center mb-14 mt-2">
          <img
            className="w-52"
            src="https://themetromaxgroup.com/wp-content/uploads/2022/01/admin-ajax-removebg-preview.png"
            alt="logo"
          />
        </div>

        <div className="">
          <h2 className="text-lg border-b mb-3 pb-2">
            {rowsToEdit !== null ? "Edit Profile" : "Add Profile"}
          </h2>
          <h5 className="mb-5 text-red-500">* Required field</h5>
          <form className="mb-5 grid lg:grid-cols-2 gap-7">
            <div>
              <h4>
                Full Name <span className="text-red-500">*</span>
              </h4>
              <input
                name="fullName"
                value={formValues.fullName}
                onChange={handleChange}
                className="rounded-md ring-1 ring-black mt-2 w-full focus:outline-none px-2 py-2"
                type="text"
              />
              <p className="text-red-500 mt-2">{formErrors.fullName}</p>
            </div>

            <div>
              <h4>
                Email ID <span className="text-red-500">*</span>
              </h4>
              <input
                name="email"
                value={formValues.email}
                onChange={handleChange}
                className="rounded-md ring-1 ring-black mt-2 w-full focus:outline-none px-2 py-2"
                type="email"
              />
              <p className="text-red-500 mt-2">{formErrors.email}</p>
            </div>

            <div>
              <h4>
                Phone No. <span className="text-red-500">*</span>
              </h4>
              <input
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
                className="rounded-md ring-1 ring-black mt-2 w-full focus:outline-none px-2 py-2"
                type="tel"
              />
              <p className="text-red-500 mt-2">{formErrors.phone}</p>
            </div>

            <div>
              <h4>
                Date of Birth <span className="text-red-500">*</span>
              </h4>
              <input
                name="dateOfBirth"
                value={formValues.dateOfBirth}
                onChange={handleChange}
                className="rounded-md ring-1 ring-black mt-2 w-full focus:outline-none px-2 py-2"
                type="date"
              />
              <p className="text-red-500 mt-2">{formErrors.dateOfBirth}</p>
            </div>

            <div>
              <h4>
                State <span className="text-red-500">*</span>
              </h4>
              <input
                name="state"
                value={formValues.state}
                onChange={handleChange}
                className="rounded-md ring-1 ring-black mt-2 w-full focus:outline-none px-2 py-2"
                type="text"
              />
              <p className="text-red-500 mt-2">{formErrors.state}</p>
            </div>

            <div>
              <h4>
                Gender <span className="text-red-500">*</span>
              </h4>
              <select
                name="gender"
                value={formValues.gender}
                onChange={handleChange}
                onSelect={handleChange}
                className="rounded-md ring-1 ring-black mt-2 w-full focus:outline-none px-2 bg-white py-[0.6rem]"
              >
                <option value="gender">Select gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
              </select>
              <p className="text-red-500 mt-2">{formErrors.gender}</p>
            </div>

            <div>
              <h4>
                City <span className="text-red-500">*</span>
              </h4>
              <input
                name="city"
                value={formValues.city}
                onChange={handleChange}
                className="rounded-md ring-1 ring-black mt-2 w-full focus:outline-none px-2 py-2"
                type="text"
              />
              <p className="text-red-500 mt-2">{formErrors.city}</p>
            </div>
          </form>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-orange-500 rounded-lg px-4 py-3 mb-2 hover:shadow-lg"
          >
            {defaultValues === "" ? "Add Profile" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Add_Profile;
