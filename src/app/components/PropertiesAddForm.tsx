"use client";
import { useState } from "react";



export default function PropertiesAddForm() {
    const [formData, setFormData] = useState({
        name: "",
        address: "",

    });

    const [errors, setErrors] = useState({
        name: "",
        address: "",
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        let newErrors = { name: "", address: ""};

        // Simple validation
        if (!formData.name) newErrors.name = "Please fill the name";
        if (!formData.address) newErrors.address = "Please fill the address";

        setErrors(newErrors);

        if (Object.values(newErrors).some((error) => error !== "")) {
            return;
        }

        console.log("Form submitted:", formData);
    };
    return (
        <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg space-y-6 border border-gray-300">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Tenant Service Request</h2>

            {/* Name */}
            <div>
                <label className="block text-lg font-semibold text-black">Property name</label>
                <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Property name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Address */}
            <div>
                <label className="block text-lg font-semibold text-black">Address </label>
                <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Property address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    required
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4">
                <button
                    type="submit"
                    className="bg-gray-800 text-white py-3 px-4 rounded-md hover:bg-blue-900 transition-all duration-200"
                > Add
                </button>
            </div>
        </form>
    );
}