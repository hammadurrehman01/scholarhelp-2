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
  formContentData: any;
  setFormContentData: any;
}

export const FormContentModal = ({
  formContentData,
  setFormContentData,
}: Props) => {
  const [modal, setModal] = useState(false);

  const initialValues = {
    accordion_head_one: formContentData?.accordion_head_one || "",
    accordion_para_one: formContentData?.accordion_para_one || "",
    accordion_head_two: formContentData?.accordion_head_two || "",
    accordion_para_two: formContentData?.accordion_para_two || "",
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: async (values) => {
      const updatedContentData = [
        {
          section_id: 4,
          content_key: "accordion_head_one",
          content_value: values.accordion_head_one,
        },
        {
          section_id: 4,
          content_key: "accordion_para_one",
          content_value: values.accordion_para_one,
        },
        {
          section_id: 4,
          content_key: "accordion_head_two",
          content_value: values.accordion_head_two,
        },
        {
          section_id: 4,
          content_key: "accordion_para_two",
          content_value: values.accordion_para_two,
        },
      ];

      try {
        const response = await updateData(updatedContentData);

        if (response.status === 200) {
          setModal(false);
          setFormContentData(response.data.data["4"]);
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
          <Label htmlFor="accordion_head_one" className="text-right">
            Accordion heading one
          </Label>
          <Input
            id="accordion_head_one"
            value={values.accordion_head_one}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="accordion_para_one" className="text-right">
            According para one
          </Label>
          <Input
            id="accordion_para_one"
            value={values.accordion_para_one}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="accordion_head_two" className="text-right">
            Accordion heading two
          </Label>
          <Input
            id="accordion_head_two"
            value={values.accordion_head_two}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="accordion_para_two" className="text-right">
            According para two
          </Label>
          <Input
            id="accordion_para_two"
            value={values.accordion_para_two}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit">Save changes</Button>
      </DialogFooter>
    </form>
  );
};
