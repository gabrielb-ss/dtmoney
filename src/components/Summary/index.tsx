import incomeImg from '../../assests/income.svg';
import outcomeImg from '../../assests/outcome.svg';
import totalImg from '../../assests/total.svg';

import { Container } from "./styles";

export function Summary () {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas"/>
                </header>
                <strong>R$17.400,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas"/>
                </header>
                <strong>- R$1.300,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total"/>
                </header>
                <strong>R$198.823,21</strong>
            </div>
        </Container>
    );
}