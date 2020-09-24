

import { Input, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import clsx from 'clsx';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { searchInputStyles } from '..';

const SearchInput = (props) => {

  const { className, onChange, style, ...rest } = props;
  const classes = searchInputStyles();
  const searchRef = useRef();

  const handleSearch = () => {
    onChange(searchRef.current.value);
  }

  return (
    <Paper {...rest} className={clsx(classes.root, className)} style={style}>
      <SearchIcon className={classes.icon} />
      <Input onChange={_.debounce(handleSearch, 1000)} inputRef={searchRef} {...rest} className={classes.input} disableUnderline placeholder='Search...' />
    </Paper>
  );
};

SearchInput.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object,
};

export default SearchInput;
