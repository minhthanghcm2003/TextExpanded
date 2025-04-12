import './styles.css';
import { useState } from 'react';
export default function App() {
  return (
    <div>
      <TextExpander>
        1.Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander collapseButtonText='Collapse text' buttonColor='#ff6622'>
        2.Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true}>
        3.Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what
        we'sdasdassdasdas discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  children,
  expanded,
  collapsedNumWords = 20,
  expandButtonText = 'Show text',
  collapseButtonText = 'Show less',
  buttonColor = 'blue',
}) {
  const [isOpen, setIsOpen] = useState(expanded);

  const fullText = children;
  const shortText =
    children.split(' ').slice(0, collapsedNumWords).join(' ') + '...'; //Đầu tiên sẽ chuyển string thành mảng. Sau đó cắt từ vị trí 0 - 20. Tiếp theo là nối cái mảng lại thành chuỗi
  //Update
  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div className='box'>
      {isOpen ? fullText : shortText}
      <span style={{ color: buttonColor }} onClick={handleToggle}>
        {isOpen ? collapseButtonText : expandButtonText}
      </span>
    </div>
  );
}
