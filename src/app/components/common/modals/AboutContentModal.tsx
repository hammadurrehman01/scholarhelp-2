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
import { useState } from "react";
import { toast } from "react-toastify";

interface Props {
  aboutContentData: any;
  setAboutContentData: any;
}

export const AboutContentModal = ({
  aboutContentData,
  setAboutContentData,
}: Props) => {
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    heading: aboutContentData?.heading || "",
    para: aboutContentData?.para || "",
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: async (values) => {
      const updatedContentData = [
        {
          section_id: 3,
          content_key: "heading",
          content_value: values.heading,
        },
        {
          section_id: 3,
          content_key: "para",
          content_value: values.para,
        },
      ];

      try {
        const response = await updateData(updatedContentData);

        if (response.status === 200) {
          setModal(false);
          setAboutContentData(response.data.data["3"]);
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
          <Label htmlFor="heading" className="text-right">
            Heading
          </Label>
          <Input
            id="heading"
            value={values.heading}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="para" className="text-right">
            Para
          </Label>
          <Input
            id="para"
            value={values.para}
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
