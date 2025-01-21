import React, { useState } from "react";
import { supabase } from "../../../supabaseClient";

const ModalNewProject = ({ onClose, onProjectAdded }) => {
  const [formData, setFormData] = useState({
    name: "",
    customer: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, customer, description, startDate, endDate } = formData;

    if (!name || !customer || !startDate || !endDate) {
      alert("Please fill all required fields!");
      return;
    }

    try {
      const { data, error } = await supabase
        .from("projects")
        .insert([{ name, customer, description, startDate, endDate }]);

      if (error) {
        console.error("Supabase error details:", error);
        alert(`Error adding project: ${error.message}`);
      } else {
        onProjectAdded(data[0]);
        setSuccessMessage("Project successfully added!");
        setFormData({
          name: "",
          customer: "",
          description: "",
          startDate: "",
          endDate: "",
        });

        setTimeout(() => {
            setSuccessMessage("");
            onClose();
          }, 3000);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("Unexpected error occurred!");
    }
  };

  const inputStyles = "w-full rounded border border-gray-300 p-2 shadow-sm dark:border-dark-tertiary dark:bg-dark-tertiary dark:text-white dark:focus:outline-none";
  const labelStyle = "block font-medium dark:text-white"

  return (
    <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-50 p-4">
      <div className="w-full max-w-2xl rounded-lg bg-white p-4 shadow-lg dark:bg-dark-secondary">
        <h2 className="text-xl font-bold mb-4 dark:text-white">New Project</h2>

        {successMessage && (
          <div className="mb-4 rounded bg-green-100 p-3 text-green-700">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-4 space-y-6">
          <div>
            <label className={labelStyle}>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={inputStyles}
              required
            />
          </div>
          <div>
            <label className={labelStyle}>Customer</label>
            <input
              type="text"
              name="customer"
              value={formData.customer}
              onChange={handleInputChange}
              className={inputStyles}
              required
            />
          </div>
          <div>
            <label className={labelStyle}>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className={inputStyles}
            ></textarea>
          </div>
          <div>
            <label className={labelStyle}>Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              className={inputStyles}
              required
            />
          </div>
          <div>
            <label className={labelStyle}>End Date</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
              className={inputStyles}
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Add Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalNewProject;
