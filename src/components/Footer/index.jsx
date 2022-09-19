import './styles.scss'

import { AiFillGithub, AiOutlineStar } from 'react-icons/ai'

function Footer() {
    return(
        <footer>
            follow me
            <div></div>
            <a href="https://github.com/joao-coimbra/convert2bases">
                <AiFillGithub/>
            </a>
            <a href="https://github.com/joao-coimbra">
                <AiOutlineStar/>
            </a>
        </footer>
    )
}

export default Footer