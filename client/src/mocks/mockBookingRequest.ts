import { BookingRequest } from '../interface/BookingRequest';
export const mockBookingRequest: BookingRequest[] = [
  {
    status: 'pending',
    sitterId: '1',
    start: new Date(2021, 9, 12, 19),
    end: new Date(2021, 9, 12, 19),
  },
  {
    status: 'pending',
    sitterId: '1',
    start: new Date(2021, 9, 8, 19, 15),
    end: new Date(2021, 9, 8, 19, 15),
  },
  {
    status: 'accepted',
    sitterId: '2',
    start: new Date(2021, 10, 22, 14),
    end: new Date(2021, 10, 22, 15),
  },
  {
    status: 'declined',
    sitterId: '1',
    start: new Date(2021, 8, 1, 11),
    end: new Date(2021, 8, 1, 15),
  },
  {
    status: 'declined',
    sitterId: '3',
    start: new Date(2021, 10, 23, 14),
    end: new Date(2021, 10, 23, 15),
  },
];
