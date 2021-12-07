import { useHistory } from "react-router-dom";
import { Header } from "../../components/Header";
//import { useForm } from "react-hook-form";
import { Container, Form, InputField, SelectField } from './styles';
import { IoCalendarClear, IoLocationSharp, IoTime, IoPeople, IoLink, IoChevronDown } from 'react-icons/io5';

export function NewTreelha(){

    const history = useHistory();

    function handleGoBackToMyTreelhas(){
        history.push('/treelhas')
    }


    return(
        <>
            <Header text="Voltar" action={handleGoBackToMyTreelhas}/>
            <Container>
                <Form>
                    <input type="text" placeholder="Nome da trilha" id="name" />
                    <label id="ltype">
                        Tipo
                        <SelectField>
                            <select id="type">
                                <option value="road">Estrada</option>
                                <option value="off-road" selected>Off-road</option>
                                <option value="woods">Mata</option>
                            </select>
                            <IoChevronDown/>
                        </SelectField>
                    </label>
                    <label id="lstyle">
                        Estilo
                        <SelectField>
                            <select id="style">
                                <option value="hiking" selected>Hiking</option>
                                <option value="walk">Caminhada</option>
                                <option value="bike">Pedalada</option>
                            </select>
                            <IoChevronDown/>
                        </SelectField>
                    </label>
                    <label id="lplace">
                        Local
                        <InputField>
                            <IoLocationSharp size={24}/>
                            <input type="text" id="place" placeholder="Rua dos pombos, 0" />
                        </InputField>
                    </label>
                    <label id="lday">
                        Dia
                        <InputField>
                            <IoCalendarClear size={24}/>
                            <input type="date" id="day"/>
                        </InputField>
                    </label>
                    <label id="ltime">
                        Hora
                        <InputField>
                            <IoTime size={24}/>
                            <input type="time" id="time"/>
                        </InputField>
                    </label>
                    <label id="lpeople">
                        Nº de pessoas
                        <InputField>
                            <IoPeople size={24}/>
                            <input type="number" id="people" placeholder="171" />
                        </InputField>
                    </label>
                    <label id="lwhatsapp">
                        Grupo do Whatsapp
                        <InputField>
                            <IoLink size={24}/>
                            <input type="text" id="whatsapp" placeholder="www.whatsapp.com.br" />
                        </InputField>
                    </label>
                    <button>Salvar</button>
                </Form>
            </Container>
        </>
    )
}