import ReactDOM from 'react-dom';
import {Formik, Form, useField} from 'formik';
import * as Yup from 'yup';
import {Alert, AlertIcon, AlertTitle, Box, Button, FormLabel, Input, Select, Stack} from "@chakra-ui/react";
import {isValidElement} from "react";
import {updateStudent} from "../services/client.js";
import {errorNotification, successNotification} from "../services/notification.jsx";

const MyTextInput = ({label, ...props}) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
        <Box>
            <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
            <Input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <Alert className="error" status={"error"} mt={2}>
                    <AlertIcon/>
                    {meta.error}
                </Alert>
            ) : null}
        </Box>
    );
};

// And now we can use these
const UpdateStudentForm = ({fetchStudent, initialvalues,id}) => {
    return (
        <>
            <Formik
                initialValues={initialvalues}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    age: Yup.number()
                        .min(16, 'Minimum Age is 16')
                        .max(100, 'Maximum Age is 100')
                        .required('Required')
                })}
                onSubmit={(student, {setSubmitting}) => {
                    setSubmitting(true);
                    updateStudent(id,student)
                        .then(res => {
                            console.log(res);
                            successNotification(
                                "Student Updated",
                                `${student.name} Updated Successfully`
                            )
                            fetchStudent();
                        })
                        .catch(err => {
                            console.log(err);
                            errorNotification(
                                err.code,
                                err.response.data.message
                            )
                        })
                        .finally(() => {
                            setSubmitting(false);
                        })
                }}
            >


                {(isValid) => (
                    <Form>
                        <Stack spacing={"25px"}>
                            <MyTextInput
                                label="Name"
                                name="name"
                                type="text"
                                placeholder="Jane Doe"
                            />

                            <MyTextInput
                                label="Age"
                                name="age"
                                type="number"
                                placeholder="20"
                            />
                            <Button disabled={!isValid} type="submit">Submit</Button>
                        </Stack>
                    </Form>
                )}

            </Formik>
        </>
    );
};

export default UpdateStudentForm;