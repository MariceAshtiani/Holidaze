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
import { formatDate } from "../../../Utils/DateFormatter";
ReactModal.setAppElement("#root");

export default function BookingCalendar({ selectedVenueId, isOpen, closeModal }) {
    const [availableDates, setAvailableDates] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formSubmittedSuccessfully, setFormSubmittedSuccessfully] = useState(false); 
    const { data } = ApiHook(`/venues/${selectedVenueId}?_bookings=true`, "GET");
    const user = useUserStore((state) => state.user);

    const onBookingSuccess = () => {
      setFormSubmittedSuccessfully(true);
    };

    useEffect(() => {
        if (data) {
          const venueBookings = data.bookings || [];
          setBookings(venueBookings);
      
          // Calculate available dates by filtering out booked date ranges
          const allDates = Array.from({ length: 365 }, (_, index) => {
            const currentDate = new Date();
            currentDate.setDate(currentDate.getDate() + index);
            return formatDate(currentDate);
          });
      
          const bookedDateRanges = venueBookings.map((booking) => ({
            startDate: formatDate(new Date(booking.dateFrom)),
            endDate: formatDate(new Date(booking.dateTo)),
          }));
      
          const available = allDates.filter(
            (date) =>
              !bookedDateRanges.some((booking) =>
                date >= booking.startDate && date <= booking.endDate
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
                    filterDate={(date) => availableDates.includes(formatDate(date))}
                    />
                    <div className="booking-button">
                      <BasicButton onClick={handleBookNowClick} className="bookNowBtn">Book Now</BasicButton>
                    </div> 
               </StyledCalendarContainer>

                {/*Modal for booking-form*/}
                <BookingModal isOpen={isModalOpen}>
                  <div className="bookingModal-content">
                    <BookingForm
                    venueId={selectedVenueId}
                    availableDates={availableDates}
                    onFormSubmit={HandleBookingForm}
                    onClose={handleModalClose}
                    user={user}
                    onBookingSuccess={onBookingSuccess}
                    />
                    </div>
                </BookingModal>
            </div>
    )
}