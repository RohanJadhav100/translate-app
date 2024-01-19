import style from "./style.module.css";

const Header = () => {
  return (
    <>
      <header>
        <div className={style.container}>
          <div className={style.banner}>
            <div>
              <span>TextTransPro</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
