import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ApartmentsList() {

    const { apartmentId } = useParams();
    const [apartments, setApartmentInfo] = useState([])


    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/apartments`)
            .then(response => { 
                console.log(response);
                setApartmentInfo(response.data) })
            .catch(e => console.log("error", e))
    }, [])
    return (
        <div key={apartments.id}>
            <h1>Apartment list</h1>
            {apartments.map((apartment) => {
                return(
                <div key={apartment.id} >
                    <h2>{apartment.name}</h2>
                    <p>Title: {apartment.title}</p>
                    <p>Price per day: ${apartment.pricePerDay}</p>
                    <img src={apartment.img} alt="" />
                </div>
)})}
        </div>

            );


            }


    export default ApartmentsList;

