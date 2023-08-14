import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";


const Members = ({ members }) => {
    const id = Number(localStorage.getItem("id"))
    return <div>
        <table>
            <thead>
                <th>id</th>
                <th>name</th>
                <th>number</th>
                <th>img</th>
            </thead>
            <tbody>
                {members.map((m) =>
                    <tr>
                        <td>{m.id}</td>
                        <td>{m.id === id
                            ? <Link to={`/members/${m.id}`}>{m.name}</Link>
                            : m.name}</td>
                        <td>{m.number}</td>
                        <td><img
                            loading="lazy"
                            src={m.image}
                            width={'30px'}
                        /></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
}

export default Members