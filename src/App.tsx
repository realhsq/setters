import { useState } from'react';
import { Divider, theme } from 'antd';
import useStateWithLog from './utils/useStateWithLog';
import { BoolSetter, ColorSetter, DateMonthSetter, DateSetter, DateYearSetter, DateRangeSetter, FunctionSetter } from './setters';
import type { Color } from 'antd/es/color-picker';
import type { RangeValue } from './setters/daterangesetter';
import { Dayjs } from 'dayjs';

export const App = () => {
  const [bool, setBool] = useStateWithLog<boolean>(false);

  const { token } = theme.useToken();
  const [color, setColor] = useStateWithLog<Color | string>(token.colorPrimary);

  const [dateMonth, setDateMonth] = useStateWithLog<Dayjs | null>(null);

  const [date, setDate] = useStateWithLog<Dayjs | null>(null);

  const [dateYear, setDateYear] = useStateWithLog<Dayjs | null>(null);

  const [dateRange, setDateRange] = useStateWithLog<RangeValue>(null);

  return (
    // <div className={clsx(styles.appWrapper)}>
    //   <header className={styles.appHeader}>header</header>
    //   <main className={styles.appMain}>
    //     <aside className={styles.appSidebar}>left sidebar</aside>
    //     <section className={styles.appSectionCenter}>
    //       <ul className={styles.folders}>
    //         <li className={styles.folder}>Folder 1</li>
    //         <li className={styles.folder}>Folder 2</li>
    //         <li className={styles.folder}>Folder 3</li>
    //       </ul>
    //     </section>
    //     <nav className={styles.appSidebar}>right menu</nav>
    //   </main>
    //   <footer className={styles.appFooter}>footer</footer>
    // </div>
    <>
      <BoolSetter value={bool} onChange={setBool} />
      <Divider />
      <ColorSetter value={color} onChange={setColor} />
      <Divider />
      <DateMonthSetter value={dateMonth} onChange={setDateMonth} />
      <Divider />
      <DateSetter value={date} onChange={setDate} />
      <Divider />
      <DateYearSetter value={dateYear} onChange={setDateYear} />
      <Divider />
      <DateRangeSetter value={dateRange} onChange={setDateRange} />
      <Divider />
    </>
  );
}
