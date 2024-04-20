import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import ptBrLocale from '@fullcalendar/core/locales/pt-br'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const today = new Date();

  const renderDayCell = (arg: any) => {
    if (arg.date.getDate() === today.getDate() && arg.date.getMonth() === today.getMonth() && arg.date.getFullYear() === today.getFullYear()) {
      return (
        <div
          className="fc-daygrid-day-frame"
          style={{
            color: 'red'
          }}>
          {arg.dayNumberText}
        </div>
      );
    }
    return arg.dayNumberText;
  };
  return (
    <main className={`flex min-h-screen w-full  flex-col ${inter.className}`}>
      <div style={{ width: '100%', minHeight: '600px' , backgroundColor: '#FFFFFF', color: 'black'}}>
        <FullCalendar
          height={"600px"}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          initialDate={today}
          weekends={true}
          locale={ptBrLocale}
          dayCellContent={renderDayCell}
          eventColor='red'
          events={[
            { title: 'Doação', date: '2024-04-27' },
          ]}
        />

      </div>
    </main>
  );
}
