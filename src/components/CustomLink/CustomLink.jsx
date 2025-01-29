import { Link } from "react-router-dom"

const CustomLink = ({ linkText, isOutlined, path }) => {
    return (
        <Link
            to={path}
        >
            {linkText}
        </Link>
    )
}

export default CustomLink