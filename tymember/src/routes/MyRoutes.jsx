import { Route, Routes } from 'react-router'
import Template from '../components/template/Template';
import { useState } from 'react';
import { members } from '../data/Member';
import Login from '../components/auth/Login';
import Members from '../components/member/Members';
import ImgUpdate from '../components/member/ImgUpdate';
const MyRoutes = () => {
    const [myMembers, setMyMembers] = useState(members);
    const id = localStorage.getItem("id")
    return <Routes>
        <Route
            element={<Template></Template>}
            path='/'>
            <Route path='/login' element={<Login members={myMembers}></Login>}></Route>
            <Route
                path='/members'
                element={<Members members={myMembers} />}></Route>
            <Route
                path='/members/:id'
                element={<ImgUpdate members={myMembers} setMembers={setMyMembers}></ImgUpdate>}></Route>
        </Route>
    </Routes>
}

export default MyRoutes;