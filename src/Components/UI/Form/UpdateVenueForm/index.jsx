import { useForm, Controller, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import StyledForm from "./styled";
import BasicButton, { FormBtn, DeleteButton, SmallBtn } from "../../Buttons/styled";
import { useEffect } from "react";
import Loader from "../../Loader";
import { HandleUpdateVenue } from "../../../../Handlers/HandleEditVenue";
import { HandleDeleteVenue } from "../../../../Handlers/HandleDelete";
import { useUserStore } from "../../../../Hooks/userStore";
import { DeleteModal } from "../../../../Styles/ModalStyles";
import ReactModal from "react-modal";
ReactModal.setAppElement("#root");



const schema = Yup.object({
    name: Yup.string(),
    description: Yup.string(),
    media: Yup.array().of(Yup.string().url("Must be a valir URL")),
    price: Yup.number().typeError("Price must be a valid number"),
    maxGuests: Yup.number().typeError("Max guests must be a valid number"),
    rating: Yup.number().typeError("Rating must be a valid number").min(0, "Rating must be >= 0").max(5, "Rating must be <= 5"),
    meta: Yup.object({
        wifi: Yup.boolean(),
        parking: Yup.boolean(),
        breakfast: Yup.boolean(),
        pets: Yup.boolean()
    }),
    location: Yup.object({
        address: Yup.string(),
        city: Yup.string(),
        zip: Yup.string(),
        country: Yup.string(),
        continent: Yup.string(),
        lat: Yup.number(),
        lng: Yup.number()
    }),
});


export default function UpdateVenueForm({ venueData }) {
    const accessToken = useUserStore((state) => state.accessToken);
    const navigate = useNavigate();
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const { register, handleSubmit, control, setError, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "media"
    });

    useEffect(() => {
        if (venueData) {
            reset(venueData);
            if (venueData.media && venueData.media.length) {
                for (let i = 0; i < venueData.media.length; i++) {
                    append(venueData.media[i]);
                }
            }
        }
    }, [venueData, reset, append]);

    const toggleDeleteModal = () => {
        setShowDeleteModal(!showDeleteModal);
    }



    if (!venueData) {
        return <Loader />
    }

    const onSubmit = async (data) => {
        try {
            //Send request to API
            const updatedVenue = await HandleUpdateVenue(venueData.id, data, accessToken);
            
            toast.success("Venue updated successfully!");
                setTimeout(() => {
                    navigate(`/listing/${updatedVenue.id}`);
                }, 3000)
        } catch (error) {
            console.error(error);
            toast.error("Error updating venue");
        }
    };

    const handleDelete = async () => {
        try {
            await HandleDeleteVenue(venueData.id, accessToken);
            toast.success("Venue deleted successfully!");
                setTimeout(() => {
                    navigate("/listings");
                }, 3000)
        } catch (error) {
            console.error(error);
            toast.error("Error deleting venue");
        }
    };

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <label>Title</label>
            <input {...register("name")} placeholder="Name" />
            <p className="error">{errors.name?.message}</p>

            <label>Description</label>
            <textarea {...register("description")} placeholder="Description"></textarea>
            <p className="error">{errors.description?.message}</p>

            <label>Images</label>
            {fields.map((field, index) => (
                <div key={field.id}>
                    <input
                    {...register(`media.${index}`)}
                    defaultValue={field}
                    placeholder="Image URL"
                    />
                    <FormBtn type="button" onClick={() => remove(index)}>Remove</FormBtn>
                </div>
            ))}
            <FormBtn type="button" onClick={() => append("")}>Add image</FormBtn>

            <label>Price</label>
            <input {...register("price")} type="number" placeholder="Price" />
            <p className="error">{errors.price?.message}</p>

            <label>Maximum number of guests</label>
            <input {...register("maxGuests")} type="number" placeholder="Max Guests" />
            <p className="error">{errors.maxGuests?.message}</p>

            <label>Rating</label>
            <input {...register("rating")} type="number" placeholder="Rating (0-5)" />
            <p className="error">{errors.rating?.message}</p>

            {/* Meta Fields */}
            <div className="metaInputs">
                <div className="meta-input">
                    <label>Wifi</label>
                    <input {...register("meta.wifi")} type="checkbox" className="meta-check" />
                </div>

                <div className="meta-input">
                    <label>Parking</label>
                    <input {...register("meta.parking")} type="checkbox" className="meta-check" /> 
                </div>

                <div className="meta-input">
                    <label>Breakfast</label>
                    <input {...register("meta.breakfast")} type="checkbox" className="meta-check" />
                </div>
            
                <div className="meta-input">
                    <label>Pets Allowed</label>
                    <input {...register("meta.pets")} type="checkbox"  className="meta-check" />
                </div>
            </div>

            {/* Location Fields */}
            <label>Address</label>
            <input {...register("location.address")} placeholder="Address" />

            <label>City</label>
            <input {...register("location.city")} placeholder="City" />

            <label>Zip code</label>
            <input {...register("location.zip")} placeholder="Zip Code" />

            <label>Country</label>
            <input {...register("location.country")} placeholder="Country" />

            <label>Continent</label>
            <input {...register("location.continent")} placeholder="Continent" />

            <label>Latitude</label>
            <input {...register("location.lat")} type="number" placeholder="Latitude" />

            <label>Longitude</label>
            <input {...register("location.lng")} type="number" placeholder="Longitude" />

            <BasicButton type="submit" className="create-btn">Update Venue</BasicButton>
            <DeleteButton type="button" className="create-btn" onClick={toggleDeleteModal}>Delete</DeleteButton>

            <DeleteModal
            isOpen={showDeleteModal}
            onRequestClose={toggleDeleteModal}>
                <div className="deleteModal-content">
                    <h1>Are you sure you want to delete this venue?</h1>
                    <p>This action cannot be undone.</p>
                <div className="buttons">
                    <DeleteButton type="button" onClick={handleDelete}>Delete</DeleteButton>
                    <SmallBtn type="button" onClick={toggleDeleteModal}>Cancel</SmallBtn>
                </div>
                </div>
            </DeleteModal>

        </StyledForm>
    );
}
