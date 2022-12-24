import { PropTypes } from 'prop-types';
import {
    SearchbarTitle,
    SearchForm,
    SearchFormBtn,
    SearchFormBtnLabel,
    SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
    return (
        <SearchbarTitle>
            <SearchForm onSubmit={onSubmit}>
                <SearchFormBtn tupe="submit">
                    <SearchFormBtnLabel>Search</SearchFormBtnLabel>
                </SearchFormBtn>
                
                <SearchFormInput
                type="text"
                name="query"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                />
            </SearchForm>
        </SearchbarTitle>
    );
};

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};