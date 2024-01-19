import style from "./style.module.css";

const Button = () => {
  return (
    <div className={style.btnBox}>
      <button className={style.translateBtn}>Translate</button>
    </div>
  );
};

export default Button;
