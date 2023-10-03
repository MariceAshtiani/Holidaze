import { useState, useEffect } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ApiHook from "../../../Hooks/apiFetch";
import BasicButton from "../Buttons/styled";
import ReactModal from "react-modal";
import { BookingModal } from "../../../Styles/ModalStyles";
import BookingForm from "../Form/BookingForm";
import StyledCalendarContainer from "./styled";
import { useUserStore } from "../../../Hooks/userStore";
import { HandleBookingForm } from "../../../Handlers/BookingFormSubmit";
ReactModal.setAppElement("#root");

export default function BookingCalendar({ selectedVenueId }) {
    const [availableDates, setAvailableDates] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { data } = ApiHook(`/venues/${selectedVenueId}?_bookings=true`, "GET");

    useEffect(() => {
        if (data) {
          const venueBookings = data.bookings || [];
          setBookings(venueBookings);
      
          // Calculate available dates by filtering out booked date ranges
          const allDates = Array.from({ length: 365 }, (_, index) => {
            const currentDate = new Date();
            currentDate.setDate(currentDate.getDate() + index);
            return currentDate;
          });
      
          const bookedDateRanges = venueBookings.map((booking) => ({
            startDate: new Date(booking.dateFrom),
            endDate: new Date(booking.dateTo),
          }));
      
          const available = allDates.filter(
            (date) =>
              !bookedDateRanges.some((booking) =>
                isDateInRange(date, booking.startDate, booking.endDate)
              )
          );
      
          setAvailableDates(available);
        }
      }, [data]);

    const handleBookNowClick = () => {
        setIsModalOpen(true);
      };
    
    const handleModalClose = () => {
        setIsModalOpen(false);
      };

    const handleSubmitBooking = async (formData) => {
        try {
          const accessToken = useUserStore((state) => state.accessToken);
            const bookingData = {
                name: formData.name,
                email: formData.email,
                dateFrom: formData.dateFrom,
                dateTo: formData.dateTo,
                guests: formData.guests,
                venueId: selectedVenueId,
            };

            await HandleBookingForm(bookingData, accessToken);
            handleModalClose();
        } catch (error) {
            console.log(error);
        }
    };

    const isDateInRange = (dateToCheck, dateFrom, dateTo) => {
        const dateCheck = new Date(dateToCheck);
        const startDate = new Date(dateFrom);
        const endDate = new Date(dateTo);
      
        return dateCheck >= startDate && dateCheck <= endDate;
      };
      



    return (
            <div className="booking-calendar">
                <StyledCalendarContainer>

                <ReactDatePicker
                    selected={null} // No initial selected date
                    inline // Display the calendar inline without an input field
                    minDate={new Date()} // Can optionally set a minimum date, like today
                    filterDate={(date) =>
                        !bookings.some((booking) =>
                        isDateInRange(date, booking.dateFrom, booking.dateTo)
                        )
                    }
                    />
                    <BasicButton onClick={handleBookNowClick} className="bookNowBtn">Book Now</BasicButton>
                </StyledCalendarContainer>

                {/*Modal for booking-form*/}
                <BookingModal isOpen={isModalOpen}>
                  <div className="bookingModal-content">
                    <BookingForm
                    venueId={selectedVenueId}
                    availableDates={availableDates}
                    onSubmit={handleSubmitBooking}
                    onClose={handleModalClose}
                    />
                    </div>
                </BookingModal>
            </div>
    )
}