import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import './index.css';

const CardV2 = ({ info: { title, imageUrl, smallDescription, date, time, path } }) => {
    return (
        <Card style={{ width: '18rem', cursor: 'pointer', margin: 'auto' }}>
            <div className='position-relative'>
                <Card.Img variant="top" src={imageUrl} style={{ objectFit: 'cover', height: '200px', padding: "3px" }} />
                <span className='position-absolute bottom-0 start-0 w-100 d-flex justify-content-between p-1' style={{ backgroundColor: '#eeeeee', opacity: 0.7 }}>
                    <span><i className='fas fa-solid fa-calendar px-1' />{date}</span>
                    <span> <i className='fas fa-regular  fa-clock px-1' />{time}</span>
                </span>
            </div>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {smallDescription}
                </Card.Text>
                <Button className='card-button orange-round-button'><i className='fas fa-play p-3' /><NavLink to={path}>GET EVENT</NavLink></Button>
            </Card.Body>
        </Card>
    );
}

export default CardV2;