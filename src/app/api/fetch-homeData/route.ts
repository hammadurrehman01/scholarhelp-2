import { dbConnection } from "@/db/dbConnect";

// export async function GET(req: Request) {
//   const url = new URL(req.url);
//   const queryParams = Object.fromEntries(url.searchParams.entries());
//   const pageId = queryParams.page_id;

//   try {
//     if (!pageId) {
//       return new Response(
//         JSON.stringify({ success: false, message: "page_id is required" }),
//         { status: 400 }
//       );
//     }

//     const db = await dbConnection();
//     console.log("pageId", pageId);

//     const [rows]: any = await db?.execute(
//       `SELECT * 
//       FROM content as cont
//       INNER JOIN sections as sec on cont.section_id = sec.id
//       WHERE sec.page_id = ?`,
//       [pageId]
//     );

//     if (!rows.length) {
//       return new Response(
//         JSON.stringify({ success: false, message: "No data found for this page_id" }),
//         { status: 404 }
//       );
//     }

//     return new Response(
//       JSON.stringify({ success: true, message: "Data retrieved successfully", data: rows }),
//       { status: 200 }
//     );


//     // const [headingRows]: any = await db?.execute("SELECT * FROM headings");

//     // const [subHeadingRows]: any = await db?.execute(
//     //   "SELECT * FROM sub_headings"
//     // );
//     // const [buttonOneRows]: any = await db?.execute("SELECT * FROM button_1");
//     // const [buttonTwoRows]: any = await db?.execute("SELECT * FROM button_2");
//     // const [formDataTopBarRows]: any = await db?.execute(
//     //   "SELECT * FROM form_data_topbar"
//     // );
//     // const [formDataHeadingRows]: any = await db?.execute(
//     //   "SELECT * FROM form_data_heading"
//     // );
//     // const [formDataTabOneRows]: any = await db?.execute(
//     //   "SELECT * FROM form_data_tab_1"
//     // );
//     // const [formDataTabTwoRows]: any = await db?.execute(
//     //   "SELECT * FROM form_data_tab_2"
//     // );
//     // const [formDataTabThreeRows]: any = await db?.execute(
//     //   "SELECT * FROM form_data_tab_3"
//     // );
//     // const [formButtonRows]: any = await db?.execute(
//     //   "SELECT * FROM form_button"
//     // );
//     // const [serviceValuesOneRows]: any = await db?.execute(
//     //   "SELECT * FROM service_values_1"
//     // );
//     // const [serviceValuesTwoRows]: any = await db?.execute(
//     //   "SELECT * FROM service_values_2"
//     // );
//     // const [serviceValuesThreeRows]: any = await db?.execute(
//     //   "SELECT * FROM service_values_3"
//     // );

//     // // Combine results into the JSON structure
//     // const data = {
//     //   heading: headingRows[0],
//     //   sub_heading: subHeadingRows[0],
//     //   service_values: {
//     //     one: serviceValuesOneRows[0],
//     //     two: serviceValuesTwoRows[0],
//     //     three: serviceValuesThreeRows[0],
//     //   },
//     //   buttons: {
//     //     one: buttonOneRows[0],
//     //     two: buttonTwoRows[0],
//     //   },
//     //   formData: {
//     //     topBar: formDataTopBarRows[0],
//     //     heading: formDataHeadingRows[0],
//     //     tabs: {
//     //       one: formDataTabOneRows[0],
//     //       two: formDataTabTwoRows[0],
//     //       three: formDataTabThreeRows[0],
//     //     },
//     //     formButton: formButtonRows[0],
//     //   },
//     // };

//     // Return the combined JSON data
//     // return new Response(JSON.stringify({ success: true, data }), {
//     //   status: 200,
//     // });
//   } catch (err: any) {
//     console.log("Error => :", err.message);

//     return new Response(
//       JSON.stringify({ success: false, message: err.message }),
//       { status: 500 }
//     );
//   }
// }



export async function GET(req: Request) {
  try {
    // Parse the URL and extract the `page_id` parameter
    const url = new URL(req.url);
    const pageId = url.searchParams.get("page_id");

    if (!pageId) {
      return new Response(
        JSON.stringify({ success: false, message: "page_id is required" }),
        { status: 400 }
      );
    }

    // Connect to the database
    const db = await dbConnection();

    // Join `section` and `content` tables to fetch data based on `page_id`
    const [rows]: any = await db?.execute(
      `SELECT c.section_id, c.content_key, c.content_value 
       FROM content c 
       INNER JOIN sections s ON c.section_id = s.id
       WHERE s.page_id = ?`,
      [pageId]
    );

    if (!rows.length) {
      return new Response(
        JSON.stringify({ success: false, message: "No data found for this page_id" }),
        { status: 404 }
      );
    }

    // Organize the retrieved data by section
    const data = rows.reduce((acc: any, row: any) => {
      const sectionId = row.section_id;

      // If section does not exist in `acc`, initialize it
      if (!acc[sectionId]) {
        acc[sectionId] = {};
      }

      // Add the content_key and content_value to the section
      acc[sectionId][row.content_key] = row.content_value;

      return acc;
    }, {});

    // Return the structured data
    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });
  } catch (err: any) {
    console.error("Error:", err.message);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}