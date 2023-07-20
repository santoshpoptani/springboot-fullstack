import {Wrap, WrapItem, Spinner, Text} from '@chakra-ui/react'
import SidebarWithHeader from "./components/sharable/SideBar";
import {useEffect, useState} from "react";
import {getStudents} from "./services/client.js";
import ProfileCards from "./components/Cards";
import DrawerForm from "./components/CreateStudentDrawer.jsx";
import {errorNotification} from "./services/notification.jsx";

function App() {
    const [students, setStudent] = useState([]);
    const [loading, setloading] = useState(false);

    const fetchStudent = ()=>{
        setloading(true)
        getStudents().then(res => {
            setStudent(res.data)
        }).catch(err => {
            console.log(err);
            errorNotification(
                err.code,
                err.response.data.message
            )
        }).finally(() => {
            setloading(false)
        })
    }

    useEffect(() => {
       fetchStudent();
    }, [])

    if (loading) {
        return (<SidebarWithHeader>
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
        </SidebarWithHeader>)
    }

    if (students.length <= 0) {
        return (<SidebarWithHeader>
            <DrawerForm
            fetchStudent={fetchStudent}
            />
            <Text mt={5}>No student Available</Text>
        </SidebarWithHeader>)
    }

    return (
        <SidebarWithHeader>
            <DrawerForm
                fetchStudent={fetchStudent}
            />
            <Wrap justify={"center"} spacing={"30px"}>
                {
                    students.map((student, index) => (
                        <WrapItem key={index}>
                            <ProfileCards
                                {...student}
                                number={index}
                                fetchStudent={fetchStudent}
                            />
                        </WrapItem>
                    ))
                }
            </Wrap>
        </SidebarWithHeader>
    )

}

export default App
