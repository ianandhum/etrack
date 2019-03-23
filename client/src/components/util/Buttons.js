import {Button as BaseButton,styled,withTheme} from 'reakit'

const _Button = styled(BaseButton)`
  text-transform: uppercase;
  border-radius:0px;
`;

const _ButtonRounded = styled(_Button)`
  border-radius: 1.25em;
  padding: 0 1.375em;
`;

const _ButtonLarge = styled(_Button)`
  font-size: 20px;
`;
const _ButtonLink = styled(_Button)`
  background:transparent;
  color: #000;
  padding:0;
  &:hover{
    box-shadow:none;
    color:purple;

  }
`;


export const Button = withTheme(_Button)

export const ButtonRounded = withTheme(_ButtonRounded)
export const ButtonLarge =  withTheme(_ButtonLarge)
export const ButtonLink =  withTheme(_ButtonLink)