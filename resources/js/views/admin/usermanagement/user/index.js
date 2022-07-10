import React,{useEffect,useState} from 'react'
import {Link } from "react-router-dom"
import {useSelector,useDispatch} from 'react-redux'
import Table from '@/components/Table'
import {FaTrashAlt,FaPen} from 'react-icons/fa'
import {UserListAction,UserDeleteAction} from '@/services/redux/usermanagement/user/UserAction'

const UserList = () =>{
    //dispatch
    const dispatch = useDispatch()
    const perPage = 10
    // state
    const [currentPage,setCurrentPage] = useState(1)
    const [search,setSearch] = useState('')
    //selector 
    const {userList,userListLoadingResponse} = useSelector((state)=>state.userState)

    useEffect(()=>{
        dispatch(UserListAction({page:currentPage,perPage:perPage,search:search}))
    },[search])

    //search
    const handleSearch = (e) =>{
        e.preventDefault()
        const searchValue=Object.fromEntries(new FormData(e.target))
        setSearch(searchValue.search)
    }
    //delete user
    const handleUserDelete = (id) =>{
        dispatch(UserDeleteAction(id))
    }

    const columns = [
       {
            key:'sno',
            title:'S.NO',
            render: (row,index)=>{
                return(
                    <>
                    {(currentPage * perPage) - (perPage - ((index + 2) - 1))}
                    </>
                )
            }
        },
        {
            key:'name',
            title:'Full Name',
        },
        {
            key:'username',
            title:'Username'
        },
        {
            key:'email',
            title:'Email'
        },
        {
            key:'roles',
            title:'Roles',
            render: (row) =>{
                return(
                    <div className="role-permissions-wrapper">
                        <ul>
                            {
                                row.roles?.map((item,i)=>{
                                    return(
                                        <li key={i}>{item.name}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                )
            }
        },
        {
            key:'created_at',
            title:'Created At'
        },
        {
            key:'action',
            title:'Action',
            render: (row) =>{
                return(
                    <div className="table-action-wrapper">
                        <Link className="table-edit-btn" to={`/admin/usermanagement/user/edit/${row.id}`} ><FaPen /></Link>
                        <button className="table-delete-btn" onClick={() => handleUserDelete(row.id)} ><FaTrashAlt /></button>
                    </div>
                )
            }
        },
    ]

    return(
        <div className="content-body">
            <div className="page-heading-wrapper">
                <div className="page-title-wrapper">
                    <h1>User</h1>
                </div>
                <div className="action-wrapper">
                    <Link to="/admin/usermanagement/user/create" className="btn-success">Create</Link>
                </div>
            </div>
            <div className="content-box-wrapper">
                <Table
                    columns={columns}
                    rowsWrapperClass="user-list-body"
                    rows={userList}
                    handleSearch ={handleSearch}
                    loading={userListLoadingResponse}
                />
            </div>
        </div>
    )
}

export default UserList