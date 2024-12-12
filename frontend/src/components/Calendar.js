import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import { Component } from 'react';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      },
    };
  }

  onRangeChange = (ranges) => {
    const selection = ranges['selection'];
    this.setState({ selection });
    if (this.props.onDateRangeChange) {
      this.props.onDateRangeChange(selection);
    }
  };

  render() {
    return (
      <div>
        <div className='calenderBox'>
          <DateRangePicker
            onChange={this.onRangeChange}
            months={2}
            direction="horizontal"
            ranges={[this.state.selection]}
          />
        </div>
        <button className='chooseButton'>선택 완료</button>
      </div>
    );
  }
}

export default Calendar;
//https://velog.io/@dev_cecy/React-Date-Range-Picker-%EC%82%AC%EC%9A%A9%EB%B2%95