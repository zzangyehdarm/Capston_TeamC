// import DatePicker from "react-date-picker";
// import "react-date-range/dist/styles.css"; // main css file
// import "react-date-range/dist/theme/default.css"; // theme css file
// import { Calendar } from "react-date-range";
// import * as locales from "react-date-range/dist/locale";
// import { useState } from "react";
// import * as S from "./dataRangePicker.styles";

// // 출처
// export default function DataRangePicker() {
//   const [locale] = useState("ko");
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());

//   const onChangeStartDate = (item: Date) => {
//     setStartDate(item);
//     console.log(item);
//   };

//   const onChangeEndDate = (item: Date) => {
//     setEndDate(item);
//     console.log(item);
//   };

//   return (
//     <>
//       <S.Label>일자</S.Label>
//       <S.Input type="text" />
//       <S.Label>~</S.Label>

//       <S.Input type="text" />
//       <Calendar
//         onChange={(item) => onChangeStartDate(item)}
//         locale={locales[locale]}
//         date={startDate}
//         color="#6400FF"
//         dateDisplayFormat="MM.dd.yyyy"
//       />
//       <Calendar
//         onChange={(item) => onChangeEndDate(item)}
//         locale={locales[locale]}
//         date={endDate}
//         color="#6400FF"
//         dateDisplayFormat="MM.dd.yyyy"
//       />
//     </>
//   );
// }