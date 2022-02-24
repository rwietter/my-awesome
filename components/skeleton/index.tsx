/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import ContentLoader from 'react-content-loader';
import { styled } from '../../styles/theme';

interface Props {
	width?: number | string;
	height?: number | string;
}

const Loader = styled(ContentLoader, {

});

const TextLoader = () => (
  <Loader animate foregroundColor="#777" viewBox="0 0 380 70">
    <rect x="0" y="0" rx="3" ry="3" width="100" height="6" />
  </Loader>
);

export default TextLoader;
