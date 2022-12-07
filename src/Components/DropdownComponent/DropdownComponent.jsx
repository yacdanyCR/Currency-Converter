import React from 'react'
import { Button } from 'react-bootstrap'
import InputGroupComponent from '../InputGroupComponent/InputGroupComponent'
import './style.css'

export const DropdownComponent = () => {
    return (
        <main>
            <section className='Currency_converter'>
                <div className='container'>
                    <InputGroupComponent title="From" />
                    <Button variant="outline-warning">Convert</Button>
                    <InputGroupComponent />
                </div>
            </section>
        </main >
    )
}

export default DropdownComponent