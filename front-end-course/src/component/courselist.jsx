import '../App.css'
import logo from '../image/Logo.png'
import home from '../image/mdi_view-dashboard-outline.png'
import courses from '../image/ic_outline-queue-music.png'
import search from '../image/mdi_magnify.png'
import data from '../data'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { useState } from 'react'



function DisplayList() {

  const [value, setvalue] = useState("");
  const [datasource, setdatasource] = useState(data)
  const [tablefilter, settablefilter] = useState([])

  const filterdata = (e) => {
    if (e.target.value != "") {
      setvalue(e.target.value);
      const filterTable = datasource.filter(o => Object.key(o).some(k =>
        String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())))
      settablefilter([...filterTable])
    } else {
      setvalue(e.target.value);
      setdatasource([...datasource])
    }
  }

  let coursedata = useNavigate()

  const handleEdit = (id, name, description, instructor, instrument, dayofWeek, student, price) => {
    localStorage.setItem('Name', name);
    localStorage.setItem('Description', description)
    localStorage.setItem('Instructor', instructor)
    localStorage.setItem('Instrument', instrument)
    localStorage.setItem('DayofWeek', dayofWeek)
    localStorage.setItem('Student', student)
    localStorage.setItem('Price', price)
    localStorage.setItem('Id', id)

  }

  const handleDelete = (id) => {
    var index = data.map((e) => {
      return e.id
    }).indexOf(id);

    data.splice(index, 1);

    coursedata("/displaylist")
  }

  return (
    <>
      <div className='container'>
        <div className='left-sidebar'>
          <div className='logo'>
            <img src={logo} alt="logo" />
          </div>
          <div className='home'>
            <img src={home} alt='home' />
          </div>
          <div className='course'>
            <img src={courses} alt="courses" />
          </div>
        </div>

        <div className='right-sidebar'>
          <h1 className='heading'>Courses</h1>
          <div className='heading2'>
            <p className='p1'>COURSELIST</p>
            <input className="search" type="text" value={value} placeholder="Search.." name="search" onChange={filterdata} />
            <img className="searchicon" src={search} alt='search' />

          </div>

          <div>

            <div className="flex flex-col ">


              <div className="overflow-hidden">
                <table className="text-left text-sm font-light table">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">Name</th>
                      <th scope="col" className="px-6 py-4">Description</th>
                      <th scope="col" className="px-6 py-4">Instructor</th>
                      <th scope="col" className="px-6 py-4">Instrument</th>
                      <th scope="col" className="px-6 py-4">Day of Week</th>
                      <th scope="col" className="px-6 py-4">No. of Student</th>
                      <th scope="col" className="px-6 py-4">Price</th>
                      <th scope="col" className="px-6 py-4">Action</th>
                      <th scope="col" className="px-6 py-4">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data && data.length > 0 ?
                        data.map((item) => {
                          return (
                            <>
                              <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                  {item.Name}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">{item.Description}</td>
                                <td className="whitespace-nowrap px-6 py-4">{item.Instructor}</td>
                                <td className="whitespace-nowrap px-6 py-4">{item.Instrument}</td>
                                <td className="whitespace-nowrap px-6 py-4">{item.DayofWeek}</td>
                                <td className="whitespace-nowrap px-6 py-4">{item.Student}</td>
                                <td className="whitespace-nowrap px-6 py-4">{item.Price}</td>
                                <td className="whitespace-nowrap px-6 py-4">
                                  <Link to={"/edit"}>
                                    <Button onClick={() => handleEdit(item.id, item.Name, item.Description,
                                      item.Instructor, item.Instrument, item.DayofWeek, item.Student, item.Price)}>Edit</Button>
                                  </Link>
                                  <Link onClick={() => handleDelete(item.id)}>Delete</Link>

                                </td>

                              </tr>
                            </>
                          )
                        })
                        :
                        'No Data found'
                    }
                    {
                      value.length > 0 ?
                        tablefilter.map((data) => {
                          return (
                            <>
                              <td>{data.Name}</td>
                              <td>{data.Price}</td>
                            </>
                          )
                        })
                        :
                        datasource.map((data) => {
                          return (
                            <>
                                 <td>{data.Name}</td>
                                 <td>{data.Price}</td>
                              
                            </>
                    )
                    })
                    }

                </tbody>
              </table>
            </div>
          </div>



        </div>
        <Link to="/add" className="addcourse">
          + Add course
        </Link>
      </div>

    </div >


    </>
  )
}

export default DisplayList