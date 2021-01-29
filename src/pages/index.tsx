import styled from 'styled-components';
import { bg, title } from '../../db.json';
import { Widget, WidgetContent, WidgetHeader } from '../components/Widget';
import QuizBackground from '../components/QuizBackground';
import QuizLogo from '../components/QuizLogo';
import GitHubCorner from '../components/GitHubCorner';
import Footer from '../components/Footer';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={bg}>
      <QuizContainer>
        <QuizLogo className="a" />
        <Widget>
          <WidgetHeader>
            <h1>{title}</h1>
          </WidgetHeader>

          <WidgetContent>
            <p>Lorem ipsum dolor sit am.</p>
          </WidgetContent>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/GuilhermeBalog/quiz" />
    </QuizBackground>
  );
}
