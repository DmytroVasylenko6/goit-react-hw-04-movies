import Navigation from '../Navigation';
import s from './AppBar.module.css';

const AppBar = () => {
  return (
    <header className={s.Header}>
      <Navigation />
    </header>
  );
};

export default AppBar;
