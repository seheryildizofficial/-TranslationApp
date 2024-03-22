import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../../constant";

export const getLanguages = createAsyncThunk(
  "translate/getLanguages",
  async () => {
    const res = await axios.request(options);
    //aksiyonun payload ı olacak veriyi return etme
    return res.data.data.languages;
  }
);

//çeviri işlemini yapıp sonucunu stora aktaran aksiyon
export const translateText = createAsyncThunk(
  "translate/text",
  async ({ text, sourceLang, targetLang }) => {
    const params = new URLSearchParams();
    params.set("source_language", sourceLang.value);
    params.set("target_language", targetLang.value);
    params.set("text", text);

    const options = {
      method: "POST",
      url: "https://text-translator2.p.rapidapi.com/translate",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "08e43dce96msheeeda330a374c55p16fab4jsn908e17c568f7",
        "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
      },
      data: params,
    };

    const res = await axios.request(options);
    console.log(res);
    //aksiyonun payload'ını belirleme
    return res.data.data.translatedText;
  }
);
