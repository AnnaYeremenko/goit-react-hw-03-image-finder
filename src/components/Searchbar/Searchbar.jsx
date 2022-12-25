import { PropTypes } from 'prop-types';
import { FcSearch} from 'react-icons/fc';
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
                    <FcSearch style={{ width: 35, height: 30 }}/>
                </SearchFormBtn>
                
                <SearchFormInput
                type="text"
                name="query"
                autocomplete="off"
                autoFocus
                placeholder="Пошук зображень і світлин"
                />
            </SearchForm>
        </SearchbarTitle>
    );
};

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};