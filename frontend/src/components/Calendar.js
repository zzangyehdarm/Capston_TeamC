import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import { Component } from 'react';


class Calendar extends Component {
  constructor(props) {
    super(props); // React.Component의 생성자 메소드를 먼저 실행
    this.state = { // 이 컴포넌트의 state 설정
      selection: {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
      },
      compare: {
        startDate: addDays(new Date(), 1),
        endDate: addDays(new Date(), 3),
        key: 'compare'
      }
    };
  };
  onRangeChange = (ranges) => {
    console.log(ranges['selection']);
    console.log(ranges['compare']);
    if(ranges['selection']!=null){
      this.setState({
        selection:ranges['selection']
      })
    }
    if(ranges['compare']!=null){
      this.setState({
        compare:ranges['compare']
      })
    }
  }
  render(){
    return (
      <div>
        <div className='calenderBox'>
          <DateRangePicker
            onChange={this.onRangeChange}
            months={2}
            // minDate={addDays(new Date(), -300)}
            // maxDate={addDays(new Date(), 900)}
            direction="horizontal"
            ranges={[this.state.selection]}
          />
          
        </div>
        <button className='chooseButton'>선택 완료</button>
      </div>
    )
  }
}

export default Calendar;