import axios from 'axios';

export const getStudents = async () => {
    try {
        return await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/v1/student`)
    } catch (e) {
        throw e;
    }
}

export const saveStudent = async (student)=>{
    try {
        return await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/v1/student`,
            student)
    }
    catch (e){
        throw e;
    }
}
export const deleteStudent = async (id)=>{
    try {
        return await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/api/v1/student/${id}`)
    }
    catch (e){
        throw e;
    }
}

export const updateStudent = async (id,student)=>{
    try {
        return await axios.put(`${import.meta.env.VITE_API_BASE_URL}/api/v1/student/${id}`,
            student)
    }
    catch (e){
        throw e;
    }
}