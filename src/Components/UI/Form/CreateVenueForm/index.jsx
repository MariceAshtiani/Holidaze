import { useForm, Controller, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import StyledForm from "./styled";
import BasicButton, { FormBtn } from "../../Buttons/styled";
import { useUserStore } from "../../../../Hooks/userStore";
import { HandleCreateVenueForm } from "../../../../Handlers/HandleCreateVenue";



const schema = Yup.object({
    name: Yup.string().required("Name for the venue is required"),
    description: Yup.string().required("Description is required"),
    media: Yup.array().of(Yup.string().url("Must be a valid URL")),
    price: Yup.number().typeError("Price must be a valid number").required("Price is required"),
    maxGuests: Yup.number().typeError("Max guests must be a valid number").required('Max guests is required'),
    rating: Yup.number().transform(value => (isNaN(value) ? undefined : value)).notRequired().min(0).max(5),
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
        lat: Yup.number().nullable().transform((value, originalValue) =>
        String(originalValue).trim() === "" ? null : value)
        .min(-90, "Latitude must be >= -90").max(90, "Latitude must be <= 90"),
        lng: Yup.number().nullable().transform((value, originalValue) =>
        String(originalValue).trim() === "" ? null : value)
        .min(-180, "Longitude must be >= -180").max(180, "Longitude must be <= 180"),
    }),
});


export default function CreateVenueForm() {
    const accessToken = useUserStore((state) => state.accessToken);
    const navigate = useNavigate();
    const { register, handleSubmit, control, setError, reset, formState: { errors } } = useForm({
        defaultValues: {
            rating: 0,
            location: {
                lat: 0,
                lng: 0
            }
        },
        resolver: yupResolver(schema)
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "media"
    });



    const onSubmit = async (data) => {
        console.log(data);
        if (data.rating === "") {
            data.rating = 0;
        }
        
        if (!data.location.lat) {
            data.location.lat = 0;
        }

        if (!data.location.lng) {
            data.location.lng = 0;
        }
        
        try {
            //Send request to API here
            const response = await HandleCreateVenueForm(data, accessToken);

            if (response && response.id) {
                toast.success("Venue created successfully!");
                setTimeout(() => {
                    navigate(`/listing/${response.id}`);
                }, 3000)
            } else {
                toast.error("Error creating venue");
            }
        } catch (error) {
            console.error(error);
            toast.error("Error creating venue");
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
                    <input {...register("meta.wifi")} type="checkbox" className="meta-check" value={true} />
                </div>

                <div className="meta-input">
                    <label>Parking</label>
                    <input {...register("meta.parking")} type="checkbox" className="meta-check" value={true}/> 
                </div>

                <div className="meta-input">
                    <label>Breakfast</label>
                    <input {...register("meta.breakfast")} type="checkbox" className="meta-check" value={true} />
                </div>
            
                <div className="meta-input">
                    <label>Pets Allowed</label>
                    <input {...register("meta.pets")} type="checkbox"  className="meta-check" value={true} />
                </div>
            </div>

            {/* Location Fields */}
            <label>Address</label>
            <input {...register("location.address")} placeholder="Address" />
            <p className="error">{errors.location?.address?.message}</p>

            <label>City</label>
            <input {...register("location.city")} placeholder="City" />
            <p className="error">{errors.location?.city?.message}</p>

            <label>Zip code</label>
            <input {...register("location.zip")} placeholder="Zip Code" />
            <p className="error">{errors.location?.zip?.message}</p>

            <label>Country</label>
            <input {...register("location.country")} placeholder="Country" />
            <p className="error">{errors.location?.country?.message}</p>

            <label>Continent</label>
            <input {...register("location.continent")} placeholder="Continent" />
            <p className="error">{errors.location?.continent?.message}</p>

            <label>Latitude</label>
            <input {...register("location.lat")} type="number" placeholder="Latitude" />
            <p className="error">{errors.location?.lat?.message}</p>

            <label>Longitude</label>
            <input {...register("location.lng")} type="number" placeholder="Longitude" />
            <p className="error">{errors.location?.lng?.message}</p>

            <BasicButton type="submit" className="create-btn">Create Venue</BasicButton>
        </StyledForm>
    );
}
