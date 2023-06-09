
import { Link } from "react-router-dom";
import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'
import './styles.css'


interface PageHeaderIo {
    title:string;
    children:any;
    description?:string;
}

export const PageHeader = ({title, children, description}: PageHeaderIo) => {
    return(
        <>
            <header className="page-header">
                <div className="top-bar-container">
                    <Link to='/'>
                        <img src={backIcon} alt="voltar" />

                    </Link>
                    <img src={logoImg} alt="" />
                </div>

                <div className="header-content">
                    <strong>{title}</strong>
                    {description && <p>{description}</p>}
                    
                    {children}
                </div>

            </header>
        </>
    )
}