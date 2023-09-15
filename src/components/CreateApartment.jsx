import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateApartment() {
    const navigate = useNavigate();
    const [newApartment, setNewApartment] = useState({
        img: String,
        title: String,
        pricePerDay: Number,
    });

    const handleCreateApartment = () => {
        axios.post(`${import.meta.env.VITE_API_URL}/apartments`, newApartment)
            .then((response) => {
                console.log(response.data);
                navigate("/apartments");
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewApartment({
            ...newApartment,
            [name]: value,
        });
    };

    return (
        <div>
            <h1>Create Apartment</h1>
            <form>
                <input
                    type="text"
                    placeholder="Image URL"
                    name="img"
                    value={newApartment.img}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={newApartment.title}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    placeholder="Price per Day"
                    name="pricePerDay"
                    value={newApartment.pricePerDay}
                    onChange={handleInputChange}
                />
                <button type="button" onClick={handleCreateApartment}>
                    Create new apartment
                </button>
            </form>
        </div>
    );
}

export default CreateApartment;
