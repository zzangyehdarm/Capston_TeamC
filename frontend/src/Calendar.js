import React, { useState } from "react";
import DatePicker from 'react-datepicker';


const ReactDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());

	return (
		<div>
			<DatePicker
			  selected={startDate}
			  onChange={(date) => setStartDate(date)}
			  dateFormat="yyyy-MM-dd"
			/>
		</div>
  );
};

export default ReactDatePicker;