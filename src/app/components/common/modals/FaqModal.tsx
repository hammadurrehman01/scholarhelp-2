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
  faqData: any;
  setFaqData: any;
  token: string;
}

export const FaqModal = ({ faqData, setFaqData, token }: Props) => {
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    main_heading: faqData?.main_heading || "",
    sub_heading: faqData?.sub_heading || "",
    question_one: faqData?.question_one || "",
    answer_one: faqData?.answer_one || "",
    question_two: faqData?.question_two || "",
    answer_two: faqData?.answer_two || "",
    question_three: faqData?.question_three || "",
    answer_three: faqData?.answer_three || "",
    question_four: faqData?.question_four || "",
    answer_four: faqData?.answer_four || "",
    question_five: faqData?.question_five || "",
    answer_five: faqData?.answer_five || "",
    question_six: faqData?.question_six || "",
    answer_six: faqData?.answer_six || "",
    question_seven: faqData?.question_seven || "",
    answer_seven: faqData?.answer_seven || "",
    question_eight: faqData?.question_eight || "",
    answer_eight: faqData?.answer_eight || "",
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: async (values) => {
      const updatedContentData = [
        {
          section_id: 7,
          content_key: "main_heading",
          content_value: values.main_heading,
        },
        {
          section_id: 7,
          content_key: "sub_heading",
          content_value: values.sub_heading,
        },
        {
          section_id: 7,
          content_key: "question_one",
          content_value: values.question_one,
        },
        {
          section_id: 7,
          content_key: "answer_one",
          content_value: values.answer_one,
        },
        {
          section_id: 7,
          content_key: "question_two",
          content_value: values.question_two,
        },
        {
          section_id: 7,
          content_key: "answer_two",
          content_value: values.answer_two,
        },
        {
          section_id: 7,
          content_key: "question_three",
          content_value: values.question_three,
        },
        {
          section_id: 7,
          content_key: "answer_three",
          content_value: values.answer_three,
        },
        {
          section_id: 7,
          content_key: "question_four",
          content_value: values.question_four,
        },
        {
          section_id: 7,
          content_key: "answer_four",
          content_value: values.answer_four,
        },
        {
          section_id: 7,
          content_key: "question_five",
          content_value: values.question_five,
        },
        {
          section_id: 7,
          content_key: "answer_five",
          content_value: values.answer_five,
        },
        {
          section_id: 7,
          content_key: "question_six",
          content_value: values.question_six,
        },
        {
          section_id: 7,
          content_key: "answer_six",
          content_value: values.answer_six,
        },
        {
          section_id: 7,
          content_key: "question_seven",
          content_value: values.question_seven,
        },
        {
          section_id: 7,
          content_key: "answer_seven",
          content_value: values.answer_seven,
        },
        {
          section_id: 7,
          content_key: "question_eight",
          content_value: values.question_eight,
        },
        {
          section_id: 7,
          content_key: "answer_eight",
          content_value: values.answer_eight,
        },
      ];

      try {
        const response = await updateData(updatedContentData, token);

        if (response.status === 200) {
          setModal(false);
          setFaqData(response.data.data["7"]);
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
          <Label htmlFor="question_one" className="text-right">
            Question 1
          </Label>
          <Input
            id="question_one"
            value={values.question_one}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="answer_one" className="text-right">
            Answer 1
          </Label>
          <Input
            id="answer_one"
            value={values.answer_one}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="question_two" className="text-right">
            Question 2
          </Label>
          <Input
            id="question_two"
            value={values.question_two}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="answer_two" className="text-right">
            Answer 2
          </Label>
          <Input
            id="answer_two"
            value={values.answer_two}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="question_three" className="text-right">
            Question 3
          </Label>
          <Input
            id="question_three"
            value={values.question_three}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="answer_three" className="text-right">
            Answer 3
          </Label>
          <Input
            id="answer_three"
            value={values.answer_three}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="question_four" className="text-right">
            Question 4
          </Label>
          <Input
            id="question_four"
            value={values.question_four}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="answer_four" className="text-right">
            Answer 4
          </Label>
          <Input
            id="answer_four"
            value={values.answer_four}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="question_five" className="text-right">
            Question 5
          </Label>
          <Input
            id="question_five"
            value={values.question_five}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="answer_five" className="text-right">
            Answer 5
          </Label>
          <Input
            id="answer_five"
            value={values.answer_five}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="question_six" className="text-right">
            Question 6
          </Label>
          <Input
            id="question_six"
            value={values.question_six}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="answer_six" className="text-right">
            Answer 6
          </Label>
          <Input
            id="answer_six"
            value={values.answer_six}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="question_seven" className="text-right">
            Question 7
          </Label>
          <Input
            id="question_seven"
            value={values.question_seven}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="answer_seven" className="text-right">
            Answer 7
          </Label>
          <Input
            id="answer_seven"
            value={values.answer_seven}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="question_eight" className="text-right">
            Question 8
          </Label>
          <Input
            id="question_eight"
            value={values.question_eight}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="answer_eight" className="text-right">
            Answer 8
          </Label>
          <Input
            id="answer_eight"
            value={values.answer_eight}
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
