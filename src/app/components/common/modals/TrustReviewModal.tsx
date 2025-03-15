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
  trustReviewData: any;
  setTrustReviewData: any;
  token: string;
}

export const TrustReviewModal = ({
  trustReviewData,
  setTrustReviewData,
  token,
}: Props) => {
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    main_heading: trustReviewData?.main_heading || "",
    review_heading_one: trustReviewData?.review_heading_one || "",
    review_para_one: trustReviewData?.review_para_one || "",
    review_heading_two: trustReviewData?.review_heading_two || "",
    review_para_two: trustReviewData?.review_para_two || "",
    review_heading_three: trustReviewData?.review_heading_three || "",
    review_para_three: trustReviewData?.review_para_three || "",
    review_heading_four: trustReviewData?.review_heading_four || "",
    review_para_four: trustReviewData?.review_para_four || "",
    review_heading_five: trustReviewData?.review_heading_five || "",
    review_para_five: trustReviewData?.review_para_five || "",
    review_heading_six: trustReviewData?.review_heading_six || "",
    review_para_six: trustReviewData?.review_para_six || "",
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: async (values) => {
      const updatedContentData = [
        {
          section_id: 9,
          content_key: "main_heading",
          content_value: values.main_heading,
        },
        {
          section_id: 9,
          content_key: "review_heading_one",
          content_value: values.review_heading_one,
        },
        {
          section_id: 9,
          content_key: "review_para_one",
          content_value: values.review_para_one,
        },
        {
          section_id: 9,
          content_key: "review_heading_two",
          content_value: values.review_heading_two,
        },
        {
          section_id: 9,
          content_key: "review_para_two",
          content_value: values.review_para_two,
        },
        {
          section_id: 9,
          content_key: "review_heading_three",
          content_value: values.review_heading_three,
        },
        {
          section_id: 9,
          content_key: "review_para_three",
          content_value: values.review_para_three,
        },
        {
          section_id: 9,
          content_key: "review_heading_four",
          content_value: values.review_heading_four,
        },
        {
          section_id: 9,
          content_key: "review_para_four",
          content_value: values.review_para_four,
        },
        {
          section_id: 9,
          content_key: "review_heading_five",
          content_value: values.review_heading_five,
        },
        {
          section_id: 9,
          content_key: "review_para_five",
          content_value: values.review_para_five,
        },
        {
          section_id: 9,
          content_key: "review_heading_six",
          content_value: values.review_heading_six,
        },
        {
          section_id: 9,
          content_key: "review_para_six",
          content_value: values.review_para_six,
        },
      ];

      try {
        const response = await updateData(updatedContentData, token);

        if (response.status === 200) {
          setModal(false);
          setTrustReviewData(response.data.data["9"]);
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
          <Label htmlFor="review_heading_one" className="text-right">
            Review Heading One
          </Label>
          <Input
            id="review_heading_one"
            value={values.review_heading_one}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="review_para_one" className="text-right">
            Review Para One
          </Label>
          <Input
            id="review_para_one"
            value={values.review_para_one}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="review_heading_two" className="text-right">
            Review Heading Two
          </Label>
          <Input
            id="review_heading_two"
            value={values.review_heading_two}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="review_para_two" className="text-right">
            Review Para Two
          </Label>
          <Input
            id="review_para_two"
            value={values.review_para_two}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="review_heading_three" className="text-right">
            Review Heading Three
          </Label>
          <Input
            id="review_heading_three"
            value={values.review_heading_three}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="review_para_three" className="text-right">
            Review Para Three
          </Label>
          <Input
            id="review_para_three"
            value={values.review_para_three}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="review_heading_four" className="text-right">
            Review Heading Four
          </Label>
          <Input
            id="review_heading_four"
            value={values.review_heading_four}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="review_para_four" className="text-right">
            Review Para Four
          </Label>
          <Input
            id="review_para_four"
            value={values.review_para_four}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="review_heading_five" className="text-right">
            Review Heading Five
          </Label>
          <Input
            id="review_heading_five"
            value={values.review_heading_five}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="review_para_five" className="text-right">
            Review Para Five
          </Label>
          <Input
            id="review_para_five"
            value={values.review_para_five}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="review_heading_six" className="text-right">
            Review Heading Six
          </Label>
          <Input
            id="review_heading_six"
            value={values.review_heading_six}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="review_para_six" className="text-right">
            Review Para Six
          </Label>
          <Input
            id="review_para_six"
            value={values.review_para_six}
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
