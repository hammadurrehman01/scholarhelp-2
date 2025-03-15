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
  sampleData: any;
  setSampleData: any;
  token: string;
}

export const SampleModal = ({ sampleData, setSampleData, token }: Props) => {
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    slide_title_one: sampleData?.slide_title_one || "",
    slide_subject_one: sampleData?.slide_subject_one || "",
    slide_nop_one: sampleData?.slide_nop_one || "",
    slide_al_one: sampleData?.slide_al_one || "",
    slide_dt_one: sampleData?.slide_dt_one || "",
    slide_title_two: sampleData?.slide_title_two || "",
    slide_subject_two: sampleData?.slide_subject_two || "",
    slide_nop_two: sampleData?.slide_nop_two || "",
    slide_al_two: sampleData?.slide_al_two || "",
    slide_dt_two: sampleData?.slide_dt_two || "",
    slide_title_three: sampleData?.slide_title_three || "",
    slide_subject_three: sampleData?.slide_subject_three || "",
    slide_nop_three: sampleData?.slide_nop_three || "",
    slide_al_three: sampleData?.slide_al_three || "",
    slide_dt_three: sampleData?.slide_dt_three || "",
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: async (values) => {
      const updatedContentData = [
        {
          section_id: 12,
          content_key: "slide_title_one",
          content_value: values.slide_title_one,
        },
        {
          section_id: 12,
          content_key: "slide_subject_one",
          content_value: values.slide_subject_one,
        },
        {
          section_id: 12,
          content_key: "slide_nop_one",
          content_value: values.slide_nop_one,
        },
        {
          section_id: 12,
          content_key: "slide_al_one",
          content_value: values.slide_al_one,
        },
        {
          section_id: 12,
          content_key: "slide_dt_one",
          content_value: values.slide_dt_one,
        },
        {
          section_id: 12,
          content_key: "slide_title_two",
          content_value: values.slide_title_two,
        },
        {
          section_id: 12,
          content_key: "slide_subject_two",
          content_value: values.slide_subject_two,
        },
        {
          section_id: 12,
          content_key: "slide_nop_two",
          content_value: values.slide_nop_two,
        },
        {
          section_id: 12,
          content_key: "slide_al_two",
          content_value: values.slide_al_two,
        },
        {
          section_id: 12,
          content_key: "slide_title_three",
          content_value: values.slide_title_three,
        },
        {
          section_id: 12,
          content_key: "slide_subject_three",
          content_value: values.slide_subject_three,
        },
        {
          section_id: 12,
          content_key: "slide_nop_three",
          content_value: values.slide_nop_three,
        },
        {
          section_id: 12,
          content_key: "slide_al_three",
          content_value: values.slide_al_three,
        },
        {
          section_id: 12,
          content_key: "slide_dt_three",
          content_value: values.slide_dt_three,
        },
        {
          section_id: 12,
          content_key: "slide_title_three",
          content_value: values.slide_title_three,
        },
      ];

      try {
        const response = await updateData(updatedContentData, token);

        if (response.status === 200) {
          setModal(false);
          setSampleData(response.data.data["12"]);
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
          <Label htmlFor="slide_title_one" className="text-right">
            Main Heading
          </Label>
          <Input
            id="slide_title_one"
            value={values.slide_title_one}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="slide_subject_one" className="text-right">
            Sub Heading
          </Label>
          <Input
            id="slide_subject_one"
            value={values.slide_subject_one}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="slide_nop_one" className="text-right">
            Card Title One
          </Label>
          <Input
            id="slide_nop_one"
            value={values.slide_nop_one}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="slide_al_one" className="text-right">
            Card Title Two
          </Label>
          <Input
            id="slide_al_one"
            value={values.slide_al_one}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="slide_dt_one" className="text-right">
            Card Title Three
          </Label>
          <Input
            id="slide_dt_one"
            value={values.slide_dt_one}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="slide_title_two" className="text-right">
            Card Title Four
          </Label>
          <Input
            id="slide_title_two"
            value={values.slide_title_two}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="slide_subject_two" className="text-right">
            Card Title Five
          </Label>
          <Input
            id="slide_subject_two"
            value={values.slide_subject_two}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="slide_nop_two" className="text-right">
            Card Title Six
          </Label>
          <Input
            id="slide_nop_two"
            value={values.slide_nop_two}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="slide_al_two" className="text-right">
            Card Title Seven
          </Label>
          <Input
            id="slide_al_two"
            value={values.slide_al_two}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="slide_title_three" className="text-right">
            Card Title Eight
          </Label>
          <Input
            id="slide_title_three"
            value={values.slide_title_three}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="slide_subject_three" className="text-right">
            Card Title Eight
          </Label>
          <Input
            id="slide_subject_three"
            value={values.slide_subject_three}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="slide_nop_three" className="text-right">
            Card Title Eight
          </Label>
          <Input
            id="slide_nop_three"
            value={values.slide_nop_three}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="slide_al_three" className="text-right">
            Card Title Eight
          </Label>
          <Input
            id="slide_al_three"
            value={values.slide_al_three}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="slide_dt_three" className="text-right">
            Card Title Eight
          </Label>
          <Input
            id="slide_dt_three"
            value={values.slide_dt_three}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="slide_dt_two" className="text-right">
            Card Title Eight
          </Label>
          <Input
            id="slide_dt_two"
            value={values.slide_dt_two}
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
