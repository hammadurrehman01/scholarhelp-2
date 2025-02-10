import { dbConnection } from "@/db/dbConnect";

export async function PUT(req: Request) {
  try {
    // Parse the incoming request data
    const data = await req.json();

    // Establish the database connection
    const db = await dbConnection();

    // Helper function to update the content table
    async function updateContent(sectionId: number, contentKey: string, contentValue: any) {

      const query = `UPDATE content SET content_value = ? WHERE section_id = ? AND content_key = ?`;
      await db.execute(query, [contentValue, sectionId, contentKey]);
    }

    // Object to hold the organized response data
    const updatedData: Record<number, any> = {};

    // Iterate over the array data directly
    for (const item of data) {
      const { section_id, content_key, content_value } = item;

      // Perform the update
      await updateContent(section_id, content_key, content_value);

      // Organize data into sections by sectionId
      if (!updatedData[section_id]) {
        updatedData[section_id] = {};
      }
      updatedData[section_id][content_key] = content_value;
    }

    // Respond with success and the structured updated data
    return new Response(
      JSON.stringify({
        success: true,
        message: "Database content updated successfully",
        data: updatedData,
      }),
      {
        status: 200,
      }
    );
  } catch (error: any) {
    console.error("Error updating data:", error);
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500 }
    );
  }
}
