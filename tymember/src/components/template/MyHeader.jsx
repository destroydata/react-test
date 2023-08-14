import { Link } from 'react-router-dom'

const MyHeader = () => {
    return <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Link to="/login">login</Link>
        <Link to="/members">members</Link>
    </div>
}

export default MyHeader;