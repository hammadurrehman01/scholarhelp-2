import { dbConnection } from "@/db/dbConnect";

const db = await dbConnection();

export async function GET(req: Request) {
  
  try {
    
    const [headingRows]: any = await db?.execute("SELECT * FROM headings");
    
    const [subHeadingRows]: any = await db?.execute(
      "SELECT * FROM sub_headings"
    );
    const [buttonOneRows]: any = await db?.execute("SELECT * FROM button_1");
    const [buttonTwoRows]: any = await db?.execute("SELECT * FROM button_2");
    const [formDataTopBarRows]: any = await db?.execute(
      "SELECT * FROM form_data_topbar"
    );
    const [formDataHeadingRows]: any = await db?.execute(
      "SELECT * FROM form_data_heading"
    );
    const [formDataTabOneRows]: any = await db?.execute(
      "SELECT * FROM form_data_tab_1"
    );
    const [formDataTabTwoRows]: any = await db?.execute(
      "SELECT * FROM form_data_tab_2"
    );
    const [formDataTabThreeRows]: any = await db?.execute(
      "SELECT * FROM form_data_tab_3"
    );
    const [formButtonRows]: any = await db?.execute("SELECT * FROM form_button");
    const [serviceValuesOneRows]: any = await db?.execute(
      "SELECT * FROM service_values_1"
    );
    const [serviceValuesTwoRows]: any = await db?.execute(
      "SELECT * FROM service_values_2"
    );
    const [serviceValuesThreeRows]: any = await db?.execute(
      "SELECT * FROM service_values_3"
    );

    // Combine results into the JSON structure
      const data = {
      heading: headingRows[0],
      sub_heading: subHeadingRows[0],
      service_values: {
        one: serviceValuesOneRows[0],
        two: serviceValuesTwoRows[0],
        three: serviceValuesThreeRows[0],
      },
      buttons: {
        one: buttonOneRows[0],
        two: buttonTwoRows[0],
      },
      formData: {
        topBar: formDataTopBarRows[0],
        heading: formDataHeadingRows[0],
        tabs: {
          one: formDataTabOneRows[0],
          two: formDataTabTwoRows[0],
          three: formDataTabThreeRows[0],
        },
        formButton: formButtonRows[0],
      },
    };

    // Return the combined JSON data
    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });
  } catch (err: any) {
    console.log("Error => :", err.message);
    
    return new Response(
      JSON.stringify({ success: false, message: err.message }),
      { status: 500 }
    );
  }
}
