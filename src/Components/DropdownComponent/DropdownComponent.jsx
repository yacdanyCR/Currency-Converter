import React, { useState } from 'react'
import { Button, InputGroup, Form } from 'react-bootstrap'
import { getCurrencyConversion, listOfCountries } from '../../Services/get-currencyConverter';
import './style.css'

export const DropdownComponent = () => {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [mount, setMount] = useState(0);
    const [conversion, setConversion] = useState(0);

    const handleClick = async () => {
        const result = await getCurrencyConversion(from, to, mount)
        setConversion(result.toFixed(2))
    }

    return (
        <main>
            <section className='Currency_converter'>
                <div className='container'>
                    <InputGroup className="mb-3">
                        <Form.Select title='From' onChange={(e) => setFrom(e.target.value)}>
                            <option value={""}>From</option>
                            {listOfCountries.map((el, index) => {
                                return <option value={el} key={index}>{el}</option>
                            })}
                        </Form.Select>
                        <Form.Control aria-label="Number input" type='number' onChange={(e) => setMount(e.target.value)} />
                    </InputGroup>

                    <Button variant="outline-warning" onClick={() => handleClick()}>Convert</Button>

                    <InputGroup className="mb-3">
                        <Form.Select onChange={(e) => setTo(e.target.value)}>
                            <option value={""}>To</option>
                            {listOfCountries.map((el, index) => {
                                return <option value={el} key={index}>{el}</option>
                            })}
                        </Form.Select>
                        <Form.Control aria-label="Number input" type='number' value={conversion} disabled />
                    </InputGroup>
                </div>
            </section>
        </main >
    )
}

export default DropdownComponent