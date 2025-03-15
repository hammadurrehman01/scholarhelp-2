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
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface Props {
  whyUsData: any;
  setWhyUsData: any;
  token: string;
}

export const WhyUsModal = ({ whyUsData, setWhyUsData, token }: Props) => {
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    slider_head_one: whyUsData?.slider_head_one || "",
    slider_para_one: whyUsData?.slider_para_one || "",
    slider_head_two: whyUsData?.slider_head_two || "",
    slider_para_two: whyUsData?.slider_para_two || "",
    slider_head_three: whyUsData?.slider_head_three || "",
    slider_para_three: whyUsData?.slider_para_three || "",
    slider_head_four: whyUsData?.slider_head_four || "",
    slider_para_four: whyUsData?.slider_para_four || "",
    slider_head_five: whyUsData?.slider_head_five || "",
    slider_para_five: whyUsData?.slider_para_five || "",
    slider_head_six: whyUsData?.slider_head_six || "",
    slider_para_six: whyUsData?.slider_para_six || "",
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: async (values) => {
      const updatedContentData = [
        {
          section_id: 6,
          content_key: "slider_head_one",
          content_value: values.slider_head_one,
        },
        {
          section_id: 6,
          content_key: "slider_para_one",
          content_value: values.slider_para_one,
        },
        {
          section_id: 6,
          content_key: "slider_head_two",
          content_value: values.slider_head_two,
        },
        {
          section_id: 6,
          content_key: "slider_para_two",
          content_value: values.slider_para_two,
        },
        {
          section_id: 6,
          content_key: "slider_head_three",
          content_value: values.slider_head_three,
        },
        {
          section_id: 6,
          content_key: "slider_para_three",
          content_value: values.slider_para_three,
        },
        {
          section_id: 6,
          content_key: "slider_head_four",
          content_value: values.slider_head_four,
        },
        {
          section_id: 6,
          content_key: "slider_para_four",
          content_value: values.slider_para_four,
        },
        {
          section_id: 6,
          content_key: "slider_head_five",
          content_value: values.slider_head_five,
        },
        {
          section_id: 6,
          content_key: "slider_para_five",
          content_value: values.slider_para_five,
        },
        {
          section_id: 6,
          content_key: "slider_head_six",
          content_value: values.slider_head_six,
        },
        {
          section_id: 6,
          content_key: "slider_para_six",
          content_value: values.slider_para_six,
        },
      ];

      try {
        const response = await updateData(updatedContentData, token);

        if (response.status === 200) {
          setModal(false);
          setWhyUsData(response.data.data["6"]);
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
          <Label htmlFor="slider_head_one" className="text-right">
            Slider Head One
          </Label>
          <Input
            id="slider_head_one"
            value={values.slider_head_one}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="slider_para_one" className="text-right">
            Sub Heading
          </Label>
          <Input
            id="slider_para_one"
            value={values.slider_para_one}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="slider_head_two" className="text-right">
            Heading 1
          </Label>
          <Input
            id="slider_head_two"
            value={values.slider_head_two}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="slider_para_two" className="text-right">
            Heading 2
          </Label>
          <Input
            id="slider_para_two"
            value={values.slider_para_two}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="slider_head_three" className="text-right">
            Heading 3
          </Label>
          <Input
            id="slider_head_three"
            value={values.slider_head_three}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="slider_para_three" className="text-right">
            Paragraph 1
          </Label>
          <Input
            id="slider_para_three"
            value={values.slider_para_three}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="slider_head_four" className="text-right">
            Paragraph 2
          </Label>
          <Input
            id="slider_head_four"
            value={values.slider_head_four}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="slider_para_four" className="text-right">
            Paragraph 3
          </Label>
          <Input
            id="slider_para_four"
            value={values.slider_para_four}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="slider_head_five" className="text-right">
            Paragraph 3
          </Label>
          <Input
            id="slider_head_five"
            value={values.slider_head_five}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="slider_para_five" className="text-right">
            Paragraph 3
          </Label>
          <Input
            id="slider_para_five"
            value={values.slider_para_five}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="slider_head_six" className="text-right">
            Paragraph 3
          </Label>
          <Input
            id="slider_head_six"
            value={values.slider_head_six}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="slider_para_six" className="text-right">
            Paragraph 3
          </Label>
          <Input
            id="slider_para_six"
            value={values.slider_para_six}
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
