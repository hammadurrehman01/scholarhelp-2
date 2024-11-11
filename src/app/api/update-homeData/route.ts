import { dbConnection } from "@/db/dbConnect";

export async function PUT(req: Request) {
  try {
    // Parse the incoming request data
    const data = await req.json();

    // Establish the database connection
    const db = await dbConnection();

    // Recursive function to update each table by ID
    async function updateTextById(dataObj: any, tableName: string, id: number) {
      if (dataObj.text) {

        const query = `UPDATE ${tableName} SET text = ? WHERE id = ?`;
        await db.execute(query, [dataObj.text, id]);
      }
    }

    // Mapping of incoming data to table names and IDs
    const tableMap: Record<string, { table: string; id: number }> = {
      heading: { table: "headings", id: 1 },
      sub_heading: { table: "sub_headings", id: 2 },
      "service_values.one": { table: "service_values_1", id: 3 },
      "service_values.two": { table: "service_values_2", id: 4 },
      "service_values.three": { table: "service_values_3", id: 5 },
      "buttons.one": { table: "button_1", id: 6 },
      "buttons.two": { table: "button_2", id: 7 },
      "formData.topBar": { table: "form_data_topbar", id: 8 },
      "formData.heading": { table: "form_data_heading", id: 9 },
      "formData.tabs.one": { table: "form_data_tab_1", id: 10 },
      "formData.tabs.two": { table: "form_data_tab_2", id: 11 },
      "formData.tabs.three": { table: "form_data_tab_3", id: 12 },
      "formData.formButton": { table: "form_button", id: 13 },
    };

    // Function to handle nested updates
    async function updateNestedData(dataObj: any, path: string = "") {
      for (const key in dataObj) {
        const currentPath = path ? `${path}.${key}` : key;
        const tableInfo = tableMap[currentPath];

        if (tableInfo) {
          await updateTextById(dataObj[key], tableInfo.table, tableInfo.id);
        } else if (typeof dataObj[key] === "object") {
          await updateNestedData(dataObj[key], currentPath);
        }
      }
    }

    // Execute the updates
    await updateNestedData(data);

    // Close the database connection
    // await db.end();

    // Respond with success
    return new Response(
      JSON.stringify({
        success: true,
        message: "Database content updated successfully",
        data,
      }),
      {
        status: 200,
      }
    );
  } catch (error: any) {
    console.error("Error updating data:", error);
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      {
        status: 500,
      }
    );
  }
}
