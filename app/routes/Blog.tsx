import {
  Form,
  Link,
  NavLink,
  useLoaderData,
  type ActionFunctionArgs,
  type LoaderFunctionArgs,
} from "react-router";

import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  limit,
  query,
  startAfter,
  getCountFromServer,
  orderBy,
} from "firebase/firestore";

// @ts-ignore: firebase config is a JavaScript module without TypeScript declarations
import { db } from "../config/firebase";

// Pagination==========================
const PAGE_SIZE = 6;

// LOADER==> قراءة المستخدمين من Firebase ========================================
export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const page = Number(url.searchParams.get("page")) || 1;
  let blogsQuery;

  const countSnapshot = await getCountFromServer(collection(db, "Blog"));
  const totalBlogs = countSnapshot.data().count;
  const totalPages = Math.ceil(totalBlogs / PAGE_SIZE);

  if (page === 1) {
    blogsQuery = query(
      collection(db, "Blog"),
      orderBy("Article_date", "desc"),
      limit(PAGE_SIZE),
    );
  } else {
    const previousQuery = query(
      collection(db, "Blog"),
      orderBy("Article_date", "desc"),
      limit((page - 1) * PAGE_SIZE),
    ); //page3=3-19=18

    const previousSnapshot = await getDocs(previousQuery); // git the first 18 doc
    const lastDocument =
      previousSnapshot.docs[previousSnapshot.docs.length - 1]; //git the 18 doc
    blogsQuery = query(
      //get the 9 docs after 18
      collection(db, "Blog"),
      orderBy("Article_date", "desc"),
      startAfter(lastDocument),
      limit(PAGE_SIZE),
    );
  }

  const data = await getDocs(blogsQuery);
  const blogs = data.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  }));

  return { blogs, page, totalPages };
}

// ACTION==> إضافة / تعديل / حذف========================================

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const actionType = formData.get("action");
  const id = formData.get("id");

  // DELETE====================================

  if (actionType === "delete") {
    const blogsId = typeof id === "string" ? id : null;

    if (!blogsId) {
      return null;
    }

    await deleteDoc(doc(db, "Blog", blogsId));
    return null;
  }

  return null;
}

// COMPONENT========================================

export default function Blog() {
  const { blogs, page, totalPages } = useLoaderData() as any;

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i); // ستصبح المصفوفة مثلاً: [1, 2, 3, 4, 5]
  }
  return (
    <div className="ResourcesPage">
      <p className="className-h1">Some of our featured articles</p>
      {/* <Link to="/AddBlog">
        <button>Add User</button>
      </Link> */}
      <div className="ResourcesGrid">
        {blogs.map((blog: any) => (
          <div key={blog.id} className="ResourcesIndex">
            <NavLink
              className="ResourcesIndexTittel"
              to={`/Article/${blog.id}`}
            >
              <img
                className="ResourcesIndexImg"
                src={
                  blog.Article_img ??
                  "https://churnsolution.com/wp-content/uploads/2026/07/subscription-churn-dashboard-the-2026-guide-to-actionable-revenue-intelligence.jpg"
                }
                alt={blog.Article_name}
              />

              <span className="ResourcesIndexTittel">{blog.Article_name}</span>
            </NavLink>

            <p className="ResourcesIndexPar">{blog.Article_intro}</p>

            <div className="authorinfo">
              <img
                className="authorImg"
                src="https://secure.gravatar.com/avatar/7f989462eccaa3a48eaf3c7b3e0635963b393795627f4ceeb37452da6a9ec0a9?s=96&d=mm&r=g"
                alt=""
              />
              <div className="name-date">
                <p className="authorName"> {blog.Article_author}</p>
                <p className="Article_date"> {blog.Article_date}</p>
              </div>
            </div>
            {/* DELETE */}
            {/* <Form method="post">
              <input type="hidden" name="id" value={blog.id} />
              <button type="submit" name="action" value="delete">
                Delete
              </button>
            </Form> */}
          </div>
        ))}
      </div>
      <div className="pagemenu">
        {page > 1 && (
          <Link to={`?page=${page - 1}`} className="pagemenuButton">
            &larr;
          </Link>
        )}

        {pageNumbers.map((pageNumber) => {
          return (
            <Link
              key={pageNumber}
              to={`?page=${pageNumber}`}
              className={`pagemenuButton ${pageNumber === page ? "active" : ""}`}
            >
              {pageNumber}
            </Link>
          );
        })}
        {page < totalPages && (
          <Link to={`?page=${page + 1}`} className="pagemenuButton">
            &rarr;
          </Link>
        )}
      </div>
    </div>
  );
}
