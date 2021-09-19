import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {Button,Form,Loader} from 'semantic-ui-react'
import {useRouter} from 'next/router'
import 'semantic-ui-css/semantic.min.css'

const newNote=()=>
{
    const[form,setForm]=useState({title:"",description:""});
    const[isSubmitting,setIsSubmitting]=useState(false);
    const[errors,setErrors]=useState({})
    const router=useRouter();
    useEffect(() => {
        if (isSubmitting) {
            if (Object.keys(errors).length === 0) {
               createNote();
               //alert("Success")
            }
            else {
                setIsSubmitting(false);
            }
        }
    }, [errors])
    const createNote = async () => {
        try {
            const res = await axios.post('http://localhost:3000/api/notes',form)
            router.push("/");
        } catch (error) {
            console.log(error);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let errs = validate();
        setErrors(errs);
        setIsSubmitting(true);
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const validate = () => {
        let err = {};
        if (!form.title) {
            err.title = 'Title is required';
        }
        if (!form.description) {
            err.description = 'Description is required';
        }
        return err;
    }

    return(
        <div className="form-container">
            <h1>Create Note</h1>
            <div>
                {
                    isSubmitting?<Loader active inline="centered"/>:
                    <Form onSubmit={handleSubmit}>
                        <Form.Input
                        
                         error={errors.title?{content:'Please Enter The Title',pointing:'below'}:null}
                         label="Title"
                         placeholder="Title"
                         name="title"
                         onChange={handleChange}
                        />
                         <Form.TextArea
                        
                         error={errors.description?{content:'Please Enter The Description',pointing:'below'}:null}
                         label="Description"
                         placeholder="Description"
                         name="description"
                         onChange={handleChange}
                        />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Create</button>
                    </Form>
                }
            </div>
        </div>
    )
}

export default newNote;