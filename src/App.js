import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AromaticBarForm from './components/layouts/AromaticBar';
import Message from './components/layouts/Message';
import Table from './components/layouts/Table';
import './App.css';
import ViewDetails from './components/layouts/ViewDetails';
import { useLocalStorage } from './hooks/useLocalStorage';



function App() {
  const [userData, setUserData] = useLocalStorage('userData', [])

  const [currentUserData, setCurrentUserData] = useState([])

  const [currentSearch, setCurrentSearch] = useState('')

  const handleUpdateData = (userDetail) => {


    setUserData([...userData, { ...userDetail, id: userData.length }])
  }



  const handleDelete = (selectedRows) => {

    setUserData(userData.filter((item) => selectedRows.includes(item.id)))
  }

  const handleSearch = (e) => {
    const search = e.target.value
    setCurrentSearch(search)
    if (e.target.value) {
      setCurrentUserData(userData.filter((item) => {
        for (let [_,value] of Object.entries(item)) {
          if (value.toString().includes(search)) {
            return true
          }
          return false

        }
        return false

      }))
    }
    else {
      setCurrentUserData(userData)
    }

  }


  useEffect(() => {

    setCurrentUserData(userData)


  }, [userData])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AromaticBarForm handleUpdateData={handleUpdateData} />} />
        <Route path='/table' element={<Table userData={currentUserData} handleDelete={handleDelete} handleSearch={handleSearch} currentSearch={currentSearch} />} />
        <Route path='/message' element={<Message />} />
        <Route path='viewdetails/id' element={<ViewDetails />} />
      </Routes>
    </div>
  );
}

export default App;
