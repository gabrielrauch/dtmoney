import { Container } from "./styles";

export function TransactionsTable () {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/04/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdrawal">- R$2.000</td>
                        <td>Casa</td>
                        <td>20/04/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}