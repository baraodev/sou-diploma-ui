import React from 'react';

import { Box, Icon, Input } from './styles';
import Lupa from '../../assets/imgs/pesquisar.svg';

const SearchBox = ({ searchValue, handleSearch }) => (
	<Box>
		<Icon icon={Lupa} />
		<Input value={searchValue} onChange={handleSearch} placeholder="Pesquisar" />
	</Box>
);

SearchBox.defaultProps = {
	searchValue: ''
};

export default SearchBox;
