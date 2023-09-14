import React, { useEffect, useState } from "react";
import data from '../data'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css'
import { v4 as uuid } from "uuid"
import Button from 'react-bootstrap/Button';

function Edit() {
    const [name, setName] = useState("")
    const [description, setdescription] = useState("")
    const [Instructor, setInstructor] = useState("")
    const [Instrument, setInstrument] = useState("")
    const [DayofWeek, setDayofWeek] = useState("")
    const [Student, setStudent] = useState("")
    const [Price, setPrice] = useState("")
    const [id, setID] = useState("")

    let history = useNavigate();

    let index = data.map((e) => {
        return e.id
    }).indexOf(id);


    const handleSubmit = (e) => {
        e.preventDefault();
        let course = data[index];
        course.Name = name;
        course.Description = description;
        course.Instructor = Instructor;
        course.Instrument = Instrument;
        course.DayofWeek = DayofWeek;
        course.Student = Student;
        course.Price = Price;

        history("/displaylist")
    }
    useEffect(()=>{
         setName(localStorage.getItem('Name'))
         setdescription(localStorage.getItem('Description'))
         setInstructor(localStorage.getItem('Instructor'))
         setInstrument(localStorage.getItem('Instrument'))
         setDayofWeek(localStorage.getItem('DayofWeek'))
         setStudent(localStorage.getItem('Student'))
         setPrice(localStorage.getItem('Price'))
         setID(localStorage.getItem('Id'))
    },[])

    return (
        <>
            <div className="secondcontainer">
                <div className="mb-3">
                    <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input type="text" id="large-input" value={name} onChange={(e) => setName(e.target.value)} className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="mb-3">
                    <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                    <input type="text" id="base-input" value={description} onChange={(e) => setdescription(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="mb-3">
                    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Instructor</label>
                    <input type="text" id="small-input" value={Instructor} onChange={(e) => setInstructor(e.target.value)} className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="mb-3">
                    <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Instrument</label>
                    <input type="text" id="large-input" value={Instrument} onChange={(e) => setInstrument(e.target.value)} className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="mb-3">
                    <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Day of Week</label>
                    <input type="text" id="base-input" value={DayofWeek} onChange={(e) => setDayofWeek(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="mb-3">
                    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">No. of Student</label>
                    <input type="text" id="small-input" value={Student} onChange={(e) => setStudent(e.target.value)} className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="mb-3">
                    <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                    <input type="text" id="base-input" value={Price} onChange={(e) => setPrice(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <Link  >
                <Button onClick={(e) => handleSubmit(e)} type="submit">
                Please click here to Update
                </Button>
                </Link>
            </div>
        </>
    )
}

export default Edit;
