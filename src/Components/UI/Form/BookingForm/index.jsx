
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import StyledBookingForm from "./styled";
import BasicButton, {SmallBtn} from "../../Buttons/styled";
import ReactDatePicker from "react-datepicker";
import { toast } from "react-toastify";
import { compareAsc } from "date-fns";
import { HandleBookingForm } from "../../../../Handlers/BookingFormSubmit";
import { useUserStore } from "../../../../Hooks/userStore";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../../../Utils/DateFormatter";

const schema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required'),
    dateFrom: Yup.date().required('Start date is required'),
    dateTo: Yup.date().required('End date is required')
    .test('is-after', 'End date must be after start date', function (value, { parent }) {
        return compareAsc(parent.dateFrom, value) === -1;
    }),
    guests: Yup.number().typeError("Number of guests must be a valid number").integer().min(1, 'Minimum 1 guest')
    .required('Number of guests is required'),
    venueId: Yup.string().required('Venue ID is required'),
})


export default function BookingForm({ venueId, availableDates, onClose, user, onBookingSuccess }) {
    const accessToken = useUserStore((state) => state.accessToken);
    const { register, control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: user ? user.name : "",
            email: user ? user.email : "",
        },
    });

    const navigate = useNavigate();

    function isDateEqual(date1, date2) {
        return (
        date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear()
        );
    };

    
    

    const onSubmit = async (data) => {
        // send request to the API
        try {
            const response = await HandleBookingForm(data, accessToken);

            console.log(response);

            toast.success("Booking created successfully!")
            setTimeout(() => {
                navigate("/bookingconfirmation");
            }, 3000);

            
        } catch (error) {
            console.error("Error creating booking", error);
            toast.error("Failed to create booking");
        }
    };

return (
    <div>
        
        <StyledBookingForm onSubmit={handleSubmit(onSubmit)}>
            <h1>Create your booking</h1> 
            <div className="booking-form">

                <div className="input-group">
                    <div>
                        <label>Name</label>
                        <input {...register("name")} />
                        <p className="error">{errors.name?.message}</p>
                    </div>

                    <div>
                        <label>Email</label>
                        <input {...register("email")} />
                        <p className="error">{errors.email?.message}</p>
                    </div>

                    <div>
                        <label>Number of guests</label>
                        <input {...register("guests")} />
                        <p className="error">{errors.guests?.message}</p>
                    </div>
                </div>

                <div className="date-input">
                <label>From date:</label>
                <Controller
                    name="dateFrom"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <ReactDatePicker
                            selected={value}
                            onChange={onChange}
                            minDate={new Date()}
                            filterDate={(date) => availableDates.includes(formatDate(date))}
                        />
                    )}
                />
                <p className="error">{errors.dateFrom?.message}</p>
                </div>

                <div className="date-input">
                    <label>To date:</label>
                    <Controller
                        name="dateTo"
                        control={control} 
                        render={({ field: { onChange, value } }) => (
                            <ReactDatePicker
                                selected={value}
                                onChange={onChange}
                                minDate={new Date()}
                                filterDate={(date) => availableDates.includes(formatDate(date))}
                            />
                        )}
                    />
                    <p className="error">{errors.dateTo?.message}</p>
                </div>

                <div className="venue-input">
                    <label>Venue:</label>
                    <input type="text" name="venueId" {...register("venueId")} value={venueId} readOnly />
                </div>

                <div className="BookingBtnGroup">
                    <BasicButton type="submit">Book now</BasicButton>
                    <SmallBtn onClick={onClose} className="cancel-btn">Cancel</SmallBtn>
                </div>
                
            </div>
        </StyledBookingForm>
        </div>
    );
};