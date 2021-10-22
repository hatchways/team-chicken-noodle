export interface BookingRequest {
  _id: string;
  status: string;
  sitterId: string;
  start: Date;
  end: Date;
  isNextBooking?: boolean;
}
