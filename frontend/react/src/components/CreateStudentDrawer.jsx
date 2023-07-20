import {
    Button,
    Drawer, DrawerBody,
    DrawerCloseButton,
    DrawerContent, DrawerFooter,
    DrawerHeader,
    DrawerOverlay, Input,
    useDisclosure
} from '@chakra-ui/react'
import CreateStudentForm from "./CreateStudentForm.jsx";

const AddIcon =()=>"+";
const CloseIcon =()=>"X";

const DrawerForm = ({fetchStudent})=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    return <>

        <Button
            leftIcon={<AddIcon/>} onClick={onOpen}
            colorScheme={"teal"}
        >
            Add Student
        </Button>

        <Drawer isOpen={isOpen} onClose={onClose} size={"xl"}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Create New Student</DrawerHeader>

                <DrawerBody>
                   <CreateStudentForm
                   fetchStudent={fetchStudent}
                   />
                </DrawerBody>

                <DrawerFooter>
                    <Button
                        leftIcon={<CloseIcon/>} onClick={onClose}
                        colorScheme={"teal"}
                    >
                        Close
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    </>
}

export default DrawerForm;