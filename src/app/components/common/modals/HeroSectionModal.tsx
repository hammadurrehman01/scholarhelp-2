import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updateData } from "@/service/service";
import { useFormik } from "formik";
import { useState } from "react";

interface Props {
  heroSectionData: any;
  setHeroSectionData: any;
}

export const HeroSectionModal = ({
  heroSectionData,
  setHeroSectionData,
}: Props) => {
  const [modal, setModal] = useState(false);

  const initialValues = {
    main_heading: heroSectionData?.main_heading || "",
    sub_heading: heroSectionData?.sub_heading || "",
    service_values_one: heroSectionData?.service_values_one || "",
    service_values_two: heroSectionData?.service_values_two || "",
    service_values_three: heroSectionData?.service_values_three || "",
    formData_topbar: heroSectionData?.formData_topbar || "",
    formData_heading: heroSectionData?.formData_heading || "",
    formData_tab_one: heroSectionData?.formData_tab_one || "",
    formData_tab_two: heroSectionData?.formData_tab_two || "",
    formData_tab_three: heroSectionData?.formData_tab_three || "",
    formData_button: heroSectionData?.formData_button || "",
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: async (values) => {
      const updatedContentData = [
        {
          section_id: 1,
          content_key: "main_heading",
          content_value: values.main_heading,
        },
        {
          section_id: 1,
          content_key: "sub_heading",
          content_value: values.sub_heading,
        },
        {
          section_id: 1,
          content_key: "service_values_one",
          content_value: values.service_values_one,
        },
        {
          section_id: 1,
          content_key: "service_values_two",
          content_value: values.service_values_two,
        },
        {
          section_id: 1,
          content_key: "service_values_three",
          content_value: values.service_values_three,
        },
        {
          section_id: 1,
          content_key: "formData_topbar",
          content_value: values?.formData_topbar,
        },
        {
          section_id: 1,
          content_key: "formData_heading",
          content_value: values.formData_heading,
        },
        {
          section_id: 1,
          content_key: "formData_tab_one",
          content_value: values.formData_tab_one,
        },
        {
          section_id: 1,
          content_key: "formData_tab_two",
          content_value: values.formData_tab_two,
        },
        {
          section_id: 1,
          content_key: "formData_tab_three",
          content_value: values.formData_tab_three,
        },
        {
          section_id: 1,
          content_key: "formData_button",
          content_value: values.formData_button,
        },
      ];

      try {
        const response = await updateData(updatedContentData);

        if (response.status === 200) {
          setModal(false);
          setHeroSectionData(response.data.data["1"]);
        } else {
          console.warn("Unexpected response status:", response.status);
        }
      } catch (error) {
        console.error("Error updating data:", error);
      }
    },
  });

  return (
    // <Dialog open={modal} onOpenChange={(open) => setModal(open)}>
    //   {/* <DialogTrigger asChild>
    //     <Button variant="outline" onClick={() => setModal(true)}>
    //       Edit Content
    //     </Button>
    //   </DialogTrigger> */}
    //   <DialogContent className="sm:max-w-[800px] h-96 overflow-scroll overflow-x-hidden">
    //     <DialogHeader>
    //       <DialogTitle>Edit Content</DialogTitle>
    //       <DialogDescription>
    //         Make changes to your content here. Click save when you are done.
    //       </DialogDescription>
    //     </DialogHeader>

    //   </DialogContent>
    // </Dialog>

    <form onSubmit={handleSubmit}>
      <div className="grid gap-4 py-4 ">
        <div className="">
          <Label htmlFor="main_heading" className="text-right text-gray-400 text-sm pl-2">
            Main Heading
          </Label>
          <Input
            id="main_heading"
            value={values.main_heading}
            onChange={handleChange}
            className="col-span-3 font-medium mt-1"
          />
        </div>
        <div className="">
          <Label htmlFor="sub_heading" className="text-right text-gray-400 text-sm pl-2">
            Sub Heading
          </Label>
          <Input
            id="sub_heading"
            value={values.sub_heading}
            onChange={handleChange}
            className="col-span-3 font-medium mt-1"
          />
        </div>
        <div className="">
          <Label htmlFor="service_values_one" className="text-right text-gray-400 text-sm pl-2">
            Bullet Point 1
          </Label>
          <Input
            id="service_values_one"
            value={values.service_values_one}
            onChange={handleChange}
            className="col-span-3 font-medium mt-1"
          />
        </div>
        <div className="">
          <Label htmlFor="service_values_two" className="text-right text-gray-400 text-sm pl-2">
            Bullet Point 2
          </Label>
          <Input
            id="service_values_two"
            value={values.service_values_two}
            onChange={handleChange}
            className="col-span-3 font-medium mt-1"
          />
        </div>
        <div className="">
          <Label htmlFor="service_values_three" className="text-right text-gray-400 text-sm pl-2">
            Bullet Point 3
          </Label>
          <Input
            id="service_values_three"
            value={values.service_values_three}
            onChange={handleChange}
            className="col-span-3 font-medium mt-1"
          />
        </div>
        <div className="">
          <Label htmlFor="formData_topbar" className="text-right text-gray-400 text-sm pl-2">
            Form Discount Heading
          </Label>
          <Input
            id="formData_topbar"
            value={values?.formData_topbar}
            onChange={handleChange}
            className="col-span-3 font-medium mt-1"
          />
        </div>
        <div className="">
          <Label htmlFor="formData_heading" className="text-right text-gray-400 text-sm pl-2">
            Form Heading
          </Label>
          <Input
            id="formData_heading"
            value={values.formData_heading}
            onChange={handleChange}
            className="col-span-3 font-medium mt-1"
          />
        </div>

        <div className="">
          <Label htmlFor="formData_button" className="text-right text-gray-400 text-sm pl-2">
            Form Button
          </Label>
          <Input
            id="formData_button"
            value={values.formData_button}
            onChange={handleChange}
            className="col-span-3 font-medium mt-1"
          />
        </div>
        {/* Repeat for other inputs like subheading, service values, form tabs, etc. */}
      </div>
      <DialogFooter>
        <Button type="submit">Save changes</Button>
      </DialogFooter>
    </form>
  );
};
