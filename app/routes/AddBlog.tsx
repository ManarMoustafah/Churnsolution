// // 1. استيراد الأدوات اللازمة
// import { useLoaderData } from "react-router";
// // افترض أن هذا هو ملف إعدادات Firebase الخاص بك
// // @ts-expect-error Firebase config is currently a JavaScript module without declarations.
// import { db } from "../config/firebase";
// import { collection, getDocs } from "firebase/firestore";

// // ==========================================
// // 2. الـ Loader: يعمل على السيرفر فقط
// // ==========================================
// export async function loader() {
//   try {
//     // أ. الذهاب إلى مجموعة Blog في Firestore
//     const blogCollection = collection(db, "Blog");

//     // ب. جلب كل المستندات
//     const querySnapshot = await getDocs(blogCollection);

//     // ج. تحويل البيانات إلى مصفوفة عادية
//     const posts = querySnapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));

//     // د. إرجاع البيانات كـ JSON لتذهب إلى الواجهة
//     return { posts };

//   } catch (error) {
//     return { posts: [], error: "حدث خطأ أثناء جلب البيانات" };
//   }
// }

// // ==========================================
// // 3. الواجهة (Component): تعمل على المتصفح
// // ==========================================
// export default function Blog() {
//   // نستقبل البيانات التي أرسلها الـ Loader
//   const { posts } = useLoaderData<typeof loader>();

//   return (
//     <div style={{ padding: "20px" , marginTop:"100px"}}>
//       <h1>مقالات المدونة</h1>

//       {posts.length === 0 ? (
//         <p>لا توجد مقالات حالياً.</p>
//       ) : (
//         <ul>
//           {posts.map((post: any) => (
//             <li key={post.id} style={{ marginBottom: "15px", border: "1px solid #ccc", padding: "10px" }}>
//               {/* عرض البيانات القادمة من فايربيس */}
//               <h2>{post.title}</h2>
//               <p><strong>الكاتب:</strong> {post.author_name}</p>
//               <p>{post.description}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// import {
//   collection,
//   getDocs,
//   limit,
//   orderBy,
//   startAfter,
//   query, // استيراد دالة query الحقيقية
//   type QueryDocumentSnapshot,
//   type DocumentData,
// } from "firebase/firestore";
// import { db } from "../config/firebase";

// import {
//     Link,
//   useLoaderData,
//   useSearchParams,
//   type LoaderFunctionArgs,
// } from "react-router";

// const ITEMS_PER_PAGE = 9;

// // تعريف نوع البيانات المتوقعة للمقال
// interface Article {
//   id: string;
//   title: string;
//   description: string;
//   image: string;
//   author: string;
//   date: string;
// }

// export async function loader({ request }: LoaderFunctionArgs) {
//   const url = new URL(request.url);
//   const page = parseInt(url.searchParams.get("page") || "1", 10);
//   const offset = (page - 1) * ITEMS_PER_PAGE;

//   const blogRef = collection(db, "articles");

//   // الاستعلام الأساسي
//   let q = query(blogRef, orderBy("date", "desc"), limit(ITEMS_PER_PAGE));
//   let lastVisible: QueryDocumentSnapshot<DocumentData> | null = null;

//   if (page > 1) {
//     // جلب العناصر التي يجب تخطيها للحصول على آخر وثيقة
//     const skipQuery = query(blogRef, orderBy("date", "desc"), limit(offset));
//     const skipSnapshot = await getDocs(skipQuery);

//     if (!skipSnapshot.empty) {
//       lastVisible = skipSnapshot.docs[skipSnapshot.docs.length - 1];

//       // تحديث الاستعلام ليبدأ بعد آخر وثيقة تم تخطيها
//       q = query(
//         blogRef,
//         orderBy("date", "desc"),
//         startAfter(lastVisible),
//         limit(ITEMS_PER_PAGE)
//       );
//     }
//   }

//   const querySnapshot = await getDocs(q);

//   // تحويل البيانات مع تحديد النوع
//   const articlesData: Article[] = querySnapshot.docs.map((doc) => {
//     const data = doc.data();
//     return {
//       id: doc.id,
//       title: data.title || "",
//       description: data.description || "",
//       image: data.image || "",
//       author: data.author || "Unknown",
//       // تحويل التاريخ بأمان
//       date: data.date?.toDate?.().toISOString() || new Date().toISOString(),
//     };
//   });

//   // ملاحظة: هذا الرقم ثابت حالياً. لجلبه ديناميكياً، تحتاج لإنشاء عداد في Firestore.
//   const totalArticles = 100;
//   const totalPages = Math.ceil(totalArticles / ITEMS_PER_PAGE);

//   return { articles: articlesData, currentPage: page, totalPages };
// }

// export default function Blog() {
//   const { articles, currentPage, totalPages } = useLoaderData<typeof loader>();
//   const [searchParams, setSearchParams] = useSearchParams();

