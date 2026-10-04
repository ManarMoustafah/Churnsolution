import {
  useLoaderData,
  Link,
  redirect,
  type LoaderFunctionArgs,
  useRouteError,
  isRouteErrorResponse,
} from "react-router";
import { doc, getDoc } from "firebase/firestore";
// @ts-ignore
import { db } from "../config/firebase";

// 1. LOADER: Fetch data for a single article using the ID from the URL.
export async function loader({ params }: LoaderFunctionArgs) {
  const id = params.id;

  if (!id) {
     return redirect("../Blog");
  }

  // read from database
  const docRef = doc(db, "Blog", id);
  const data = await getDoc(docRef);

  if (!data.exists()) {
    throw new Response("Article Not Found", { status: 404 });
  }

  return {
    id: data.id,
    ...data.data(),
  };
}
export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <div className="errorPage">
        <h1>This page doesn't seem to exist.</h1>
        <p>It looks like the link pointing here was faulty. Maybe try searching?</p>
      </div>
    );
  }

  return <h1>حدث خطأ غير متوقع!</h1>;
}

// COMPONENT===================================>
export default function Article() {
  // loader
  const article = useLoaderData() as any;

  const aditTitle = (title: string) => {
    return title.toLowerCase().trim().replace(/\s+/g, "-");
  };

  return (
    <div className="ArticleDetailPage">
      <div className="RigthArticleDetailPage">
        <div className="RigthArticleDetailPage-top">
          <p className="Green-ARTICLE">ARTICLE</p>
          <h1 className="ArticleTitle">{article.Article_name}</h1>
          <img
            className="ArticleImg"
            src={
              article.Article_img ??
              "https://churnsolution.com/wp-content/uploads/2026/07/subscription-churn-dashboard-the-2026-guide-to-actionable-revenue-intelligence.jpg"
            }
            alt={article.Article_name}
          />
        </div>
        <div className="RigthArticleDetailPage-bottom">
          <p className="ArticleIntro"> {article.Article_intro}</p>
          <div className="ArticleSections">
            {article.Article_sections?.map(
              (
                section: {
                  sections_tittel?: string;
                  sections_content?: string;
                },
                index: number,
              ) => {

                  const sectionId = aditTitle(section.sections_tittel+"sectionId");
                  const contentsId = aditTitle(section.sections_tittel+"contentsId");
                return (
                  <div key={index} id={sectionId}>
                    <a className={`sections_tittel`} href={`#${contentsId}`} >
                      {section.sections_tittel}
                    </a>
                    <p className="sections_content">
                      {section.sections_content}
                    </p>
                  </div>
                );
              },
            )}
          </div>
        </div>
      </div>
      <div className=" LeftArticleDetailPage">
        <div className="LeftArticleDetailPageTop">
          <div className="ContentsTittel">Table Of Contents</div>
          <div className="TableOfContents">
            <ol className="menu_tittel_ol">
              {article.Article_sections?.map(
                (section: { sections_tittel?: string }, index: number) => {
                  if (!section.sections_tittel) return null;
                  const sectionId = aditTitle(section.sections_tittel+"sectionId");
                  const contentsId = aditTitle(section.sections_tittel+"contentsId");

                  return (
                    <li key={index} className="menu_tittel">
                      <a href={`#${sectionId}`} className="menu_tittel-link" id={contentsId}>
                        {section.sections_tittel}
                      </a>
                    </li>
                  );
                },
              )}
            </ol>
          </div>
        </div>
        <div className="smallBox">
          <img
            className="smallBoxImg"
            src="	https://churnsolution.com/wp-content/uploads/2023/09/cropped-logo-1-2.png"
          />
          <h3 className="smallBoxh">
            Churn solution that turns your customers right around.
          </h3>
          <div className="smallBoxButton">
            <a
              className="smallBoxButtonA"
              href="https://app.churnsolution.com/"
            >
              Join Us Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
