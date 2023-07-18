import {Wrap, WrapItem, Spinner, Text} from '@chakra-ui/react'
import SidebarWithHeader from "./components/sharable/SideBar";
import {useEffect, useState} from "react";
import {getStudents} from "./services/client.js";
import ProfileCards from "./components/Cards";

function App() {
    const [students, setStudent] = useState([]);
    const [loading, setloading] = useState(false);
    useEffect(() => {
        setloading(true)
        getStudents().then(res => {
            setStudent(res.data)
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            setloading(false)
        })
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
            <Text>No student Available</Text>
        </SidebarWithHeader>)
    }

    return (
        <SidebarWithHeader>
            <Wrap justify={"center"} spacing={"30px"}>
                {
                    students.map((student, index) => (
                        <WrapItem key={index}>
                            <ProfileCards {...student}/>
                        </WrapItem>
                    ))
                }
            </Wrap>
        </SidebarWithHeader>
    )

}

export default App
