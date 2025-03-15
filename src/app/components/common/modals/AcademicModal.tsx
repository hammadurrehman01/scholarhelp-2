import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updateData } from "@/service/service";
import { useFormik } from "formik";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

interface Props {
  academicData: any;
  setAcademicData: any;
  token: string;
}

export const AcademicModal = ({
  academicData,
  setAcademicData,
  token,
}: Props) => {
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    main_heading: academicData?.main_heading || "",
    sub_heading: academicData?.sub_heading || "",
    service_heading_one: academicData?.service_heading_one || "",
    service_para_one: academicData?.service_para_one || "",
    service_heading_two: academicData?.service_heading_two || "",
    service_para_two: academicData?.service_para_two || "",
    service_heading_three: academicData?.service_heading_three || "",
    service_para_three: academicData?.service_para_three || "",
    service_heading_four: academicData?.service_heading_four || "",
    service_para_four: academicData?.service_para_four || "",
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: async (values) => {
      const updatedContentData = [
        {
          section_id: 11,
          content_key: "main_heading",
          content_value: values.main_heading,
        },
        {
          section_id: 11,
          content_key: "sub_heading",
          content_value: values.sub_heading,
        },
        {
          section_id: 11,
          content_key: "service_heading_one",
          content_value: values.service_heading_one,
        },
        {
          section_id: 11,
          content_key: "service_para_one",
          content_value: values.service_para_one,
        },
        {
          section_id: 11,
          content_key: "service_heading_two",
          content_value: values.service_heading_two,
        },
        {
          section_id: 11,
          content_key: "service_para_two",
          content_value: values.service_para_two,
        },
        {
          section_id: 11,
          content_key: "service_heading_three",
          content_value: values.service_heading_three,
        },
        {
          section_id: 11,
          content_key: "service_para_three",
          content_value: values.service_para_three,
        },
        {
          section_id: 11,
          content_key: "service_heading_four",
          content_value: values.service_heading_four,
        },
        {
          section_id: 11,
          content_key: "service_para_four",
          content_value: values.service_para_four,
        },
      ];

      try {
        const response = await updateData(updatedContentData, token);

        if (response.status === 200) {
          setModal(false);
          setAcademicData(response.data.data["11"]);
          toast.success("Content updated successfully");
        } else {
          console.warn("Unexpected response status:", response.status);
        }
      } catch (error) {
        console.error("Error updating data:", error);
      }
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="main_heading" className="text-right">
            Main Heading
          </Label>
          <Input
            id="main_heading"
            value={values.main_heading}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="sub_heading" className="text-right">
            Sub Heading
          </Label>
          <Input
            id="sub_heading"
            value={values.sub_heading}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="service_heading_one" className="text-right">
            Card Title One
          </Label>
          <Input
            id="service_heading_one"
            value={values.service_heading_one}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="service_para_one" className="text-right">
            Card Title Two
          </Label>
          <Input
            id="service_para_one"
            value={values.service_para_one}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="service_heading_two" className="text-right">
            Card Title Three
          </Label>
          <Input
            id="service_heading_two"
            value={values.service_heading_two}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="service_para_two" className="text-right">
            Card Title Four
          </Label>
          <Input
            id="service_para_two"
            value={values.service_para_two}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="service_heading_three" className="text-right">
            Card Title Five
          </Label>
          <Input
            id="service_heading_three"
            value={values.service_heading_three}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="service_para_three" className="text-right">
            Card Title Six
          </Label>
          <Input
            id="service_para_three"
            value={values.service_para_three}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="service_heading_four" className="text-right">
            Card Title Seven
          </Label>
          <Input
            id="service_heading_four"
            value={values.service_heading_four}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="service_para_four" className="text-right">
            Card Title Eight
          </Label>
          <Input
            id="service_para_four"
            value={values.service_para_four}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit">
          {isLoading ? (
            <>
              <Loader2 />
              <span> Loading...</span>
            </>
          ) : (
            "Save changes"
          )}
        </Button>
      </DialogFooter>
    </form>
  );
};
