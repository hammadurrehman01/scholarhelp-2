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
  smallDividerData: any;
  setSmallDividerData: any;
  token: string;
}

export const SmallDividerModal = ({
  smallDividerData,
  setSmallDividerData,
  token,
}: Props) => {
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    word_one: smallDividerData?.word_one || "",
    word_two: smallDividerData?.word_two || "",
    word_three: smallDividerData?.word_three || "",
    word_four: smallDividerData?.word_four || "",
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: async (values) => {
      const updatedContentData = [
        {
          section_id: 8,
          content_key: "word_one",
          content_value: values.word_one,
        },
        {
          section_id: 8,
          content_key: "word_two",
          content_value: values.word_two,
        },
        {
          section_id: 8,
          content_key: "word_three",
          content_value: values.word_three,
        },
        {
          section_id: 8,
          content_key: "word_four",
          content_value: values.word_four,
        },
      ];

      try {
        const response = await updateData(updatedContentData, token);

        if (response.status === 200) {
          setModal(false);
          setSmallDividerData(response.data.data["8"]);
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
          <Label htmlFor="word_one" className="text-right">
            Word one
          </Label>
          <Input
            id="word_one"
            value={values.word_one}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="word_two" className="text-right">
            Word Two
          </Label>
          <Input
            id="word_two"
            value={values.word_two}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="word_three" className="text-right">
            Word Three
          </Label>
          <Input
            id="word_three"
            value={values.word_three}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="word_four" className="text-right">
            Word Four
          </Label>
          <Input
            id="word_four"
            value={values.word_four}
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
