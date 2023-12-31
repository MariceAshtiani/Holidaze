// BaseURL

export const baseUrl = "https://api.noroff.dev/api/v1/holidaze";

// Different Endpoints for API

export const regAuth = "/auth/register";
export const loginAuth = "/auth/login";
export const profiles = "/profiles";
export const venues = "/venues?_owner=true&_bookings=true";
export const bookings = "/bookings";
export const profileUrl = `${baseUrl}/profiles`;
export const listings = "/venues";
export const venueBookings = "/bookings?_venue=true";
export const updateVenue = "/venues/";