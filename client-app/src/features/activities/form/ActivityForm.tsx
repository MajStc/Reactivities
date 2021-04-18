import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";

const ActivityForm = () => {
  const { activityStore } = useStore();
  const {
    selectedActivity,
    closeForm,
    createActivity,
    updateActivity,
    loading,
  } = activityStore;

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
    activity.id ? updateActivity(activity) : createActivity(activity);
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
            loading={loading}
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

export default observer(ActivityForm);