//   const handlePageChange = (newPage: number) => {
//     if (newPage < 1 || newPage > totalPages) return;
//     setSearchParams({ page: newPage.toString() });
//   };

//   return (
//     <div className="BlogPage">
//       <p className="className-h1">Some of our featured articles</p>
//       <Link
//           to="/blog/add"
//           style={{
//             padding: "10px 20px",
//             background: "#1e293b",
//             color: "white",
//             textDecoration: "none",
//             borderRadius: "8px",
//             fontSize: "14px",
//           }}
//         >
//           + Add New Article
//         </Link>
//       <div className="BlogContent">
//         {articles.length === 0 ? (
//           <p>No articles found.</p>
//         ) : (
//           articles.map((article) => (
//             <div key={article.id} className="BlogCard">
//               <img src={article.image} alt={article.title} />
//               <h3>{article.title}</h3>
//               <p>{article.description}</p>
//               <div className="author-info">
//                 <span>{article.author}</span> -{" "}
//                 <span>{new Date(article.date).toLocaleDateString()}</span>
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       <div className="BlogContentNumber">
//         {/* زر السابق */}
//         <button
//           disabled={currentPage === 1}
//           onClick={() => handlePageChange(currentPage - 1)}
//         >
//           &lt;
//         </button>

//         {/* أرقام الصفحات */}
//         {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
//           <button
//             key={pageNum}
//             onClick={() => handlePageChange(pageNum)}
//             className={currentPage === pageNum ? "active" : ""}
//             style={{
//               margin: "0 5px",
//               fontWeight: currentPage === pageNum ? "bold" : "normal",
//             }}
//           >
//             {pageNum}
//           </button>
//         ))}

//         {/* زر التالي */}
//         <button
//           disabled={currentPage === totalPages}
//           onClick={() => handlePageChange(currentPage + 1)}
//         >
//           &gt;
//         </button>
//       </div>
//     </div>
//   );
// }

import { Form, redirect, type ActionFunctionArgs } from "react-router";

import { addDoc, collection } from "firebase/firestore";

// @ts-ignore: firebase config is a JavaScript module without TypeScript declarations
import { db } from "../config/firebase";

// ACTION ========================================
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const Article_img = formData.get("Article_img");
  const Article_name = formData.get("Article_name");
  const Article_intro = formData.get("Article_intro");
  const Article_author = formData.get("Article_author");
  const Article_date = formData.get("Article_date");

  // تجميع السيكشنز ديناميكياً
  const Article_sections = [];
  let index = 0;

  // حلقة تكرارية للبحث عن الحقول المرقمة, [1], إلخ..
  while (formData.has(`sections_id[${index}]`)) {
    Article_sections.push({
      sections_tittel: formData.get(`sections_tittel[${index}]`),
      sections_content: formData.get(`sections_content[${index}]`),
    });
    index++;
  }

  await addDoc(collection(db, "Blog"), {
    Article_img,
    Article_name,
    Article_intro,
    Article_sections,
    Article_author,
    Article_date,
  });

  return redirect("/"); // العودة إلى Users
}

// COMPONENT ========================================
export default function AddBlog() {
  return (
    <div>
      <h1>Add User</h1>
      <Form method="post">
        <label>Article_img</label>
        <input name="Article_img" placeholder="img" /> <br />{" "}
        <label>Article_name</label>
        <input name="Article_name" placeholder="Name" /> <br />
        <label>Article_intro</label>
        <input name="Article_intro" placeholder="intro" /> <br />
        <label>Article_author</label>
        <input name="Article_author" placeholder="author" /> <br />
        <label>Article_date</label>
        <input name="Article_date" placeholder="date" /> <br />
        <hr />
        <h3>Article Sections (السيكشنز)</h3>
        <div>
          <h4>Section 1</h4>
          <label>sections_id</label>
          <input name="sections_id[0]" placeholder="1" /> <br />
          <label>sections_tittel</label>
          <input name="sections_tittel[0]" placeholder="عنوان السيكشن" /> <br />
          <label>sections_content</label>
          <textarea name="sections_content[0]" placeholder="محتوى السيكشن" />
          <br />
        </div>
        <div>
          <h4>Section 2</h4>
          <input name="sections_id[1]" placeholder="2" />
          <input name="sections_tittel[1]" placeholder="عنوان السيكشن الثاني" />
          <textarea
            name="sections_content[1]"
            placeholder="محتوى السيكشن الثاني"
          />
        </div>
        <div>
          <h4>Section 3</h4>
          <input name="sections_id[2]" placeholder="3" />
          <input name="sections_tittel[2]" placeholder="عنوان السيكشن الثالث" />
          <textarea
            name="sections_content[2]"
            placeholder="محتوى السيكشن الثالث"
          />
        </div>
        <button type="submit">Add User</button>
      </Form>
    </div>
  );
}
