import { redirect, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import MainTranslate from "../components/MainTranslate";
import { store, textActions } from "../store/store";

const HomePage = () => {
  const languageData = useLoaderData();
  const languageList = languageData;
  return (
    <>
      <div>
        <Header></Header>
        <MainTranslate languages={languageList}></MainTranslate>
      </div>
    </>
  );
};
export default HomePage;

export async function loader() {
  const response = await fetch(
    "https://google-translate1.p.rapidapi.com/language/translate/v2/languages",
    {
      headers: {
        "Accept-Encoding": "application/gzip",
        "X-RapidAPI-Key": "3f2fef253cmsh71d65c8adc90f03p14c88fjsnbd04e335f3e9",
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      },
    }
  );
  console.log("response.body");
  console.log(response.body);
  console.log(response.ok);
  if (!response.ok) {
    console.log("Error");
    return { error: "Some error occurred" };
  }
  const resData = await response.json();
  return resData.data.languages;
}

export async function action({ request, params }) {
  const data = await request.formData();
  const body = {
    sourceText: data.get("sourceText"),
    sourceLangauge: data.get("sourceLanguage"),
    targetText: data.get("targetText"),
    targetLangauge: data.get("targetLanguage"),
  };
  const response = await fetch(
    "https://google-translate1.p.rapidapi.com/language/translate/v2",
    {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "application/gzip",
        "X-RapidAPI-Key": "3f2fef253cmsh71d65c8adc90f03p14c88fjsnbd04e335f3e9",
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      },
      body: new URLSearchParams({
        q: body.sourceText,
        target: body.targetLangauge,
        source: body.sourceLangauge,
      }),
    }
  );
  if (!response.ok) {
    console.log("Error Occured");
    return redirect("/");
  }
  const result = await response.json();
  store.dispatch(
    textActions.translateText({
      sourceText: body.sourceText,
      targetText: result.data.translations[0].translatedText,
    })
  );
  return redirect("/");
}
