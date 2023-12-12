import { Content } from 'lessons/lesson27/components'
import { SectionWrapper } from './styles';

// interface SectionProps {
//   userData: {
//     userName: string;
//     age: number;
//     email: string;
//   };
// }

// пропсы, ранее передававшиеся в Section({userData}: SectionProps)

function Section() {
  return (
  <SectionWrapper>
    <h2>Section component</h2>
    <Content />
    {/* <Content userData={userData} /> */}
  </SectionWrapper>
  );
}

export default Section;