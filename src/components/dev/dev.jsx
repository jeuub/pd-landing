import "./dev.css";

const Dev = ({ className, img, name, resp, text, children }) => {
  return (
    <article className={`dev ${className}`}>
      {img?
        <img
        className={"dev__img"}
        src={img}
        width={150}
        height={150}
        alt={name}
      />
      :null
      }
      <h3 className={"dev__name"}>{name}</h3>
      <h4 className={"dev__resp"}>{resp}</h4>
      <p className={"dev__text"}>{text}</p>
      {children}
    </article>
  );
};

export default Dev;
