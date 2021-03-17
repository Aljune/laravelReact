import React from 'react'
import {Link} from 'react-router-dom'

const Index = () => {
    return (
        <div className='container'>
         <div className="card">
         <h5 className="card-header">Laravel-React</h5>
                <div className="card-body">
                <h5 className="card-title">Project Crud</h5>
            <p className="card-text">Author : Aljun Degamo</p>
                <Link to='/add' className='btn  btn-lg btn-primary'>Add</Link>
                    <div>
                        <table className="table table-stripped mt-5">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Date Created</th>
                                    <th>Name</th>
                                    <th>Introduction</th>
                                    <th>Location</th>
                                    <th width="280px">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                    
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
