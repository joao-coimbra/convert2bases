import './styles.scss'

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

function Footer() {
    return(
        <footer>
            follow me
            <div></div>
            <a href="https://github.com/joao-coimbra/convert2bases">
                <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/joao-henrique-benatti-coimbra">
                <AiFillLinkedin />
            </a>
        </footer>
    )
}

export default Footer