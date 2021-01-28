import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const Paragraph = styled.p`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.secondary};
`

export default function Home() {
  return (
    <>
      <Title>Quiz by Guilherme Balog</Title>
      <Paragraph>Este é o meu quiz</Paragraph>
    </>
    )
}
