import React from 'react';
import { useSelector, useDispatch } from "react-redux"
const Home = () => {
    const { Users } = useSelector(state => state.CheckReducer)
    console.log(Users)
    const dispatch = useDispatch()
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Read</th>
                        <th scope="col">Write</th>
                        <th scope="col">Create</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                {
                    Users.map((userData) => (

                        <tbody key={userData.id}>
                            <tr>
                                <th scope="row">{userData.name}</th>
                                <td><input type="checkbox" name="" id="" checked={userData.read} /> </td>
                                <td><input type="checkbox" name="" id="" checked={userData.write} /></td>
                                <td><input type="checkbox" name="" id="" checked={userData.create} /></td>
                                <td><input type="checkbox" name="" id="" checked={userData.delete} /></td>
                            </tr>
                        </tbody>


                    ))
                }
            </table>
            <button onClick={() => dispatch({type: 'ADD',payload: { Users}  })}>ADD</button>

        </div>
    );
};

export default Home;