import { useState } from'react';
import { Divider, theme } from 'antd';
import { BoolSetter, ColorSetter } from './setters';
import type { Color } from 'antd/es/color-picker';

export const App = () => {
  const [bool, setBool] = useState<boolean>(false);

  const { token } = theme.useToken();
  const [color, setColor] = useState<Color | string>(token.colorPrimary);

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
    </>
  );
}
