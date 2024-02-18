import { Story } from "@storybook/react";
import styled from "styled-components";
import { Typo, Typography, TypographyProps, typoStyles } from "./Typography";

export default {
  component: Typography,
  title: "Typography",
};

const Template: Story<TypographyProps> = (args) => <Typography {...args} />;

const typos = Object.keys(typoStyles) as Typo[];

const Container = ({ typos }: { typos: Typo[] }) => {
  return (
    <div>
      <Grid>
        <Typography tag="p">Name</Typography>
        <Typography tag="p">Single Line</Typography>
        <Typography tag="p">Paragraph</Typography>
      </Grid>
      {typos.map((typo) => (
        <Grid key={typo}>
          <Typography tag="p" typo="label">
            {typo}
          </Typography>
          <Typography tag="p" typo={typo}>
            They waited patiently for what seemed a very long time.
          </Typography>
          {!["hero-alternate", "hero", "heading-alternate", "label"].includes(
            typo
          ) && (
            <Typography tag="p" typo={typo}>
              They waited patiently for what seemed a very long time. They
              waited patiently for what seemed a very long time.
            </Typography>
          )}
        </Grid>
      ))}
    </div>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 1.2fr 1fr;
  margin-bottom: 24px;
  gap: 10px;
`;

const TypographyTemplate = () => <Container typos={typos} />;
export const Collection = TypographyTemplate.bind({});

export const Default = Template.bind({});
Default.args = {
  children: "Default typo",
};

export const Colored = Template.bind({});
Colored.args = {
  children: "Colored typo",
  color: "brandeis_blue",
};
