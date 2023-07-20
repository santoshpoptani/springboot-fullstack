import ReactDOM from 'react-dom';
import {Formik, Form, useField} from 'formik';
import * as Yup from 'yup';
import {Alert, AlertIcon, AlertTitle, Box, Button, FormLabel, Input, Select, Stack} from "@chakra-ui/react";
import {isValidElement} from "react";
import {saveStudent} from "../services/client.js";
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

const MySelect = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <Box>
            <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
            <Select {...field} {...props} />
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
const CreateStudentForm = ({fetchStudent}) => {
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    age: '',
                    Gender: false
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    age: Yup.number()
                        .min(16, 'Minimum Age is 16')
                        .max(100, 'Maximum Age is 100')
                        .required('Required'),
                    gender: Yup.string()
                        .oneOf(
                            ['MALE', 'FEMALE'],
                            'Invalid Gender'
                        )
                        .required('Required'),
                })}
                onSubmit={(student, {setSubmitting}) => {
                    setSubmitting(true);
                    saveStudent(student)
                        .then(res => {
                            console.log(res);
                            successNotification(
                                "Student Saved",
                                `${student.name} Saved Successfully`
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


                            <MySelect label="Gender" name="gender">
                                <option value="">Select Gender</option>
                                <option value="MALE">Male</option>
                                <option value="FEMALE">Female</option>
                            </MySelect>

                            <Button disabled={!isValid} type="submit">Submit</Button>
                        </Stack>
                    </Form>
                )}

            </Formik>
        </>
    );
};

export default CreateStudentForm;