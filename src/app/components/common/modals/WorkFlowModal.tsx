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
  workFlowData: any;
  setWorkFlowData: any;
}

export const WorkFlowModal = ({ workFlowData, setWorkFlowData }: Props) => {
  const [modal, setModal] = useState(false);

  const initialValues = {
    main_heading: workFlowData?.main_heading || "",
    sub_heading: workFlowData?.sub_heading || "",
    tab_heading_one: workFlowData?.tab_heading_one || "",
    tab_heading_two: workFlowData?.tab_heading_two || "",
    tab_heading_three: workFlowData?.tab_heading_three || "",
    tab_para_one: workFlowData?.tab_para_one || "",
    tab_para_two: workFlowData?.tab_para_two || "",
    tab_para_three: workFlowData?.tab_para_three || "",
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: async (values) => {
      const updatedContentData = [
        {
          section_id: 2,
          content_key: "main_heading",
          content_value: values.main_heading,
        },
        {
          section_id: 2,
          content_key: "sub_heading",
          content_value: values.sub_heading,
        },
        {
          section_id: 2,
          content_key: "tab_heading_one",
          content_value: values.tab_heading_one,
        },
        {
          section_id: 2,
          content_key: "tab_heading_two",
          content_value: values.tab_heading_two,
        },
        {
          section_id: 2,
          content_key: "tab_heading_three",
          content_value: values.tab_heading_three,
        },
        {
          section_id: 2,
          content_key: "tab_para_one",
          content_value: values.tab_para_one,
        },
        {
          section_id: 2,
          content_key: "tab_para_two",
          content_value: values.tab_para_two,
        },
        {
          section_id: 2,
          content_key: "tab_para_three",
          content_value: values.tab_para_three,
        },
      ];

      try {
        const response = await updateData(updatedContentData);

        if (response.status === 200) {
          setModal(false);
          setWorkFlowData(response.data.data["2"]);
        } else {
          console.warn("Unexpected response status:", response.status);
        }
      } catch (error) {
        console.error("Error updating data:", error);
      }
    },
  });

  return (
    <Dialog open={modal} onOpenChange={(open) => setModal(open)}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setModal(true)}>
          Edit Content
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] h-96 overflow-scroll overflow-x-hidden">
        <DialogHeader>
          <DialogTitle>Edit Content</DialogTitle>
          <DialogDescription>
            Make changes to your content here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
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
                className="col-span-3"
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
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="tab_heading_one" className="text-right">
                Heading 1
              </Label>
              <Input
                id="tab_heading_one"
                value={values.tab_heading_one}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="tab_heading_two" className="text-right">
              Heading 2
              </Label>
              <Input
                id="tab_heading_two"
                value={values.tab_heading_two}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="tab_heading_three" className="text-right">
              Heading 3
              </Label>
              <Input
                id="tab_heading_three"
                value={values.tab_heading_three}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="tab_para_one" className="text-right">
              Paragraph 1
              </Label>
              <Input
                id="tab_para_one"
                value={values.tab_para_one}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="tab_para_two" className="text-right">
              Paragraph 2
              </Label>
              <Input
                id="tab_para_two"
                value={values.tab_para_two}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="tab_para_three" className="text-right">
              Paragraph 3
              </Label>
              <Input
                id="tab_para_three"
                value={values.tab_para_three}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
