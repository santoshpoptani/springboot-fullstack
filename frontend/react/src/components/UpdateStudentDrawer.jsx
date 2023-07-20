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
import UpdateStudentForm from "./UpdateStudentForm.jsx";

const AddIcon =()=>"+";
const CloseIcon =()=>"X";

const UpdateStudentDrawer = ({fetchStudent,initialvalues,id})=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    return <>

        <Button
            bg={'gray.400'} color={'black'} rounded={'full'}
            _hover={{transform: 'translateY(-2px)', boxShadow: 'lg'}}
            onClick={onOpen}
        >
            Update Student
        </Button>

        <Drawer isOpen={isOpen} onClose={onClose} size={"xl"}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Update Student</DrawerHeader>

                <DrawerBody>
                   <UpdateStudentForm
                   fetchStudent={fetchStudent}
                   initialvalues={initialvalues}
                   id={id}
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

export default UpdateStudentDrawer;