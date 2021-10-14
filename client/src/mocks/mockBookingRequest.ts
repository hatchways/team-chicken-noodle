import { BookingRequest } from '../interface/BookingRequest';
export const mockBookingRequest: BookingRequest[] = [
  {
    _id: '1',
    status: 'pending',
    sitterId: '1',
    start: new Date(2021, 9, 12, 19),
    end: new Date(2021, 9, 12, 19),
  },
  {
    _id: '2',
    status: 'pending',
    sitterId: '1',
    start: new Date(2021, 9, 8, 19, 15),
    end: new Date(2021, 9, 8, 19, 15),
  },
  {
    _id: '3',
    status: 'accepted',
    sitterId: '2',
    start: new Date(2021, 10, 22, 14),
    end: new Date(2021, 10, 22, 15),
  },
  {
    _id: '4',
    status: 'declined',
    sitterId: '1',
    start: new Date(2021, 8, 1, 11),
    end: new Date(2021, 8, 1, 15),
  },
  {
    _id: '5',
    status: 'declined',
    sitterId: '3',
    start: new Date(2021, 10, 23, 14),
    end: new Date(2021, 10, 23, 15),
  },
];
