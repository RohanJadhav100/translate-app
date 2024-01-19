import style from "./style.module.css";

const FromSource = ({ languages }) => {
  return (
    <>
      <div className={style.firstBox}>
        <div className={style.optionBox}>
          <span>Languages :</span>
          <select name="sourceLanguage">
            {languages.map((e) => {
              if (e.language == "en") {
                return (
                  <option key={e.language} defaultValue={true}>
                    {e.language}
                  </option>
                );
              }
              return <option key={e.language}>{e.language}</option>;
            })}
          </select>
        </div>
        <input name="sourceText" defaultValue="Hello" />
      </div>
    </>
  );
};
export default FromSource;
