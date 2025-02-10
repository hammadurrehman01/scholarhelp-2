import { dbConnection } from "@/db/dbConnect";

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
        JSON.stringify({
          success: false,
          message: "No data found for this page_id",
        }),
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
