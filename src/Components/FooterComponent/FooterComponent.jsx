import React from 'react'
import { Card } from 'react-bootstrap'
import { FaGithub } from 'react-icons/fa'
import './style.css'

export const FooterComponent = () => {
    return (
        <footer>
            <section className='footer_section'>
                <Card className="text-center">
                    <Card.Body className='card_body'>
                        <Card.Title>Yacdany Arguedas Mora</Card.Title>
                        <Card.Text>
                            <a href='https://github.com/yacdanyCR' target={"_blank"} rel="noreferrer"><FaGithub size={60} color={"black"} /></a>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </section>
        </footer>
    )
}

export default FooterComponent