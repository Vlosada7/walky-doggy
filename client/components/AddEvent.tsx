import { useState } from 'react';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

type EventProps = {
  _id?: string;
  title: string;
  date: Date;
  venue: string;
};

type AddEventProps = {
  onAdd: (event: EventProps) => void;
};

const AddEvent = ({ onAdd }: AddEventProps) => {
  const [title, setTitle] = useState<string>('');
  const [date, setDate] = useState<Date | null>(null);
  const [venue, setVenue] = useState<string>('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (date !== null) {
      onAdd({ title, date, venue });
      setTitle('');
      setDate(null);
      setVenue('');
    }
  };

  const handleDateChange: ReactDatePickerProps['onChange'] = (date: Date) => {
    setDate(date);
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-title'>
        <h1>Book a Walk</h1>
      </div>
      <div className='form-control'>
        <label>DOG NAME</label>
        <input
          type='text'
          name='title'
          placeholder="your dog's name"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>DATE</label>
        <DatePicker
          className='date-picker'
          showTimeSelect
          required
          selected={date}
          onSelect={handleDateChange} //when day is clicked
          onChange={handleDateChange} //only when value has changed
          dateFormat='Pp'
        />
      </div>
      <div className='form-control'>
        <label>PICK-UP LOCATION</label>
        <input
          type='text'
          name='venue'
          placeholder='pick up address'
          required
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
        />
      </div>

      <input type='submit' value='BOOK' className='btn-block' />
    </form>
  );
};

export default AddEvent;
