
import * as Yup from "yup";
import StyledBookingForm from "./styled";
import BasicButton, {SmallBtn} from "../../Buttons/styled";
import ReactDatePicker from "react-datepicker";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { compareAsc } from "date-fns";

const schema = Yup.object({
    name: Yup.string()
    .required('Name is required'),
    email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
    dateFrom: Yup.date()
    .required('Start date is required'),
    dateTo: Yup.date()
    .required('End date is required')
    .test('is-after', 'End date must be after start date', function (value, { parent }) {
        return compareAsc(parent.dateFrom, value) === -1;
    }),
    guests: Yup.number()
    .integer().min(1, 'Minimum 1 guest')
    .required('Number of guests is required'),
    venueId: Yup.string()
    .required('Venue ID is required'),
})


export default function BookingForm({ venueId, availableDates, onSubmit, onClose }) {
const initialValues = {
        name: "",
        email: "",
        dateFrom: "",
        dateTo: "",
        guests: "",
        venueId: venueId,
    };

    const validate = (values) => {
        const errors = {};
        if (!values.dateFrom) {
            errors.dateFrom = 'Start date is required';
        }

        if (!values.dateTo) {
            errors.dateTo = 'End date is required';
        }

        return errors;
    };

    const formik = useFormik({
    initialValues,
    validationSchema: schema,
    validate,
    onSubmit: async (values) => {
        try {
            await onSubmit(values);
            onClose();
        } catch (error) {
            toast(`An error occurred: ${error}`, {
                poition: "center",
                type: "error",
            });
        }
    },
});

function isDateEqual(date1, date2) {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  }

return (
    <div>
        
        <StyledBookingForm onSubmit={formik.handleSubmit}>
            <h1>Create your booking</h1> 
            <div className="booking-form">

                <div className="input-group">
                    <div>
                        <label>Name:</label>
                        <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div className="error">{formik.errors.name}</div>
                        ): null}
                    </div>

                    <div>
                        <label>Email</label>
                        <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="error">{formik.errors.email}</div>
                        ) : null}
                    </div>

                    

                    <div>
                        <label>How many guests?</label>
                        <input
                        type="number"
                        name="guests"
                        placeholder="Number of guests"
                        value={formik.values.guests}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.guests && formik.errors.guests ? (
                            <div className="error">{formik.errors.guests}</div>
                        ) : null}
                    </div>

                </div>

                <div className="date-input">
                <label>From date:</label>
                <ReactDatePicker
                    name="dateFrom"
                    selected={formik.values.dateFrom}
                    onChange={(date) => formik.setFieldValue("dateFrom", date)}
                    minDate={new Date()}
                    filterDate={(date) =>
                    availableDates.some((availableDate) =>
                        isDateEqual(date, availableDate)
                    )
                    }
                />
                {formik.touched.dateFrom && formik.errors.dateFrom ? (
                    <div className="error">{formik.errors.dateFrom}</div>
                ) : null}
                </div>

                <div className="date-input">
                <label>To date:</label>
                <ReactDatePicker
                    name="dateTo"
                    selected={formik.values.dateTo}
                    onChange={(date) => formik.setFieldValue("dateTo", date)}
                    minDate={new Date()}
                    filterDate={(date) =>
                    availableDates.some((availableDate) =>
                        isDateEqual(date, availableDate)
                    )
                    }
                />
                {formik.touched.dateTo && formik.errors.dateTo ? (
                    <div className="error">{formik.errors.dateTo}</div>
                ) : null}
                </div>

                <div className="venue-input">
                    <label>Venue:</label>
                    <input type="text" name="venueId" value={venueId} readOnly />
                </div>

                <div className="BookingBtnGroup">
                    <BasicButton type="submit">Book now</BasicButton>
                    <SmallBtn onClick={onClose}>Cancel</SmallBtn>
                </div>
                
            </div>
        </StyledBookingForm>
        </div>
    );
};