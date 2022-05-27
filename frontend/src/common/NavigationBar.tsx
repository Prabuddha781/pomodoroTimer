import classes from "./NavigationBar.module.css"
import { Navbar, Nav, Button, Container, NavDropdown } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import ReportImg from "../icons/report.png"
import SettingsImg from "../icons/settings.png"

interface Props {
    setShowReport: React.Dispatch<React.SetStateAction<boolean>>,
    setShowSettings: React.Dispatch<React.SetStateAction<boolean>>
}

const NavigationBar = ({ setShowReport, setShowSettings } : Props) => {
    const navigate = useNavigate()
    
    return (
        <div className={`${ classes.navSize } ms-auto me-auto`}>
        <Navbar className="d-flex">
            <Navbar.Brand className={`text-light`} onClick={ () => navigate('/') }>Pomofocus</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="navBar">
            <Nav className="ms-auto">
                <Button size="sm" variant="outline-secondary" className={ ` ${ classes.navBtn } me-2 pe-2 text-light` }><img src={ ReportImg } className={ classes.navImagesSize } alt="open reports" /> Report</Button>
                <Button size="sm" variant="outline-secondary" className={ ` ${ classes.navBtn } pe-2 text-light` }><img src={ SettingsImg } className={ classes.navImagesSize } alt="open settings" />Settings</Button>
                <Button></Button>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        <hr />
        </div>
    )
}

export default NavigationBar;