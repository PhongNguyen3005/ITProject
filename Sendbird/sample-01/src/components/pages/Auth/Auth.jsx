import SendbirdCalls from 'sendbird-calls';
import styled from 'styled-components';
import * as fonts from 'styles/fonts';
import * as mixins from 'styles/mixins';
import { media } from 'utils';

import Logo from 'components/atoms/Logo';
import LoginForm from 'components/organisms/LoginForm';
import Screen from 'components/templates/Screen';

import pack from '../../../../package.json';

const Wrapper = styled(Screen)`
  width: 100vw;
  height: 100vh;
  ${mixins.flexCenter};
  color: rgb(33, 34, 66);
  background-color: rgb(255, 255, 255);
  ${media.main} {
    background-color: rgb(246, 248, 252);
  }
`;

const Content = styled.div`
  ${mixins.flexCenter};
  flex-direction: column;
  height: 100%;
  ${media.main} {
    height: auto;
    margin-top: 134px;
    margin-bottom: auto;
  }
`;

const Title = styled.div`
  ${fonts.big};
  ${fonts.demi};
  margin-bottom: 40px;
`;

const VersionInfo = styled.div`
  ${mixins.flexCenter};
  width: 100%;
  bottom: 24px;
  position: absolute;
  ${media.main} {
    display: none;
  }
`;

const VersionText = styled.div`
  ${fonts.small};
  margin-left: 8px;
  margin-right: 8px;
`;

const Auth = () => {
    return (
        <div className="test" width="200px">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis velit, commodi blanditiis cupiditate eius odit reiciendis molestias ducimus quo tenetur libero, voluptas animi aliquam illo. Sequi ea culpa praesentium totam?</div>
    )
}
export default Auth;
