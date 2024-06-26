import React, { useState } from 'react'
import {sidebarLinks} from "../../../data/dashboard-links"
import {logout} from "../../../services/operations/authAPI"
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../../common/Spinner'
import SidebarLink from "./SidebarLink"
import {VscSignOut } from 'react-icons/vsc'
import { useNavigate } from 'react-router-dom'
import ConfirmationModal from '../../common/ConfirmationModal'

const Sidebar = () => {

    const {user, loading: profileLoading} = useSelector((state) => state.profile);
    const {loadind:authLoading} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [confirmationModal, setConfirmationModal] = useState(null);

    if(profileLoading || authLoading){
        return (
            <div className="flex justify-center items-center mt-[250px] mx-auto">
                <Spinner/>
            </div>
        )
    }

  return (
    <div>
        <div className='flex min-w-[222px] flex-col border-r-[1px] border-r-richblack-700
         h-[calc(100vh-3.5rem)] bg-richblack-800 py-10'>

            <div className='flex flex-col'>
                {
                    sidebarLinks.map((link) => {
                        if(link.type && user?.accountType !== link.type) return null;
                        return (
                            <SidebarLink key={link.id} link={link} iconName={link.icon}/>
                        )
                    })
                }

            </div>
            
            {/* horizontal line */}
            <div className='mx-auto mt-5 mb-5 h-[1px] w-10/12 bg-richblack-700'></div>

            <div className='flex flex-col'>
                <SidebarLink
                    link={{name:"Settings", path:"dashboard/settings"}}
                    iconName="VscSettingsGear"
                />

                <button
                    onClick={() => setConfirmationModal(
                        {
                        text1: "Are You Sure ?",
                        text2: "You will be logged out of your Account",
                        btn1Text: "Logout",
                        btn2Text: "Cancel",
                        btn1Handler: () => dispatch(logout(navigate)),
                        btn2Handler: () => setConfirmationModal(null),
                    })}
                    className="px-6 py-2 text-sm font-medium text-richblack-300"
                >

                    <div className='flex items-center gap-x-2 mt-2'>
                        <VscSignOut className='text-lg'/>
                        <span>Logout</span>
                    </div>

                </button>
            </div>
        </div>
        {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </div>
  )
}

export default Sidebar