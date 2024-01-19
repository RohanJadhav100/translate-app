import Button from "./Button";
import FromSource from "./FromSource";
import TargetSource from "./TargetSource";
import style from "./style.module.css";
import { Form } from "react-router-dom";

const MainTranslate = ({ languages }) => {
  return (
    <>
      <div className={style.container}>
        <Form method="post">
          <div className={style.translateBox}>
            <FromSource languages={languages}></FromSource>
            <TargetSource languages={languages}></TargetSource>
          </div>
          <Button></Button>
        </Form>
      </div>
    </>
  );
};

export default MainTranslate;
