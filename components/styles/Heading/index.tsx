/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import { css } from '@stitches/react';
import { FC } from 'react';

import { styled } from '../../../styles/theme';

type Props = {
	id?: string;
	type?: 'h1' | 'h2' | 'h3' | 'h4';
	weight?: number;
	fontsize?: string;
	fontfamily?: string;
	color?: string;
};

const getStyle = ({
	weight = 600,
	fontsize = '$5',
	fontfamily = '$secondary',
	color = '$gray50',
}: Props) => {
	const style = css({
		color,
		fontFamily: fontfamily,
		fontWeight: weight,
		fontSize: `${fontsize}`,
	});
	return style;
};

const Heading: FC<Props> = (
	{ children, type = 'h1', weight, fontsize, fontfamily, color, id },
	...props
) => {
	const Title = styled(
		type,
		getStyle({ weight, fontsize, fontfamily, color }),
	);
	return (
		<Title {...props} id={id}>
			{children}
		</Title>
	);
};

export { Heading };
