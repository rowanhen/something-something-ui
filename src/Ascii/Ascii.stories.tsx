import { Story } from "@storybook/react";
import styled from "styled-components";
import { Ascii, AsciiProps } from "./Ascii";
import { Asciis, asciiList } from "./asciiList";

export default {
  title: "Ascii",
  component: Ascii,
};

const Template: Story<AsciiProps> = (props) => <Ascii {...props} />;

export const Default = Template.bind({});

Default.args = {
  ascii: "car",
  size: 16,
};

const Container = () => {
  return (
    <div>
      {Object.keys(asciiList).map((ascii) => {
        return (
          <Wrapper key={ascii}>
            <span>{ascii}</span>
            <Ascii ascii={ascii as Asciis} />
          </Wrapper>
        );
      })}
    </div>
  );
};

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 400px;
  height: 400px;
`;

const CollectionTemplate = () => <Container />;

export const Collection = CollectionTemplate.bind({});
