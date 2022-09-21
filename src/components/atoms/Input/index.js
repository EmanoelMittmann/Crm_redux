import { VariableInput,Container } from './style'

const Input = ({placeholder, type, id, name, onChange}) => 
    <Container>
        <label for={id}>{name}</label>
        <VariableInput type={type} placeholder={placeholder} id={id} onChange={onChange}/>
    </Container>
export default Input
