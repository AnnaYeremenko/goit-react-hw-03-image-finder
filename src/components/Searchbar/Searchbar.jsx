import { PropTypes } from 'prop-types';
import {
    SearchbarTitle,
    SearchForm,
    SerachFormBtn,
    SearchFormBtnLabel,
    SearchFormInput,

} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
    return (
        <SearchbarTitle>
            <SearchForm onSubmit={onSubmit}>
                <SerachFormBtn tupe="submit">
                    <SearchFormBtnLabel>Search</SearchFormBtnLabel>
                </SerachFormBtn>
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