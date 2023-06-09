
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'
import api from "../../services/api";


export interface Teacher {
        id: number;
        avatar: string;
        bio: string;
        cost: number;
        name: string;
        subject: string;
        whatsapp: string;
}

interface TeacherItemIo {
    teacher: Teacher;
}


export const TeacherItem = ({teacher}:TeacherItemIo) => {

    const createNewConnection = ()=>{
        api.post('connections', {
            user_id: teacher.id,
        })
    }

    return(
        <>
            <article className="teacher-item">
                    <header>
                        <img src={teacher.avatar} alt={teacher.name} />
                        <div>
                            <strong>{teacher.name}</strong>
                            <span>{teacher.subject}</span>
                        </div>
                    </header>

                    <p>{teacher.bio}</p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R${teacher.cost}</strong>
                        </p>
                        <a target="blank" onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`}>
                            <img src={whatsappIcon} alt="whatsapp" />
                            Entrar em contato
                        </a>
                    </footer>
                </article>
        </>
    )
}