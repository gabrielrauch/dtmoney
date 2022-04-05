import { useEffect } from 'react'
import { api } from '../../services/api'
import { Container } from './styles'

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions').then((response) => console.log(response.data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
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
