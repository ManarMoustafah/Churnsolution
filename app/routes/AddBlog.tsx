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
