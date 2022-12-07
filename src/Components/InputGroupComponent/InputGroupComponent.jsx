import React from 'react'
import { InputGroup, Dropdown, Form, DropdownButton } from 'react-bootstrap'
export const InputGroupComponent = () => {
    return (
        <>
            <InputGroup className="mb-3">
                <DropdownButton
                    variant="outline-secondary"
                    title=""
                    id="input-group-dropdown-1"
                >
                    <Dropdown.Item value="CRC">CRC</Dropdown.Item>
                </DropdownButton>
                <Form.Control aria-label="Text input with dropdown button" type='number' />
            </InputGroup>
        </>
    )
}

export default InputGroupComponent