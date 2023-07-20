import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';

const FormComponent = (props) => {
  const { control, handleSubmit, formState: { errors } } = useForm();


  return (
    <Form onSubmit={handleSubmit(props.onSubmit)}>
      <Form.Group controlId="phoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Controller
          name="phoneNumber"
          control={control}
          defaultValue=""
          rules={{
            required: 'Phone number is required',
            pattern: {
              value: /^[0-9]{10}$/,
              message: 'Enter a valid phone number',
            },
          }}
          render={({ field }) => (
            <>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                {...field}
              />
              {errors.phoneNumber && (
                <Form.Text className="text-danger">
                  {errors.phoneNumber.message}
                </Form.Text>
              )}
            </>
          )}
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: 'Enter a valid email address',
            },
          }}
          render={({ field }) => (
            <>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                {...field}
              />
              {errors.email && (
                <Form.Text className="text-danger">
                  {errors.email.message}
                </Form.Text>
              )}
            </>
          )}
        />
      </Form.Group>
    </Form>
  );
};

export default FormComponent;
