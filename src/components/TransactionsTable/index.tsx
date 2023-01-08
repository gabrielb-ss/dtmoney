import { Container } from "./styles";

export function TransactionsTable () {
   return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$5.000</td>
                        <td>Entretenimento</td>
                        <td>20/12/2023</td>
                    </tr>
                    <tr>
                        <td>Spotify</td>
                        <td className="withdraw">- R$34,90</td>
                        <td>Entretenimento</td>
                        <td>05/01/2023</td>
                    </tr>
                </tbody>
            </table>
        </Container>
   );
 
}