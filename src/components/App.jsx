import React, { Component } from 'react';
import { fetchGalleryWithQuery } from './Api/Api';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    images: [],
    error: null,
    isLoading: false,
    isOpen: false,
    selectedImage: '',
    total: null,
    loadPage: false,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }
  async componentDidUpdate(_, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ isLoading: true });
      try {
        const response = await fetchGalleryWithQuery(
          this.state.query,
          this.state.page
        );
        this.setState({
          images: [...response.hits],
          total: response.totalHits,
        });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
    if (prevState.page !== this.state.page) {
      this.setState({ loadPage: true });
      // scrollHandler();
      window.scrollBy({
        top: 300,
        behavior: 'smooth',
      });
      try {
        const response = await fetchGalleryWithQuery(
          this.state.query,
          this.state.page
        );
        this.setState(prevState => ({
          images: [...prevState.images, ...response.hits],
        }));
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ loadPage: false });
      }
    }
  }
  handleSubmit = evt => {
    evt.preventDefault();
    this.setState({
      page: 1,
      query: evt.target.elements.query.value,
      images: [],
      total: null,
    });
  };
  hendleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  selectImage = imageUrl => {
    this.setState({
      selectedImage: imageUrl,
      isOpen: true,
    });
  };
  modalClose = () => {
    this.setState({
      selectedImage: '',
      isOpen: false,
    });
  };
  onKeyDown = event => {
    if (event.code === 'Escape') {
      this.modalClose();
    }
  };
  render() {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar onSubmit={this.handleSubmit} />
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <ImageGallery
            images={this.state.images}
            onSelect={this.selectImage}
          />
        )}
        {this.state.loadPage && <Loader />}
        {this.state.images.length < this.state.total && (
          <Button onClick={this.hendleLoadMore} />
        )}
        {this.state.isOpen && (
          <Modal src={this.state.selectedImage} onClose={this.modalClose} />
        )}
      </div>
    );
  }
}
  
