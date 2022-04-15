import { Container } from './styles'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useContext } from 'react'
import { TransactionsContext } from '../../TransactionsContext'

export function Summary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (accumulator, transaction) => {
      if (transaction.type === 'deposit') {
        accumulator.deposits += transaction.amount
        accumulator.total += transaction.amount
      } else {
        accumulator.withdraws += transaction.amount
        accumulator.total -= transaction.amount
      }
      return accumulator
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  )
  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="Income" />
        </header>
        <strong>{new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Outcome</p>
          <img src={outcomeImg} alt="Outcome" />
        </header>
        <strong>-{new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(summary.withdraws)}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Income" />
        </header>
        <strong>{new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(summary.total)}</strong>
      </div>
    </Container>
  )
}
