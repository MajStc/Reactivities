import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
  closeForm: () => void;
  activity: Activity | undefined;
  createOrEdit: (activity: Activity) => void;
  submitting: boolean;
}

const ActivityForm = ({
  closeForm,
  activity: selectedActivity,
  createOrEdit,
  submitting,
}: Props) => {
  const initialState = selectedActivity ?? {
    id: "",
    title: "",
    category: "",
    description: "",
    date: "",
    city: "",
    venue: "",
  };

  const [activity, setActivity] = useState(initialState);

  const handleSubmit = () => {
    createOrEdit(activity);
  };

  const handleInpuChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  };

  return (
    <div>
      <Segment clearing>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <Form.Input
            placeholder="Title"
            value={activity.title}
            name="title"
            onChange={handleInpuChange}
          />
          <Form.TextArea
            placeholder="Description"
            value={activity.description}
            name="description"
            onChange={handleInpuChange}
          />
          <Form.Input
            placeholder="Category"
            value={activity.category}
            name="category"
            onChange={handleInpuChange}
          />
          <Form.Input
            type="date"
            placeholder="Date"
            value={activity.date}
            name="date"
            onChange={handleInpuChange}
          />
          <Form.Input
            placeholder="City"
            value={activity.city}
            name="city"
            onChange={handleInpuChange}
          />
          <Form.Input
            placeholder="Venue"
            value={activity.venue}
            name="venue"
            onChange={handleInpuChange}
          />
          <Button
            loading={submitting}
            floated="right"
            positive
            type="submit"
            content="Submit"
          />
          <Button
            onClick={closeForm}
            floated="right"
            type="button"
            content="Cancel"
          />
        </Form>
      </Segment>
    </div>
  );
};

export default ActivityForm;
