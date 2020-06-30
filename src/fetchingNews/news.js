import { apiKey, newsUrl, countryCode } from "../config/restApiConfig";

export async function getArticles(category = "general") {
  try {
    let article = await fetch(
      `${newsUrl}?country=${countryCode}&category=${category}&apiKey=${apiKey}`
    );
    // console.log(article);

    let result = await article.json();
    return result.articles;
  } catch (error) {
    console.log(error);
  }
}
