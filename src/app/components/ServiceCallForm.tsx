"use client"; 
import { useState } from "react";

export default function ServiceCallFormAria() {
  const [formData, setFormData] = useState({
    requestType: "",
    priority: "",
    title: "",
    description: "",
    accessInstructions: "",
    bestTime: "",
  });

  const [errors, setErrors] = useState({
    requestType: "",
    priority: "",
    title: "",
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = { requestType: "", priority: "", title: "", description: "" };

    // Simple validation
    if (!formData.requestType) newErrors.requestType = "Please select a request type";
    if (!formData.priority) newErrors.priority = "Please select a priority level";
    if (!formData.title) newErrors.title = "Issue title is required";
    if (!formData.description) newErrors.description = "Please provide details about the issue";

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error !== "")) {
      return;
    }

    try{
      // Submit the form data to the server
      const response = await fetch("/api/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form data");
      }

      console.log("Your service request has been submitted successfully!");
      setFormData({
        requestType: "",
        priority: "",
        title: "",
        description: "",
        accessInstructions: "",
        bestTime: "",
      });
    }catch(error){
      console.log("Failed to submit the form data. Please try again later." + error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg space-y-6 border border-gray-300">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Tenant Service Request</h2>

      {/* Request Type */}
      <div>
        <label className="block text-lg font-semibold text-black">Request Type *</label>
        <select
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.requestType}
          onChange={(e) => setFormData({ ...formData, requestType: e.target.value })}
          required
        >
          <option value="" disabled>Select a request type</option>
          <option value="plumbing">Plumbing</option>
          <option value="electrical">Electrical</option>
          <option value="hvac">HVAC (Heating/Cooling)</option>
          <option value="appliance">Appliance Repair</option>
          <option value="pest">Pest Control</option>
          <option value="structural">Structural/Building</option>
          <option value="other">Other</option>
        </select>
        {errors.requestType && <p className="text-red-500 text-xs mt-1">{errors.requestType}</p>}
      </div>

      {/* Priority Level */}
      <div>
        <label className="block text-lg font-semibold text-black">Priority Level *</label>
        <select
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.priority}
          onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
          required
        >
          <option value="" disabled>Select priority level</option>
          <option value="emergency">Emergency (24 hours)</option>
          <option value="urgent">Urgent (48 hours)</option>
          <option value="standard">Standard (3-5 days)</option>
          <option value="low">Low (1-2 weeks)</option>
        </select>
        {errors.priority && <p className="text-red-500 text-xs mt-1">{errors.priority}</p>}
      </div>

      {/* Issue Title */}
      <div>
        <label className="block text-lg font-semibold text-black">Issue Title *</label>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Brief description of the problem"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
      </div>

      {/* Detailed Description */}
      <div>
        <label className="block text-lg font-semibold text-black">Detailed Description *</label>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Please provide as much detail as possible about the issue..."
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
        ></textarea>
        {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
      </div>

      {/* Drag & Drop File Upload */}
      <div className="border border-dashed border-blue-800 p-6 rounded-md text-gray-600 text-center hover:border-blue-600 hover:bg-blue-100 transition-all duration-200 cursor-pointer">
        📤 <strong>Drag and drop files here or click to browse</strong>
        <p className="text-sm">Supported formats: JPG, PNG, MP4 (Max 5MB each)</p>
      </div>

      {/* Access Instructions */}
      <div>
        <label className="block text-lg font-semibold text-black">Access Instructions (Optional)</label>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Any special instructions for maintenance staff to access your unit..."
          value={formData.accessInstructions}
          onChange={(e) => setFormData({ ...formData, accessInstructions: e.target.value })}
        ></textarea>
      </div>

      {/* Best Times for Maintenance Visit */}
      <div>
        <label className="block text-lg font-semibold text-black">Best Times for Maintenance Visit (Optional)</label>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Specify convenient times for a maintenance visit..."
          value={formData.bestTime}
          onChange={(e) => setFormData({ ...formData, bestTime: e.target.value })}
        ></textarea>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4">
        <button
          type="submit"
          className="bg-gray-800 text-white py-3 px-4 rounded-md hover:bg-blue-900 transition-all duration-200"
        >
          Submit
        </button>
        <button
          type="button"
          className="border border-blue-900 text-blue-800 py-3 px-4 rounded-md hover:bg-gray-100 transition-all duration-200"
        >
          Save Draft
        </button>
      </div>
    </form>
  );
}
