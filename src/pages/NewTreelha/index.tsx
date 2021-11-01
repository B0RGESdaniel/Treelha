import { Header } from "../../components/Header";
//import { useForm } from "react-hook-form";

import './styles.scss';

export function NewTreelha(){
    return(
        <>
            <Header/>
            <main>
            <form>
                <input type="text" className="input name" placeholder="Nome da trilha" />
                <div className="radio-fieldset">
                    <label className="radio-title" htmlFor="type">Tipo</label>
                    <div className="content">
                        
                        <label className="radio-container">
                            <input type="radio" name="type" id="bike" value="bike" />
                            Bicicleta
                            <span className="checkmark"></span>
                        </label>

                        <label className="radio-container">
                            <input type="radio" name="type" id="walk" value="walk" />
                            Caminhada
                            <span className="checkmark"></span>
                        </label>

                        <label className="radio-container">
                            <input type="radio" name="type" id="hiking" value="hiking" />
                            Hiking
                            <span className="checkmark"></span>
                        </label>
                        </div>
                    </div>

                    <div className="radio-fieldset">
                        <label className="radio-title" htmlFor="style">Estilo</label>
                        <div className="content">

                            <label className="radio-container">
                                <input type="radio" name="style" id="road" value="road" />
                                Estrada
                                <span className="checkmark"></span>
                            </label>

                            <label className="radio-container">
                                <input type="radio" name="style" id="off-road" value="off-road" />
                                Off-road
                                <span className="checkmark"></span>
                            </label>

                            <label className="radio-container">
                                <input type="radio" name="style" id="woods" value="woods" />
                                Mata
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>


                <label htmlFor="people">Nº de pessoas</label>
                <input type="number" className="input number" placeholder="0" id="people" />

                <label htmlFor="place">Local</label>
                <input type="text" className="input text" placeholder="Rua dos pombos, 0" id="place"/>

                <label htmlFor="day">Dia</label>
                <input type="date" className="input date" placeholder="08/02/20002" id="day" />

                <label htmlFor="hour">Hora</label>
                <input type="time" className="input time" id="hour" />

                <label htmlFor="whatsapp-link">Link do grupo Whatsapp<span>(opcional)</span></label>
                <input type="text" className="input text" placeholder="www.whatsapp.com.br" id="whatsapp-link" />

                <button type="submit">Salvar</button>
                </form>
            </main>
        </>
    )
}