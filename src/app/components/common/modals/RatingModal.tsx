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
  ratingData: any;
  setRatingData: any;
  token: string;
}

export const RatingModal = ({ ratingData, setRatingData, token }: Props) => {
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    main_heading: ratingData?.main_heading || "",
    sub_heading: ratingData?.sub_heading || "",
    card_title_one: ratingData?.card_title_one || "",
    card_title_two: ratingData?.card_title_two || "",
    card_title_three: ratingData?.card_title_three || "",
    card_title_four: ratingData?.card_title_four || "",
    card_title_five: ratingData?.card_title_five || "",
    card_title_six: ratingData?.card_title_six || "",
    card_title_seven: ratingData?.card_title_seven || "",
    card_title_eight: ratingData?.card_title_eight || "",
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: async (values) => {
      const updatedContentData = [
        {
          section_id: 10,
          content_key: "main_heading",
          content_value: values.main_heading,
        },
        {
          section_id: 10,
          content_key: "sub_heading",
          content_value: values.sub_heading,
        },
        {
          section_id: 10,
          content_key: "card_title_one",
          content_value: values.card_title_one,
        },
        {
          section_id: 10,
          content_key: "card_title_two",
          content_value: values.card_title_two,
        },
        {
          section_id: 10,
          content_key: "card_title_three",
          content_value: values.card_title_three,
        },
        {
          section_id: 10,
          content_key: "card_title_four",
          content_value: values.card_title_four,
        },
        {
          section_id: 10,
          content_key: "card_title_five",
          content_value: values.card_title_five,
        },
        {
          section_id: 10,
          content_key: "card_title_six",
          content_value: values.card_title_six,
        },
        {
          section_id: 10,
          content_key: "card_title_seven",
          content_value: values.card_title_seven,
        },
        {
          section_id: 10,
          content_key: "card_title_eight",
          content_value: values.card_title_eight,
        },
      ];

      try {
        const response = await updateData(updatedContentData, token);

        if (response.status === 200) {
          setModal(false);
          setRatingData(response.data.data["10"]);
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
          <Label htmlFor="card_title_one" className="text-right">
            Card Title One
          </Label>
          <Input
            id="card_title_one"
            value={values.card_title_one}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="card_title_two" className="text-right">
            Card Title Two
          </Label>
          <Input
            id="card_title_two"
            value={values.card_title_two}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="card_title_three" className="text-right">
            Card Title Three
          </Label>
          <Input
            id="card_title_three"
            value={values.card_title_three}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="card_title_four" className="text-right">
            Card Title Four
          </Label>
          <Input
            id="card_title_four"
            value={values.card_title_four}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="card_title_five" className="text-right">
            Card Title Five
          </Label>
          <Input
            id="card_title_five"
            value={values.card_title_five}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="card_title_six" className="text-right">
            Card Title Six
          </Label>
          <Input
            id="card_title_six"
            value={values.card_title_six}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="card_title_seven" className="text-right">
            Card Title Seven
          </Label>
          <Input
            id="card_title_seven"
            value={values.card_title_seven}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="card_title_eight" className="text-right">
            Card Title Eight
          </Label>
          <Input
            id="card_title_eight"
            value={values.card_title_eight}
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
