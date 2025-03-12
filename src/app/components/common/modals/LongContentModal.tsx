import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updateData } from "@/service/service";
import { useFormik } from "formik";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import { Tiptap } from "../../TipTap";

interface Props {
  longContentData: any;
  setLongContentData: any;
}

export const LongContentModal = ({
  longContentData,
  setLongContentData,
}: Props) => {
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState("");

  const initialValues = {
    heading_one: longContentData?.heading_one || "",
    richTextContent: longContentData?.richTextContent || "",
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: async (values) => {
      const updatedContentData = [
        {
          section_id: 5,
          content_key: "heading_one",
          content_value: values.heading_one,
        },
        {
          section_id: 5,
          content_key: "richTextContent",
          content_value: content,
        },
      ];

      try {
        setIsLoading(true);
        const response = await updateData(updatedContentData);

        if (response.status === 200) {
          setModal(false);
          setLongContentData(response.data.data["5"]);
          toast.success("Content updated successfully");
        } else {
          console.warn("Unexpected response status:", response.status);
        }
      } catch (error) {
        console.error("Error updating data:", error);
      } finally {
        setIsLoading(false);
      }
    },
  });

  const handleContentChange = (reason: any) => {
    setContent(reason);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="heading_one" className="text-right">
            Heading one
          </Label>
          <Input
            id="heading_one"
            value={values.heading_one}
            onChange={handleChange}
            className="col-span-3 font-medium"
          />
        </div>
      </div>

      <Tiptap
        richTextContent={values.richTextContent}
        content={content}
        onChange={(newContent: string) => handleContentChange(newContent)}
        longContentData={longContentData}
      />
      <DialogFooter className="mt-3">
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
