import s from './Container.module.css';

const Container = ({ title, children }) => {
  return (
    <section className={s.container}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Container;
