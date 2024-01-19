import { useSelector } from "react-redux";
import style from "./style.module.css";

const TargetSource = ({ languages }) => {
  const currentText = useSelector((state) => {
    return state.translate.targetText;
  });
  return (
    <>
      <div className={style.secondBox}>
        <div className={style.optionBox}>
          <span>Languages :</span>
          <select name="targetLanguage">
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
        <input
          name="targetText"
          defaultValue={currentText}
          className={style.translatedText}
        />
      </div>
    </>
  );
};

export default TargetSource;
