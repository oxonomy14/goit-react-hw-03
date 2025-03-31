import css from "./Description.module.css";

const Description = () => {
  return (
    <div className={css.description}>
      <h2>
        <span>Sip</span> Happens Café
      </h2>
      <p>
        Please leave your feedback <span>about</span> our service
        <span>by</span> selecting one <span> of the</span>
        options <span>below</span>.
      </p>
    </div>
  );
};

export default Description;
