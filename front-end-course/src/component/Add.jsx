import React, { useState } from "react";
import data from '../data'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css'
import {v4 as uuid} from "uuid"


function Add() {
    const [name, setName] = useState("")
    const [description, setdescription] = useState("")
    const [Instructor, setInstructor] = useState("")
    const [Instrument, setInstrument] = useState("")
    const [DayofWeek, setDayofWeek] = useState("")
    const [Student, setStudent] = useState("")
    const [Price, setPrice] = useState("")

    let history = useNavigate();

    const handleSubmit = (e)=> {
        e.preventDefault();

        const ids = uuid();
        let uniqueid = ids.slice(0, 8)

        let n= name;
        let d= description;
        let c= Instructor;
        let i= Instrument;
        let f = DayofWeek;
        let s = Student;
        let p = Price;

        data.push({id: uniqueid, Name: n, Description:d, Instructor:c, Instrument: i, DayofWeek: f, Student:s,Price:p})

        history("/displaylist")
    }
    return (
        <>
            <div className="secondcontainer">
            <div className="mb-3">
                <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input type="text" id="large-input" onChange={(e)=> setName(e.target.value)}  className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div className="mb-3">
                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <input type="text" id="base-input" onChange={(e)=> setdescription(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div className="mb-3">
                <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Instructor</label>
                <input type="text" id="small-input"  onChange={(e)=> setInstructor(e.target.value)} className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div className="mb-3">
                <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Instrument</label>
                <input type="text" id="large-input"   onChange={(e)=> setInstrument(e.target.value)} className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div className="mb-3">
                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Day of Week</label>
                <input type="text" id="base-input"  onChange={(e)=> setDayofWeek(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div className="mb-3">
                <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">No. of Student</label>
                <input type="text" id="small-input" onChange={(e)=> setStudent(e.target.value)} className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div className="mb-3">
                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                <input type="text" id="base-input"  onChange={(e)=> setPrice(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <Link onClick={(e)=> handleSubmit(e)}type="submit" >Please click here to add</Link>
            </div>
        </>
    )
}

export default Add;