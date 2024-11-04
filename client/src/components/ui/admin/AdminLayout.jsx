import React from 'react'
import { Outlet } from 'react-router-dom'
import Adminheader from './header'
import AdminSidebar from './Sidebar'

const AdminLayout = () => {
  return (
    <div className='flex min-hscreen w-full'>
        <AdminSidebar/>
        <div className='flex flex-col-1'>
            <Adminheader/>

            <main className='flex-1 flex bg-muted/40 p-4 md:p-6'>
                <Outlet/>
            </main>

        </div>
    </div>
  )
}

export default AdminLayout